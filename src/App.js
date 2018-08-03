import React from 'react';
import Fiddle from './Fiddle.component';
import logo from './logo.svg';
import './App.css';

const App = props => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Fiddle />
  </div>
);

export default App;
