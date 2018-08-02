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

const interpreterOptions = defaultInterpreterOptions({ tableValidation: true });

const context = initializeContext(
  defaultInitializeScope,
  [],
  interpreterOptions,
  defaultValueFactory,
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      script: "print('I have a ham radio')\n"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      script: event.target.value
    });
  }

  handleSubmit(event) {
    runScript(context, this.state.script, 'fiddle').then(function(result) {
      alert(result.asNativeString(context));
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={ this.handleSubmit }>
          <label>
            Script:
            <textarea name="script" value={ this.state.script } onChange={ this.handleChange }></textarea>
          </label>
          <input type="submit" value="Run" />
        </form>
        <button onClick={function() {
          runScript(context, 'print("I have a ham radio")', 'nothing').then(function(result) {
            alert(result.asNativeString(context));
          });
        }}>Run</button>
      </div>
    );
  }
}

export default App;
