import React from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/configureStore';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <nav>
        <Link to="/greeting" className="btn btn-warning">
          Random Greeting
        </Link>
      </nav>
      <App />
    </BrowserRouter>
  </Provider>,
);
