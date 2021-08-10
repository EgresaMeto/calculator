
import React, { useState } from 'react';
import './Calculator.css';
import Button from "./Button";

const Calculator = () => {
    const [result, setResult] = useState("");
    const handleClick = (e) => {
      setResult(result.concat(e.target.name));
    }
  
    const clear = () => {
      setResult("");
    }
  
    const backspace = () => {
      setResult(result.slice(0, result.length -1));
    }
    const calculate = () => {
      setResult(eval(result).toString());
    }
    const buttonsProps = [
      {
        className: "point",
        onClick: clear,
        id: "clear",
        name: "clear"
      },
      {
        className: "point",
        onClick: backspace,
        id: "backspace", name: ""
      },
      {
        className: "point",
        onClick: handleClick,
        id: "", name: "/"
      },
      {
        className: "",
        onClick: handleClick,
        id: "", name: "7"
      },
      {
        className: "",
        onClick:handleClick ,
        id: "", name: "8"
      },
      {
        className: "",
        onClick: handleClick,
        id: "", name: "9"
      },
      {
        className: "point",
        onClick: handleClick,
        id: "", name: "*"
      },
      {
        className: "",
        onClick: handleClick,
        id: "", name: "4"
      },
      {
        className: "",
        onClick: handleClick,
        id: "", name: "5"
      },
      {
        className: "",
        onClick: handleClick,
        id: "", name: "6"
      },
      {
        className: "point",
        onClick: handleClick,
        id: "", name: "-"
      },
      {
        className: "",
        onClick: handleClick,
        id: "", name: "1"
      },
      {
        className: "",
        onClick: handleClick,
        id: "", name: "2"
      },
      {
        className: "",
        onClick: handleClick,
        id: "", name: "3"
      },
      {
        className: "point",
        onClick: handleClick,
        id: "", name: "+"
      },
      {
        className: "",
        onClick: handleClick,
        id: "", name: "0"
      },
      {
        className: "",
        onClick: handleClick,
        id: "", name: "."
      },
      {
        className: "point",
        onClick: calculate,
        id: "result", name: "="
      },

    ]
  
  return (
    <>
        <div className="container">
        <input type="text" value={result} />
          <div className="keypad">
          {
          buttonsProps.map(element => (
            <Button
            name={element.name}
            handleCLick = {()=> element.handleClick(0)}
            className = { element.className }
            id={element.id}
            />
            ))
        }
  </div>
  </div>
  
        </>
    );
  }

export default Calculator;

