// import React from 'react';
// import ReactDom from 'react-dom';
// import {Provider} from 'react-redux';
// import configureStore from './store/index';
// import {BrowserRouter} from 'react-router-dom';
// import App from './App';
// import 'semantic-ui-css/semantic.min.css';
// import './style.css';

// const initialState = {
//   user: {
//     isAuthenticated: false,
//     profile: {}
//   }
// };

// const store = configureStore(initialState);

// ReactDom.render(
//   <Provider store={store} >
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.querySelector('#root')
// )


import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import configureStore from './store/index';
 import {Provider} from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import App from "./App";

const initialState = {
  user: {
    isAuthenticated: false,
    profile: {}
  }
};

const store = configureStore(initialState);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store} >
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>,
  rootElement
);