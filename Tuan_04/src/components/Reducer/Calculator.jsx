import React, { useReducer } from "react";


const initialState = {
  currentInput: "",
  previousInput: "",
  operation: null,
  result: null,
};


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DIGIT":
      return {
        ...state,
        currentInput: state.currentInput + action.payload,
      };
    case "SET_OPERATION":
      return {
        ...state,
        previousInput: state.currentInput,
        currentInput: "",
        operation: action.payload,
      };
    case "CALCULATE":
      let result;
      const prev = parseFloat(state.previousInput);
      const current = parseFloat(state.currentInput);
      if (isNaN(prev) || isNaN(current)) return state;

      switch (state.operation) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "*":
          result = prev * current;
          break;
        case "/":
          result = prev / current;
          break;
        default:
          return state;
      }
      return {
        ...state,
        result,
        currentInput: "",
        previousInput: "",
        operation: null,
      };
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
};

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDigitClick = (digit) => {
    dispatch({ type: "ADD_DIGIT", payload: digit });
  };

  const handleOperationClick = (operation) => {
    dispatch({ type: "SET_OPERATION", payload: operation });
  };

  const handleCalculate = () => {
    dispatch({ type: "CALCULATE" });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div>
      <div>
        <h1>Calculator</h1>
        <div>
          <div>
            {state.previousInput} {state.operation} {state.currentInput}
          </div>
          <div>Result: {state.result !== null ? state.result : ""}</div>
        </div>
        <div>
          <button onClick={() => handleDigitClick("1")}>1</button>
          <button onClick={() => handleDigitClick("2")}>2</button>
          <button onClick={() => handleDigitClick("3")}>3</button>
          <button onClick={() => handleOperationClick("+")}>+</button>
        </div>
        <div>
          <button onClick={() => handleDigitClick("4")}>4</button>
          <button onClick={() => handleDigitClick("5")}>5</button>
          <button onClick={() => handleDigitClick("6")}>6</button>
          <button onClick={() => handleOperationClick("-")}>-</button>
        </div>
        <div>
          <button onClick={() => handleDigitClick("7")}>7</button>
          <button onClick={() => handleDigitClick("8")}>8</button>
          <button onClick={() => handleDigitClick("9")}>9</button>
          <button onClick={() => handleOperationClick("*")}>*</button>
        </div>
        <div>
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleDigitClick("0")}>0</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleOperationClick("/")}>/</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
