import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import 'animate.css';
import "swiper/css/bundle";
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

