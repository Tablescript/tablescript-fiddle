import React from 'react';
import Fiddle from './Fiddle.component';
import 'tachyons/css/tachyons.css';

const App = props => (
  <div className="bg-red">
    <header className="bg-pink">
      <h1 className="bg-green">Tablescript Fiddle</h1>
    </header>
    <Fiddle />
  </div>
);

export default App;
