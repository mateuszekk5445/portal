import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import ButtonMsg from './ButtonMsg';
import Card from './Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <ButtonMsg />
    <Card />
  </React.StrictMode>
);

reportWebVitals();
