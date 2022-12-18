import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    setUser: (state, action) => action.payload,
  },
});

export const { setUser } = userSlice.actions;

const getUser = (inputs) => async (dispatch) => {
  if (inputs.isMentor === true) {
    const res = await axios.post('/user/mentor', inputs);
    dispatch(setUser(res.data));
  } else {
    const res = await axios.post('/user/student', inputs);
    dispatch(setUser(res.data));
  }
};

const fetchCheck = () => async (dispatch) => {
  const res = await axios('/user/check');
  dispatch(setUser(res.data));
};

const getLoginUser = (inputs) => async (dispatch) => {
  const res = await axios.post('/user/login', inputs);
  console.log(res.data);
  dispatch(setUser(res.data));
};

const getLogout = () => async (dispatch) => {
  await axios('/user/logout');
  dispatch(setUser({}));
};

const editMentor = (input) => (dispatch) => {
  axios.patch('/api/mentorprofile', input)
    .then((res) => dispatch(setUser(res.data)))
    .catch(console.log);
};

export default userSlice.reducer;

export {
  getUser, fetchCheck, getLoginUser, getLogout, editMentor,
};
