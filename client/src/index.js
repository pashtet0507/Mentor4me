import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import store from './redux/store';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  <BrowserRouter>
    <Provider store={store}>
      <div className="mainContainer">
        <App />
      </div>
    </Provider>
  </BrowserRouter>,
  // </Provider>,

);
