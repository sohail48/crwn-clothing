import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {UserProvider} from '../src/contexts/user.context';
import {ProductsProvider} from './contexts/products.context';
import App from './App';
import '../src/index.scss';

const rootElement = document.getElementById('root')

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <App/>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);