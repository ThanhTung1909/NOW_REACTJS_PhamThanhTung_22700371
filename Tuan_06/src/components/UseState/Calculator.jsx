import React, { useState } from "react";

function Calculator() {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [result, setResult] = useState(0);

  const handleChangeInputA = (e) => {
    setInputA(e.target.value);
  };

  const handleChangeInputB = (e) => {
    setInputB(e.target.value);
  };
  const handleAdd = () => {
    setResult(parseFloat(inputA) + parseFloat(inputB));
  };
  const handleSubtraction = () => {
    setResult(parseFloat(inputA) - parseFloat(inputB));
  };
  const handleMulti = () => {
    setResult(parseFloat(inputA) * parseFloat(inputB));
  };
  const handleDiv = () => {
    setResult(parseFloat(inputA) / parseFloat(inputB));
  };
  const handleReset = () => {
    setInputA("");
    setInputB("");
    setResult(0);
  };
  return (
    <div className="mt-50">
      <h1>Calculator</h1>
      <div className="flex flex-col items-center justify-between p-5 gap-5">
        <input
          className="border text-center"
          type="number"
          placeholder="Nhập vào số A"
          value={inputA}
          onChange={handleChangeInputA}
        />
        <input
          className="border text-center"
          type="number"
          placeholder="Nhập vào số B"
          value={inputB}
          onChange={handleChangeInputB}
        />
      </div>
      <div>
        <h3>Result</h3>
        <input type="text" className="border text-center" value={result} />
      </div>
      <div className="flex items-center justify-center gap-5 mt-10">
        <button onClick={handleAdd} className="border size-10">
          +
        </button>
        <button onClick={handleSubtraction} className="border size-10">
          -
        </button>
        <button onClick={handleMulti} className="border size-10">
          *
        </button>
        <button onClick={handleDiv} className="border size-10">
          /
        </button>
        <button onClick={handleReset} className="border size-10">
          RS
        </button>
      </div>
    </div>
  );
}

export default Calculator;
