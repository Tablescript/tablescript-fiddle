import React from 'react';

export const Output = props => {
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
