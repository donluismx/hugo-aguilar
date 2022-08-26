import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";

import "locomotive-scroll/dist/locomotive-scroll.min.css";
import "locomotive-scroll/dist/locomotive-scroll.min.js";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);