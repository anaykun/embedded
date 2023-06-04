import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css"; 

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App tab='home' />
  </Provider>
);
