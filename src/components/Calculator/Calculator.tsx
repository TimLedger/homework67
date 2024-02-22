import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { deleteLastSymbol, addNumber, count } from '../../containers/calculatorSlice';

const Calculator: React.FC = () => {
  const calculatorValue = useSelector((state: RootState) => state.calculator.value);
  const dispatch = useDispatch();

  return (
    <div className="calculator">
      <h1>{calculatorValue}</h1>
      <button onClick={() => dispatch(deleteLastSymbol())}>&lt;</button>
      <button onClick={() => dispatch(addNumber('1'))}>1</button>
      <button onClick={() => dispatch(addNumber('2'))}>2</button>
      <button onClick={() => dispatch(addNumber('3'))}>3</button>
      <button onClick={() => dispatch(addNumber('4'))}>4</button>
      <button onClick={() => dispatch(addNumber('5'))}>5</button>
      <button onClick={() => dispatch(addNumber('6'))}>6</button>
      <button onClick={() => dispatch(addNumber('7'))}>7</button>
      <button onClick={() => dispatch(addNumber('8'))}>8</button>
      <button onClick={() => dispatch(addNumber('9'))}>9</button>
      <button onClick={() => dispatch(addNumber('0'))}>0</button>
      <button onClick={() => dispatch(addNumber('+'))}>+</button>
      <button onClick={() => dispatch(addNumber('-'))}>-</button>
      <button onClick={() => dispatch(addNumber('*'))}>*</button>
      <button onClick={() => dispatch(addNumber('/'))}>/</button>
      <button onClick={() => dispatch(count())}>=</button>
    </div>
  );
};

export default Calculator;
