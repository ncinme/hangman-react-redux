import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// Importing the Provider component from react-redux, which we will require to set up our Redux store. 
// To ensure the whole application has access to the relevant slices of state, each component will require it to function correctly.
import { Provider } from "react-redux";

import './index.css';
import App from './App';
// importing the newly created store implementation we have just created using the configureStore function.
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Implementing the Provider component and passing our store as one of its props 
    to ensure the store is correctly implemented and initiated. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
