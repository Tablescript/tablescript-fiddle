import React, { Component } from 'react';
import { Result } from './Result.component';
import { Output } from './Output.component';
import { ClearButton } from './ClearButton.component';
import { Code } from './Code.component';
import {
  runScript,
  initializeContext,
  defaultInitializeScope,
  defaultInterpreterOptions,
  defaultValueFactory
} from 'tablescript.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      script: "print('I have a ham radio')\n",
      output: [],
      result: '',
    };
  }

  onClear(event) {
    this.setState({
      ...this.state,
      result: '',
      output: []
    });
  }

  handleChange(event) {
    this.setState({
      script: event.target.value
    });
  }

  setResult(context) {
    return function(result) {
      this.setState({
        ...this.state,
        result: result.asNativeString(context),
      });
    };
  }

  handleSubmit(event) {
    const interpreterOptions = defaultInterpreterOptions({ tableValidation: true });
    interpreterOptions.output.print = this.handlePrint.bind(this);

    const context = initializeContext(
      defaultInitializeScope,
      [],
      interpreterOptions,
      defaultValueFactory,
    );

    runScript(context, this.state.script, 'fiddle').then(this.setResult(context).bind(this));
    event.preventDefault();
  }

  handlePrint(s) {
    this.setState({
      ...this.state,
      output: [
        ...this.state.output,
        s,
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Result result={ this.state.result } />
        <Output output={ this.state.output } />
        <ClearButton onClear={ this.onClear.bind(this) } />
        <Code script={ this.state.script } onChange={ this.handleChange.bind(this) } onSubmit={ this.handleSubmit.bind(this) } />
      </div>
    );
  }
}

export default App;
