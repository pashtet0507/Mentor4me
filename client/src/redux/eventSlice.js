import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const eventSlice = createSlice({
  name: 'event',
  initialState: [],
  reducers: {
    setEvent: (state, action) => action.payload,
    addEvent: (state, action) => [...state, action.payload],
    updateEvent: (state, action) => state.map((event) => (event.id === action.payload.id ? action.payload : event)),
    deleteEvent: (state, action) => state.filter((event) => event.id !== action.payload),
  },
});
export const {
  setEvent, addEvent, updateEvent, deleteEvent,
} = eventSlice.actions;

export const axiosEvent = () => (dispatch) => {
  axios.get('/event')
    .then((res) => dispatch(setEvent(res.data)))
    .catch(() => dispatch(setEvent({})));
};
export const axiosSubmitEvent = (item) => async (dispatch) => {
  const res = await axios.post('/event', item);
  dispatch(addEvent(res.data));
};

export const axiosDelete = (id) => (dispatch) => {
  axios.delete(`/event/${id}`)
    .then(() => dispatch(deleteEvent(id)))
    .catch(console.log);
};
export const axiosEdit = ({ id, input }) => (dispatch) => {
  axios.patch(`/event/${id}`, input)
    .then((res) => dispatch(updateEvent(res.data)))
    .catch(console.log);
};

export default eventSlice.reducer;
