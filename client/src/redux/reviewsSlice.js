import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const reviewsSlice = createSlice({
  name: 'Reviews',
  initialState: [],
  reducers: {
    setReviews: (state, action) => action.payload,
  },

});
export const { setReviews, setOneReview } = reviewsSlice.actions;

export const postReview = (input, id) => (dispatch) => {
  console.log(input);
  axios.post(`/reviews/${id}`, input)
    .then((res) => dispatch(setReviews(res.data)))
    .catch(console.log);
};

export const showReviews = (id) => (dispatch) => {
  axios(`/reviews/${id}`)
    .then((res) => dispatch(setReviews(res.data)))
    .catch(console.log);
};

export default reviewsSlice.reducer;
