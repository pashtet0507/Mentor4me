import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const applicationSlice = createSlice({
  name: 'application',
  initialState: [],
  reducers: {
    setApplication: (state, action) => action.payload,
  },
});

export const { setApplication, setSearch } = applicationSlice.actions;

const getApplication = (input, id) => async (dispatch) => {
  const res = await axios.post('/applications', { input, id });
  dispatch(setApplication(res.data));
};

const getAllApplicationStudent = () => async (dispatch) => {
  const res = await axios('/applications/student');
  dispatch(setApplication(res.data));
};

const getAllApplicationMentor = () => async (dispatch) => {
  const res = await axios('/applications/mentor');
  dispatch(setApplication(res.data));
};

const setAplicationStatus = (status) => async (dispatch) => {
  const res = await axios.post('/applications/status', status);
  dispatch(setApplication(res.data));
};

export default applicationSlice.reducer;

export {
  getApplication, getAllApplicationMentor, getAllApplicationStudent, setAplicationStatus,
};
