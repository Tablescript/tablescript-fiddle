import React from 'react';

const Output = ({ output }) => {
  const outputLines = output.map((l, i) => <li key={ i }>{ l }</li>);

  return (
    <div>
      <h2>Output</h2>
      <ul>
        { outputLines }
      </ul>
    </div>
  );
};

export default Output;
