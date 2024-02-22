import { createSlice } from '@reduxjs/toolkit';

interface CalculatorState {
  value: number;
};

const initialState: CalculatorState = {
  value: 0,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  }
});


export const calculatorReducer = calculatorSlice.reducer;
export const {increment, decrement} = calculatorSlice.actions;