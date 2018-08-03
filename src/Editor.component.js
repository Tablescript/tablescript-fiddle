import React from 'react';

export const Editor = props => (
  <textarea name="script" value={ props.script } onChange={ props.onChange }></textarea>
);
