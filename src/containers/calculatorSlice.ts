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
    addNumber: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
    },
    count: (state) => {
      state.value = eval(state.value);
    },
  }
});


export const calculatorReducer = calculatorSlice.reducer;
export const {deleteLastSymbol, addNumber, count} = calculatorSlice.actions;