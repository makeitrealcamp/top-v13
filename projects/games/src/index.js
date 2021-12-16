import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import GifGenerator from './pages/GifGenerator';

ReactDOM.render(
  <React.StrictMode>
    <GifGenerator />
  </React.StrictMode>,
  document.getElementById('root')
);
