import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import ContextAPI from './chapter14/ContextAPI';
const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
    <React.StrictMode>
     <ContextAPI/>
  </React.StrictMode>
);

reportWebVitals();
