import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const modelContentSlice = createSlice({
  name: 'modalContent',
  initialState: false,
  reducers: {
    setModalContent: (state, action) => action.payload,
  },
});

export const { setModalContent } = modelContentSlice.actions;

export default modelContentSlice.reducer;
