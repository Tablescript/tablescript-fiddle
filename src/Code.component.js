import React from 'react';
import { Editor } from './Editor.component';

export const Code = props => (
  <div>
    <form onSubmit={ props.onSubmit }>
      <label>
        Script:
        <Editor script={ props.script } onChange={ props.onChange } />
      </label>
      <input type="submit" value="Run" />
    </form>
  </div>
);
