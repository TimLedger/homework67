import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PasswordState {
  password: string;
  accessGranted: boolean | null;
}

const initialState: PasswordState = {
  password: '',
  accessGranted: null,
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
        state.accessGranted = null;
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
    update: (state) => {
        state.accessGranted = null;
    },
  },
});

export const passwordReducer = passwordSlice.reducer;
export const { deleteLastSymbol, setPassword, check, update } = passwordSlice.actions;