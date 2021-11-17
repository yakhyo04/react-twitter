import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from './Component/Context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider>
    <App/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);