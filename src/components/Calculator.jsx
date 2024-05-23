import React, { useState, useEffect } from 'react';
import Button from './Button';
import styles from '../styles/Calculator.module.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [operand1, setOperand1] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (number) => {
    if (display.length >= 9) return;
    setDisplay((prev) => (prev === '0' ? number : prev + number));
  };

  const handleOperatorClick = (op) => {
    if (operator !== null) {
      handleEqualsClick(); // Realizar la operación pendiente si ya hay un operador
    }
    setOperator(op);
    setOperand1(parseFloat(display));
    setDisplay('0');
  };

  const handleEqualsClick = () => {
    if (operator && operand1 !== null) {
      const operand2 = parseFloat(display);
      let result;
      switch (operator) {
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '/':
          result = operand2 !== 0 ? operand1 / operand2 : 'Error';
          break;
        case '%':
          result = operand1 % operand2;
          break;
        default:
          return;
      }
      setDisplay(result.toString().slice(0, 9));
      setOperand1(null);
      setOperator(null);
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setOperand1(null);
    setOperator(null);
  };

  const handleDecimalClick = () => {
    if (display.includes('.') || display.length >= 9) return;
    setDisplay((prev) => prev + '.');
  };

  const handleSignChangeClick = () => {
    if (display.length >= 9) return;
    setDisplay((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev));
  };

  const handleKeyPress = (e) => {
    const { key } = e;
    if (!isNaN(key)) {
      handleNumberClick(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
      handleOperatorClick(key);
    } else if (key === 'Enter' || key === '=') {
      handleEqualsClick();
    } else if (key === '.') {
      handleDecimalClick();
    } else if (key === 'c' || key === 'C') {
      handleClearClick();
    } else if (key === 'Backspace') {
      setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    } else if (key === 'n' || key === 'N') {
      handleSignChangeClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{display}</div>
      <div className={styles.buttonContainer}>
        <Button label="C" onClick={handleClearClick} />
        <Button label="+/-" onClick={handleSignChangeClick} />
        <Button label="%" onClick={() => handleOperatorClick('%')} />
        <Button label="/" onClick={() => handleOperatorClick('/')} />
        <Button label="7" onClick={() => handleNumberClick('7')} />
        <Button label="8" onClick={() => handleNumberClick('8')} />
        <Button label="9" onClick={() => handleNumberClick('9')} />
        <Button label="*" onClick={() => handleOperatorClick('*')} />
        <Button label="4" onClick={() => handleNumberClick('4')} />
        <Button label="5" onClick={() => handleNumberClick('5')} />
        <Button label="6" onClick={() => handleNumberClick('6')} />
        <Button label="-" onClick={() => handleOperatorClick('-')} />
        <Button label="1" onClick={() => handleNumberClick('1')} />
        <Button label="2" onClick={() => handleNumberClick('2')} />
        <Button label="3" onClick={() => handleNumberClick('3')} />
        <Button label="+" onClick={() => handleOperatorClick('+')} />
        <Button label="0" onClick={() => handleNumberClick('0')} />
        <Button label="." onClick={handleDecimalClick} />
        <Button label="=" onClick={handleEqualsClick} />
      </div>
    </div>
  );
};

export default Calculator;
