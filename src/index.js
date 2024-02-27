import React from 'react';
import ReactDOM from 'react-dom/client';
 
import App from './App';
import Hook from './Hook';
import Props from './Props';
import Text1 from './Text1';
import Props1 from './Props1';
import Map from './Map';
import Map1 from './Map1';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Softech from './Softech/Softech';
import State from './UseState2';
import Hello from './UseEffect';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
