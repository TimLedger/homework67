import { configureStore } from '@reduxjs/toolkit';
import { calculatorReducer } from '../containers/calculatorSlice';
import { passwordReducer } from '../containers//passwordSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    password: passwordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;