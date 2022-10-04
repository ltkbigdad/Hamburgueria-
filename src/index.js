import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {BrowserRouter} from "react-router-dom"
import { GlobalStyled } from './Styles/Global';
import { Providers } from './provider';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Providers>
      <GlobalStyled/>
      <App />
    </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
