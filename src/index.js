import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore/lite'

// eslint-disable-next-line
const app = initializeApp({
  apiKey: "AIzaSyAOQkszBNubewymxxXLdonq7Y8gR7vmAGc",
  authDomain: "click-counter-82b99.firebaseapp.com",
  projectId: "click-counter-82b99",
  storageBucket: "click-counter-82b99.appspot.com",
  messagingSenderId: "939751074053",
  appId: "1:939751074053:web:50c773e7c81ca471b9af6c"
})
// const db = getFirestore(app)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

