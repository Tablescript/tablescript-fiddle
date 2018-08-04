import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/kuroir';

const Editor = ({ script, onChange }) => (
  <AceEditor
    className="w-100"
    width=""
    mode="javascript"
    theme="kuroir"
    name="blah2"
//    onLoad={this.onLoad}
    onChange={ onChange }
    fontSize={14}
    showPrintMargin={true}
    showGutter={true}
    highlightActiveLine={true}
    value={ script }
    setOptions={{
      //enableBasicAutocompletion: false,
      //enableLiveAutocompletion: false,
      //enableSnippets: false,
      showLineNumbers: true,
      tabSize: 2,
    }}
    editorProps={{
      $blockScrolling: Infinity
    }}
  />
);

export default Editor;
