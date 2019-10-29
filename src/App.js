import React from 'react';
import 'tachyons/css/tachyons.css';
import Fiddle from './Fiddle';

const App = () => (
  <div className="flex flex-column">
    <header className="pa2 helvetica">
      <h1 className="">Tablescript Fiddle</h1>
      <p>Use this tool to play with the <a href="https://tablescript.org">Tablescript language</a>.</p>
      <p>Eventually, you will be able to save your scripts, but for now just copy/paste into a file on your computer.</p>
    </header>
    <Fiddle />
  </div>
);

export default App;
