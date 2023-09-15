import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export const OPERATORS = ["+", "++", "^"];
function App() {
  //1. How we form numbers - to have multiple digits inputted consecutively up until an operator is pressed
  //2. How we do the operation itself
  // Ex : 1->12->123
  const [operator1, setOperator1] = useState("");
  const [operator2, setOperator2] = useState("");
  const [operatorPressed, setOperatorPressed] = useState("");
  const [result, setResult] = useState(0);

  const setFirstOperator = (digit) => {
    let currentOperator = operatorPressed;

    if (OPERATORS.indexOf(digit) > -1) {
      setOperatorPressed(digit);
    } else {
      if (currentOperator !== "") {
        let initialValue = operator2;
        initialValue = initialValue + digit;
        setOperator2(initialValue);
      } else {
        let initialValue = operator1;
        initialValue = initialValue + digit;
        setOperator1(initialValue);
      }
    }
  };

  const calculateResult = (operator1, operator2, operationDone) => {
    switch (operationDone) {
      case "+": {
        return Number(operator1) + Number(operator2);
      }
      case "++": {
        return Number(operator1) + 1;
      }
      case "^": {
        return Number(operator1) ** Number(operator2);
      }
    }
  };
  console.log("OPERATOR 1 : ", operator1);
  console.log("OPERATOR 2 : ", operator2);
  return (
    <div className="App">
      <div className="calculator">
        <div
          className="key"
          onClick={() => {
            setFirstOperator("1");
          }}
        >
          1
        </div>
        <div
          className="key"
          onClick={() => {
            setFirstOperator("2");
          }}
        >
          2
        </div>
        <div
          className="key"
          onClick={() => {
            setFirstOperator("3");
          }}
        >
          3
        </div>
        <div
          className="key"
          onClick={() => {
            setFirstOperator("4");
          }}
        >
          4
        </div>
        <div
          className="key"
          onClick={() => {
            setFirstOperator("5");
          }}
        >
          5
        </div>
        <div
          className="key"
          onClick={() => {
            setFirstOperator("6");
          }}
        >
          6
        </div>
        <div
          className="key"
          onClick={() => {
            setFirstOperator("7");
          }}
        >
          7
        </div>
        <div
          className="key"
          onClick={() => {
            setFirstOperator("8");
          }}
        >
          8
        </div>
        <div
          className="key"
          onClick={() => {
            setFirstOperator("9");
          }}
        >
          9
        </div>
        <div
          className="key"
          onClick={() => {
            setFirstOperator("0");
          }}
        >
          0
        </div>
      </div>
      <div className="operators">
        {/**
         * Addition +, // 1
          Subtraction -,
          Multiplication *,
          Division /,
          Remainder %,
          Exponentiation **.//3
          Increment : ++ // 2
          Decrement : --
         */}
        <div
          className="operator"
          onClick={() => {
            setFirstOperator("+");
          }}
        >
          +
        </div>
        <div
          className="operator"
          onClick={() => {
            setFirstOperator("++");
          }}
        >
          ++
        </div>
        <div
          className="operator"
          onClick={() => {
            setFirstOperator("^");
          }}
        >
          ^
        </div>
        <div
          className="operator"
          onClick={() => {
            let firstOperator = operator1;
            let secondOperator = operator2;
            let currentOperation = operatorPressed;
            let result = calculateResult(
              firstOperator,
              secondOperator,
              currentOperation
            );
            setResult(result);
            setOperator1("");
            setOperator2("");
            setOperatorPressed("");
          }}
        >
          =
        </div>
      </div>
      <div className="result_field">
        {/**
         * Addition +, // 1
          Subtraction -,
          Multiplication *,
          Division /,
          Remainder %,
          Exponentiation **.//3
          Increment : ++ // 2
          Decrement : --
         */}
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
