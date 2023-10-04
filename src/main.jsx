import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../src/index.scss';
import App from './App';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);