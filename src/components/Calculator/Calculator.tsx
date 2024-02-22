import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { deleteLastSymbol, deleteAll, addNumber, count } from '../../containers/calculatorSlice';
import './Calculator.css';

const Calculator: React.FC = () => {
  const calculatorValue = useSelector((state: RootState) => state.calculator.value);
  const dispatch = useDispatch();

  return (
    <div className="calculator">
      <div className="calculator-screen">
        <h1 className='calculator-value'>{calculatorValue}</h1>
      </div>
      <div className="calculator-btns">
        <button className='calculator-btn calculator-btn-clear' onClick={() => dispatch(deleteAll())}>AC</button>
        <button className='calculator-btn' onClick={() => dispatch(deleteLastSymbol())}>&lt;</button>
        <button className='calculator-btn calculator-btn-operator' onClick={() => dispatch(addNumber('+'))}>+</button>
        <button className='calculator-btn' onClick={() => dispatch(addNumber('1'))}>1</button>
        <button className='calculator-btn' onClick={() => dispatch(addNumber('2'))}>2</button>
        <button className='calculator-btn' onClick={() => dispatch(addNumber('3'))}>3</button>
        <button className='calculator-btn calculator-btn-operator' onClick={() => dispatch(addNumber('-'))}>-</button>
        <button className='calculator-btn' onClick={() => dispatch(addNumber('4'))}>4</button>
        <button className='calculator-btn' onClick={() => dispatch(addNumber('5'))}>5</button>
        <button className='calculator-btn' onClick={() => dispatch(addNumber('6'))}>6</button>
        <button className='calculator-btn calculator-btn-operator' onClick={() => dispatch(addNumber('*'))}>*</button>
        <button className='calculator-btn' onClick={() => dispatch(addNumber('7'))}>7</button>
        <button className='calculator-btn' onClick={() => dispatch(addNumber('8'))}>8</button>
        <button className='calculator-btn' onClick={() => dispatch(addNumber('9'))}>9</button>
        <button className='calculator-btn calculator-btn-operator' onClick={() => dispatch(addNumber('/'))}>/</button>
        <button className='calculator-btn' onClick={() => dispatch(addNumber('0'))}>0</button>
        <button className='calculator-btn' onClick={() => dispatch(addNumber('00'))}>00</button>
        <button className='calculator-btn' onClick={() => dispatch(addNumber('.'))}>.</button>
        <button className='calculator-btn calculator-btn-enter' onClick={() => dispatch(count())}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
