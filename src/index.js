import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import * as serviceWorker from './serviceWorker';

var firebaseConfig = {
  apiKey: "AIzaSyBS-LksMzG8zSCHjfzzcqmDwgRHdmyHlt4",
  authDomain: "reactcrudfirebase-93015.firebaseapp.com",
  databaseURL: "https://reactcrudfirebase-93015.firebaseio.com",
  projectId: "reactcrudfirebase-93015",
  storageBucket: "reactcrudfirebase-93015.appspot.com",
  messagingSenderId: "1010182729983",
  appId: "1:1010182729983:web:b831820fec077ad379dcca",
  measurementId: "G-E8EX9ZK7B3"
};
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
