import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { deleteLastSymbol, setPassword, check } from '../../containers/passwordSlice';

const Unlock: React.FC = () => {
  const password = useSelector((state: RootState) => state.password.password);
  const accessGranted = useSelector((state: RootState) => state.password.accessGranted);
  const dispatch = useDispatch();

  const checkPassword = () => {
    dispatch(check()); 
    if (accessGranted) {
    }
  };

  return (
    <div className='password'>
        <div className="password-screen">
            <h1 className='password-value'>{password}</h1>
        </div>
        <div className='keyboard'>
            <button onClick={() => dispatch(setPassword('1'))}>1</button>
            <button onClick={() => dispatch(setPassword('2'))}>2</button>
            <button onClick={() => dispatch(setPassword('3'))}>3</button>
            <button onClick={() => dispatch(setPassword('4'))}>4</button>
            <button onClick={() => dispatch(setPassword('5'))}>5</button>
            <button onClick={() => dispatch(setPassword('6'))}>6</button>
            <button onClick={() => dispatch(setPassword('7'))}>7</button>
            <button onClick={() => dispatch(setPassword('8'))}>8</button>
            <button onClick={() => dispatch(setPassword('9'))}>9</button>
            <button onClick={() => dispatch(deleteLastSymbol())}>&lt;</button>
            <button onClick={() => dispatch(setPassword('0'))}>0</button>
            <button onClick={checkPassword}>E</button>
        </div>
    </div>
  );
};

export default Unlock;
