import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import 'bulma/css/bulma.min.css';
import RouterApp from './routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterApp />
    </React.StrictMode>
  </Provider>
);
