import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CalculatorState {
  value: string;
};

const initialState: CalculatorState = {
  value: '',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    deleteLastSymbol: (state) => {
      state.value = state.value.slice(0, -1);
    },
    addNumber: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  }
});


export const calculatorReducer = calculatorSlice.reducer;
export const {deleteLastSymbol, addNumber} = calculatorSlice.actions;