import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { deleteLastSymbol, setPassword, check } from '../../containers/passwordSlice';
import { useNavigate } from 'react-router-dom';
import './Unlock.css';

const Unlock: React.FC = () => {
  const navigate = useNavigate();
  const password = useSelector((state: RootState) => state.password.password);
  const accessGranted = useSelector((state: RootState) => state.password.accessGranted);
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessGranted) {
      navigate('/home');
    }
  }, [accessGranted, navigate]);
    
  const hideDigits = (text: string) => {
    return text.replace(/\d/g, '*');
  };

  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const time = currentTime.getHours().toString().padStart(2, '0') + ':' + currentTime.getMinutes().toString().padStart(2, '0');

  return (
    <div className='password'>
        <div className="password-screen">
            <span className="password-time">{time}</span>
            <h1 className='password-value'>{hideDigits(password)}</h1>
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
            <button onClick={() => dispatch(check())}>E</button>
        </div>
    </div>
  );
};

export default Unlock;
