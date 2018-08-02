import React, { Component } from 'react';
import {
  runScript,
  initializeContext,
  defaultInitializeScope,
  defaultInterpreterOptions,
  defaultValueFactory
} from 'tablescript.js';
import logo from './logo.svg';
import './App.css';

let context;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      script: "print('I have a ham radio')\n",
      output: [],
      result: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePrint = this.handlePrint.bind(this);
    this.setResult = this.setResult.bind(this);
    this.onClear = this.onClear.bind(this);

    const interpreterOptions = defaultInterpreterOptions({ tableValidation: true });
    interpreterOptions.output.print = this.handlePrint;

    context = initializeContext(
      defaultInitializeScope,
      [],
      interpreterOptions,
      defaultValueFactory,
    );
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

  setResult(result) {
    this.setState({
      ...this.state,
      result: result.asNativeString(context),
    });
  }

  handleSubmit(event) {
    runScript(context, this.state.script, 'fiddle').then(this.setResult);
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
        <p>
          Result: { this.state.result }
        </p>
        <p>
          Output: { this.state.output.join("\n") }
        </p>
        <button onClick={ this.onClear }>Clear</button>
        <form onSubmit={ this.handleSubmit }>
          <label>
            Script:
            <textarea name="script" value={ this.state.script } onChange={ this.handleChange }></textarea>
          </label>
          <input type="submit" value="Run" />
        </form>
      </div>
    );
  }
}

export default App;
