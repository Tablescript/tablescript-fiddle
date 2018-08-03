import React from 'react';
import Result from './Result.component';
import Console from './Console.component';

const Output = ({ result, output, onClear }) => (
  <div className="w-50 ph2 flex flex-column">
    <Console output={ output } onClear={ onClear } />
    <Result result={ result } />
  </div>
);

export default Output;
