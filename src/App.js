import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleDigitClick = (digit) => {
    if (displayValue === '0') {
      setDisplayValue(digit);
    } else {
      setDisplayValue(displayValue + digit);
    }
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setPreviousValue(displayValue);
    setDisplayValue('0');
  };

  const handleEqualClick = () => {
    const currentValue = parseFloat(displayValue);
    const previous = parseFloat(previousValue);

    switch (operator) {
      case '+':
        setDisplayValue(previous + currentValue);
        break;
      case '-':
        setDisplayValue(previous - currentValue);
        break;
      case '*':
        setDisplayValue(previous * currentValue);
        break;
      case '/':
        setDisplayValue(previous / currentValue);
        break;
      default:
        break;
    }

    setOperator(null);
    setPreviousValue(null);
  };

  const handleClear = () => {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperator(null);
  };

  const handleShowName = () => {
    setDisplayValue('Marlon M. Tungol');
  };

  return (
    <div className="calculator">
      <div className="name">Calculator of Marlon Tungol - IT3A</div>
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleDigitClick('7')}>7</button>
        <button onClick={() => handleDigitClick('8')}>8</button>
        <button onClick={() => handleDigitClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>

        <button onClick={() => handleDigitClick('4')}>4</button>
        <button onClick={() => handleDigitClick('5')}>5</button>
        <button onClick={() => handleDigitClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>

        <button onClick={() => handleDigitClick('1')}>1</button>
        <button onClick={() => handleDigitClick('2')}>2</button>
        <button onClick={() => handleDigitClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>

        <button onClick={() => handleDigitClick('0')}>0</button>
        <button onClick={() => handleOperatorClick('.')}>.</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      <button className="clear" onClick={handleClear}>C</button>
      <button className="customButton" onClick={handleShowName}>Tungol</button>
    </div>
  );
};

export default App;
