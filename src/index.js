import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAD4e9T93dJ_yVi_MhEcSRerextyb-QINM",
  authDomain: "shopping-ecommerce-1c4b5.firebaseapp.com",
  projectId: "shopping-ecommerce-1c4b5",
  storageBucket: "shopping-ecommerce-1c4b5.appspot.com",
  messagingSenderId: "123922463557",
  appId: "1:123922463557:web:7ab7f479e70e2a642b1c2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();