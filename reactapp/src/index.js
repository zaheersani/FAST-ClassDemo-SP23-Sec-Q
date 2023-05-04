import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routing from './Routing';
import reportWebVitals from './reportWebVitals';

import { Counter, Counter2 } from "./Counter";
import UsersAPICall from './UsersAPICall';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routing />
    </BrowserRouter> */}
    {/* <Counter />
    <Counter2 num={3} /> */}
    <UsersAPICall />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
