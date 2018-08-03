import React from 'react';
import ClearButton from './ClearButton.component';

const Console = ({ output, onClear }) => {
  const allOutput = output.join('\n');

  return (
    <div>
      <h2>Output</h2>
      <textarea className="w-100 h5 code" value={ allOutput } />
      <ClearButton onClear={ onClear } />
    </div>
  );
};

export default Console;
