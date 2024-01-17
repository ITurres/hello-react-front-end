import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/reducers/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const { message, status } = useSelector((state) => state.greetings.greetings);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Failed to fetch greeting</p>;
  }

  return <h2>{message}</h2>;
};

export default Greeting;
