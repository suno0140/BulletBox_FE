import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from '@core/AuthProvider';
import { Provider } from 'react-redux';
import initializeStore from '@redux/initializeReducer';

const store = initializeStore();
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
);

reportWebVitals();
