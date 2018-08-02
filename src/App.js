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

const Result = props => (
  <div>
    <h2>Result</h2>
    <p>
      { props.result }
    </p>
  </div>
);

const Output = props => {
  const outputLines = props.output.map((l, i) => <li key={ i }>{ l }</li>);

  return (
    <div>
      <h2>Output</h2>
      <ul>
        { outputLines }
      </ul>
    </div>
  );
};

const ClearButton = props => (
  <button onClick={ props.onClear }>Clear</button>
);

const Code = props => (
  <div>
    <form onSubmit={ props.onSubmit }>
      <label>
        Script:
        <Editor script={ props.script } onChange={ props.onChange } />
      </label>
      <input type="submit" value="Run" />
    </form>
  </div>
);

const Editor = props => (
  <textarea name="script" value={ props.script } onChange={ props.onChange }></textarea>
);

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
        <Result result={ this.state.result } />
        <Output output={ this.state.output } />
        <ClearButton onClear={ this.onClear } />
        <Code script={ this.state.script } onChange={ this.handleChange } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default App;
