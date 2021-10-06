import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  placesCount: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App placesCount = {Settings.placesCount}/>
  </React.StrictMode>,
  document.getElementById('root'));
