import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsev_Qd-iCjwhCHYu3t4WAeX0eFJWgSgU",
  authDomain: "shortening-url-6cf7a.firebaseapp.com",
  projectId: "shortening-url-6cf7a",
  storageBucket: "shortening-url-6cf7a.appspot.com",
  messagingSenderId: "650938451288",
  appId: "1:650938451288:web:0abc0c933e62eb1a89d12d",
  measurementId: "G-HT90D8GWWM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
