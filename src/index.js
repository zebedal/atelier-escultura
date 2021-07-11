import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

