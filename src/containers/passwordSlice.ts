import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PasswordState {
  password: string;
  accessGranted: boolean;
}

const initialState: PasswordState = {
  password: '',
  accessGranted: false,
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    deleteLastSymbol: (state) => {
      state.password = state.password.slice(0, -1);
    },
    setPassword: (state, action: PayloadAction<string>) => {
      if (state.password.length < 4) {
        state.password += action.payload;
      } 
    },
    check: (state) => {
      if (state.password === '1408') {
        state.accessGranted = true;
        state.password = '';
      } else {
        state.accessGranted = false;
        state.password = '';
      }
    },
  },
});

export const passwordReducer = passwordSlice.reducer;
export const { deleteLastSymbol, setPassword, check } = passwordSlice.actions;