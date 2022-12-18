import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from './userInfoSlice';
import searchReducer from './searchSlice';
import userReducer from './userSlice';
import applicationReducer from './applicationSlice';
import eventReducer from './eventSlice';
import activeReduser from './modalSlice';
import activeEditReduser from './modalSliceEdit';
import modelContentReduser from './modelContentSlice';
import reviewsSlice from './reviewsSlice';

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    search: searchReducer,
    user: userReducer,
    application: applicationReducer,
    events: eventReducer,
    active: activeReduser,
    activeedit: activeEditReduser,
    modalContent: modelContentReduser,
    reviews: reviewsSlice,
  },
});
export default store;
