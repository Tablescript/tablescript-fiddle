import React from 'react';
import Editor from './Editor.component';

const Code = ({ onRun, script, onChange }) => (
  <div className="w-50 ph2">
    <h2>Script</h2>
    <form onSubmit={ onRun }>
      <Editor script={ script } onChange={ onChange } />
      <input type="submit" value="Run" />
    </form>
  </div>
);

export default Code;
