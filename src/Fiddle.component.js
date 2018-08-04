import React, { Component } from 'react';
import Code from './Code.component';
import Output from './Output.component';
import {
  runScript,
  initializeContext,
  defaultInitializeScope,
  defaultInterpreterOptions,
  defaultValueFactory
} from 'tablescript.js';

class Fiddle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      script: "print('I have a ham radio')\n",
      output: [],
      result: '',
    };
  }

  onClear(event) {
    this.setState(() => ({ output: [] }));
  }

  handleChange(script) {
    this.setState({ script: script });
  }

  setResult(context) {
    return function(result) {
      this.setState(() => ({ result: result.asNativeString(context) }));
    };
  }

  onRun(event) {
    const interpreterOptions = defaultInterpreterOptions({ tableValidation: true });
    interpreterOptions.output.print = this.handlePrint.bind(this);

    const context = initializeContext(
      defaultInitializeScope,
      [],
      interpreterOptions,
      defaultValueFactory,
    );

    runScript(context, this.state.script, 'fiddle')
      .then(this.setResult(context).bind(this))
      .catch(e => {
        this.setState({ result: e.toString() });
      });
    event.preventDefault();
  }

  handlePrint(s) {
    this.setState(() => ({ output: [...this.state.output, s] }));
  }

  render() {
    return (
      <div className="flex flex-row helvetica">
        <Code script={ this.state.script } onChange={ this.handleChange.bind(this) } onRun={ this.onRun.bind(this) } />
        <Output result={ this.state.result } output={ this.state.output } onClear={ this.onClear.bind(this) } />
      </div>
    );
  }
}

export default Fiddle;
