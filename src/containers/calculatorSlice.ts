import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CalculatorState {
  value: string;
};

const initialState: CalculatorState = {
  value: '0',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    deleteLastSymbol: (state) => {
      if (state.value.length === 1) {
        state.value = '0'; 
      } else {
        state.value = state.value.slice(0, -1);
      }
    },
    deleteAll: (state) => {
      state.value = '0'; 
    },
    addNumber: (state, action: PayloadAction<string>) => {
      const lastChar = state.value[state.value.length - 1];
      const isLastOperator = ['+', '-', '*', '/'].includes(lastChar);
      const penultOperator = ['+', '-', '*', '/'].includes(state.value[state.value.length - 2]);
      const enterOperator = ['+', '-', '*', '/'].includes(action.payload);
      const enterNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(action.payload);

      if (state.value === '0' && enterOperator) {
        state.value += action.payload;
      } else if ((state.value === '0' || isLastOperator && enterOperator) || (lastChar === '0' && penultOperator && enterNumber)) {
        state.value = state.value.slice(0, -1);
        state.value += action.payload;
      } else {
        state.value += action.payload;
      }
    },
    
    count: (state) => {
      state.value = eval(state.value);
    },
  }
});


export const calculatorReducer = calculatorSlice.reducer;
export const {deleteLastSymbol, addNumber, count} = calculatorSlice.actions;