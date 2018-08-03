import React from 'react';

const Editor = ({ script, onChange }) => (
  <textarea name="script" value={ script } onChange={ onChange }></textarea>
);

export default Editor;
