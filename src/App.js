import React from 'react';
import Fiddle from './Fiddle.component';
import 'tachyons/css/tachyons.css';
import { version } from '../package.json';

const App = props => (
  <div className="flex flex-column">
    <header className="pa2 helvetica">
      <h1 className="">Tablescript Fiddle</h1>
      <p>Use this tool to play with the Tablescript language.</p>
      <p>Eventually, you will be able to save your scripts, but for now just copy/paste into a file on your computer.</p>
    </header>
    <Fiddle />
    <footer>
      <p className="pa2 f7 helvetica">Tablescript.js Fiddle version v{ version }</p>
    </footer>
  </div>
);

export default App;
