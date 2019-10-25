import React, { useState } from 'react';
import Code from './Code';
import Output from './Output';
import { initializeTablescript } from 'tablescript.js';

const Fiddle = () => {
  const [script, setScript] = useState("print('I have a ham radio');\n");
  const [output, setOutput] = useState([]);
  const [result, setResult] = useState('');

  const handleClear = () => {
    setOutput([]);
  };

  const handleChange = (script) => {
    setScript(script);
  };

  const handlePrint = (s) => {
    setOutput([...output, s]);
  };

  const tablescript = initializeTablescript({
    output: handlePrint,
  });

  const handleRun = (clear) => {
    if (clear) {
      handleClear();
    }

    try {
      const result = tablescript.runScript(script, 'fiddle');
      setResult(result.asNativeString());
    } catch (e) {
      setResult(e.toString());
    }
  };

  return (
    <div className="flex flex-row helvetica">
      <Code
        script={script}
        onChange={handleChange}
        onRun={handleRun}
      />
      <Output result={result} output={output} onClear={handleClear} />
    </div>
  );
};

export default Fiddle;
