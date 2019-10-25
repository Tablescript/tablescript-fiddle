import React from 'react';
import Result from './Result';
import Console from './Console';

const Output = ({ result, output, onClear }) => (
  <div className="w-50 ph2 flex flex-column">
    <Console output={ output } onClear={ onClear } />
    <Result result={ result } />
  </div>
);

export default Output;
