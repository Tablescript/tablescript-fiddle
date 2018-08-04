import React from 'react';
import Editor from './Editor.component';

const Code = ({ onRun, script, onChange }) => {

  const clearAndRun = () => onRun(true);
  const justRun = () => onRun(false);

  return (
    <div className="w-50 ph2">
      <h2>Script</h2>
      <Editor script={ script } onChange={ onChange } />
      <button onClick={ justRun }>Run</button>
      <button onClick={ clearAndRun }>Clear &amp; Run</button>
    </div>
  );
};

export default Code;
