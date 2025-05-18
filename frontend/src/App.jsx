import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/layout/Header";


const apiUrl = process.env.REACT_APP_API_URL

const App = () => {

  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the Express backend
    axios.get(`${apiUrl}/api/eventbrite`)
      .then(response => {
        setMessage(response.data.name);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
       <div>
          <Header/>
        </div>
      <header className="App-header">
        <p>
        <p>Welcome: {message}</p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
   
    </div>
  );
}

export default App;
