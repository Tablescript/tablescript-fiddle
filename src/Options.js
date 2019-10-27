import React from 'react';

const Options = ({
  evaluateCallableResult,
  validateTables,
  onChangeEvaluateCallableResult,
  onChangeValidateTables,
}) => (
  <div className="ph2 flex flex-row">
    <label>
      <input
        type="checkbox"
        checked={evaluateCallableResult}
        onChange={e => onChangeEvaluateCallableResult(e.target.checked)}
      /> Evaluate Callable Result
    </label>
    <label className="ml3">
      <input
        type="checkbox"
        checked={validateTables}
        onChange={e => onChangeValidateTables(e.target.checked)}
      /> Validate Tables
    </label>
  </div>
);

export default Options;
