import logo from './logo.svg';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

const apiUrl = process.env.REACT_APP_API_URL

const App = () => {

  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the Express backend
    axios.get(`${apiUrl}/api/hello`)
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" test_id="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <p>Message from backend is: {message}</p>
    </div>
  );
}

export default App;
