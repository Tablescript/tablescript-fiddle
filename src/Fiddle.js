import React, { useState, useMemo } from 'react';
import queryString from 'query-string';
import { version } from '../package.json';
import Code from './Code';
import Output from './Output';
import Options from './Options';
import { initializeTablescript } from 'tablescript.js';

const createOutputBuffer = () => {
  let lines = [];

  const clear = () => lines = [];

  const handlePrint = s => lines = [...lines, s];

  const getLines = () => lines;

  return {
    clear,
    handlePrint,
    getLines,
  };
};

const Fiddle = () => {
  const { script: passedScript } = queryString.parse(window.location.search);
  const [script, setScript] = useState(passedScript || "print('I have a ham radio');\n");
  const [output, setOutput] = useState([]);
  const [result, setResult] = useState('');
  const [evaluateCallableResult, setEvaluateCallableResult] = useState(true);
  const [validateTables, setValidateTables] = useState(true);

  const handleClear = () => {
    setOutput([]);
    setResult('');
  };

  const handleChange = (script) => {
    setScript(script);
  };

  const outputBuffer = useMemo(() => createOutputBuffer(), []);
  
  const tablescript = useMemo(() => initializeTablescript({
    output: outputBuffer.handlePrint,
    evaluateCallableResult,
    validateTables,
  }), [outputBuffer, evaluateCallableResult, validateTables]);

  const handleRun = (clear) => {
    try {
      outputBuffer.clear();
      const result = tablescript.runScript(script, 'fiddle');
      setOutput(clear ? outputBuffer.getLines() : [...output, ...outputBuffer.getLines()]);
      setResult(result.asNativeString());
    } catch (e) {
      setResult(e.toString());
    }
  };

  return (
    <>
      <div className="flex flex-row helvetica">
        <Options
          evaluateCallableResult={evaluateCallableResult}
          validateTables={validateTables}
          onChangeEvaluateCallableResult={setEvaluateCallableResult}
          onChangeValidateTables={setValidateTables}
        />
      </div>
      <div className="flex flex-row helvetica">
        <Code
          script={script}
          onChange={handleChange}
          onRun={handleRun}
        />
        <Output result={result} output={output} onClear={handleClear} />
      </div>
      <div className="flex flex-row helvetica">
        <p className="pa2 f7 helvetica">
          <a href="https://github.com/Tablescript/tablescript.js">Tablescript.js </a> version v{ tablescript.version }
          &nbsp;
          (<a href="https://github.com/Tablescript/tablescript-fiddle">Tablescript.js Fiddle</a> version v{ version })
        </p>
      </div>
    </>
  );
};

export default Fiddle;
