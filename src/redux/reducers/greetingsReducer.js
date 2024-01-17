// eslint-disable-next-line import/no-extraneous-dependencies
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3001/api/v1/greetings/random';
const FETCH_GREETING = 'greetings/FETCH_GREETING';

const initialState = {
  greetings: {
    id: 0,
    message: '',
    status: 'idle',
    created_at: '',
  },
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_GREETING}/pending`:
      return {
        ...state,
        greetings: {
          ...state.greetings,
          status: 'loading',
        },
      };
    case `${FETCH_GREETING}/fulfilled`:
      return { ...state, greetings: { ...action.payload, status: 'idle' } };
    case `${FETCH_GREETING}/rejected`:
      return { ...state, greetings: { ...state.greetings, status: 'failed' } };
    default:
      return state;
  }
};

export const fetchGreeting = createAsyncThunk(FETCH_GREETING, async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch greeting');
  }

  const result = await response.json();
  return result;
});

export default greetingReducer;
