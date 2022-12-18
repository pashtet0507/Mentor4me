import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const mentorSlice = createSlice({
  name: 'userInfo',
  initialState: [],
  reducers: {
    setUserInfo: (state, action) => action.payload,
    // updateMentor: (state, action) => state.map((mentor) => (mentor.id === action.payload.id ? action.payload : mentor)),
  },
});

export const { setUserInfo, updateMentor } = mentorSlice.actions;

const showMentor = () => (dispatch) => {
  axios('/api/mentorprofile')
    .then((res) => dispatch(setUserInfo(res.data)));
};

const showAllMentor = () => (dispatch) => {
  axios('/api/applications')
    .then((res) => dispatch(setUserInfo(res.data)));
};

const showStudent = () => (dispatch) => {
  axios('/api/student/studentprofile')
    .then((res) => dispatch(setUserInfo(res.data)));
};

const editStudent = (input) => (dispatch) => {
  axios.patch('/api/student/studentprofile', input)
    .then((res) => dispatch(setUserInfo(res.data)))
    .catch(console.log);
};

export default mentorSlice.reducer;

export {
  showMentor, showAllMentor, editStudent, showStudent,
};
