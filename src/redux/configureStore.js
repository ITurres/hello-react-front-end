// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './reducers/greetingsReducer';

const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

export default store;
