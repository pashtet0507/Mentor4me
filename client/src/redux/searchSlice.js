import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchSlice = createSlice({
  name: 'search',
  initialState: [],
  reducers: {
    setSearch: (state, action) => action.payload,
  },
});

export const { setSearch } = searchSlice.actions;

const getSearch = (elem) => async (dispatch) => {
  const res = await axios.post('/search', elem);
  dispatch(setSearch(res.data));
};

export default searchSlice.reducer;

export { getSearch };
