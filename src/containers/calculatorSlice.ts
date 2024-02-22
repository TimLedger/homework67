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
      const dotIndex = state.value.lastIndexOf('.');
      const operatorIndex = state.value.search(/[\+\-\*\/]/g);
    
      if (state.value === '0' && (enterOperator || action.payload === '.')) {
        state.value += action.payload;
      } else if ((state.value === '0' || lastChar === '0' && penultOperator || isLastOperator) && action.payload === '00') {
        return;
      } else if ((state.value === '0' || isLastOperator && enterOperator) || (lastChar === '.' && enterOperator)) {
        state.value = state.value.slice(0, -1);
        state.value += action.payload;
      } else if (action.payload === '.' && isLastOperator) {
        state.value += '0' + action.payload;
      } else if (action.payload === '.') {
        
        if (dotIndex === -1 || (dotIndex < operatorIndex)) {
          state.value += action.payload;
        } else {
          return;
        }
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
export const {deleteLastSymbol, deleteAll, addNumber, count} = calculatorSlice.actions;