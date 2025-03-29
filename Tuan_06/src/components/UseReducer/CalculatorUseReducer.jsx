import React, { useReducer, useState } from "react";

const initialState = {
  inputA: "",
  inputB: "",
  result: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT_A":
      return { ...state, inputA: action.payload };
    case "SET_INPUT_B":
      return { ...state, inputB: action.payload };
    case "ADD":
      return {
        ...state,
        result: parseFloat(state.inputA) + parseFloat(state.inputB),
      };
    case "SUB":
      return {
        ...state,
        result: parseFloat(state.inputA) - parseFloat(state.inputB),
      };
    case "MULTI":
      return {
        ...state,
        result: parseFloat(state.inputA) * parseFloat(state.inputB),
      };
    case "DIV":
      return {
        ...state,
        result: parseFloat(state.inputA) / parseFloat(state.inputB),
      };
    case "RESET":
      return { ...state, result: 0, inputA: "", inputB: "" };
  }
};

function CalculatorUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="mt-50">
      <h1>CalculatorUseReducer</h1>
      <div className="flex flex-col items-center justify-between p-5 gap-5">
        <input
          className="border text-center"
          type="number"
          placeholder="Nhập vào số A"
          value={state.inputA}
          onChange={(e) =>
            dispatch({ type: "SET_INPUT_A", payload: e.target.value })
          }
        />
        <input
          className="border text-center"
          type="number"
          placeholder="Nhập vào số B"
          value={state.inputB}
          onChange={(e) =>
            dispatch({ type: "SET_INPUT_B", payload: e.target.value })
          }
        />
      </div>
      <div>
        <h3>Result</h3>
        <input
          type="text"
          className="border text-center"
          value={state.result}
        />
      </div>
      <div className="flex items-center justify-center gap-5 mt-10">
        <button
          onClick={() => dispatch({ type: "ADD" })}
          className="border size-10"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "SUB" })}
          className="border size-10"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: "MULTI" })}
          className="border size-10"
        >
          *
        </button>
        <button
          onClick={() => dispatch({ type: "DIV" })}
          className="border size-10"
        >
          /
        </button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="border size-10"
        >
          RS
        </button>
      </div>
    </div>
  );
}

export default CalculatorUseReducer;
