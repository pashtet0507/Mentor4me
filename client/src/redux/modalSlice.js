import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const modalSlice = createSlice({
  name: 'active',
  initialState: false,
  reducers: {
    setActive: (state) => !state,
  },
});

export const { setActive } = modalSlice.actions;

export default modalSlice.reducer;
