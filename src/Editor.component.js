import React from 'react';

const Editor = ({ script, onChange }) => (
  <textarea className="w-100 h5 code" name="script" value={ script } onChange={ onChange }></textarea>
);

export default Editor;
