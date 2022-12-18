import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const modalSliceEdit = createSlice({
  name: 'activeEdit',
  initialState: false,
  reducers: {
    setActiveEdit: (state) => !state,
  },
});

export const { setActiveEdit } = modalSliceEdit.actions;

export default modalSliceEdit.reducer;
