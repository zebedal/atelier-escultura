import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

