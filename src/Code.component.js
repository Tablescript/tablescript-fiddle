import React from 'react';
import Editor from './Editor.component';

const Code = ({ onSubmit, script, onChange }) => (
  <div>
    <form onSubmit={ onSubmit }>
      <label>
        Script:
        <Editor script={ script } onChange={ onChange } />
      </label>
      <input type="submit" value="Run" />
    </form>
  </div>
);

export default Code;
