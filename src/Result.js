import React from 'react';

const Result = ({ result }) => (
  <div>
    <h2>Result</h2>
    { result.split('\n').map(line => (
      <p className="mt0 mb0">{line}</p>
    ))}
  </div>
);

export default Result;
