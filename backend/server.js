// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 5001;
const axios = require('axios');
require('dotenv').config();

const cors = require('cors');
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/buigit statusld')));

// API route example
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

console.log('API URL:', process.env.EVENTBRITE_API_KEY); // Log the API URL for debugging

// Route to interact with the Eventbrite API
app.get('/api/eventbrite', async (req, res) => {
  try {
    const { query } = req.query; // Get query parameter from the request

    // Make a request to the Eventbrite API
    const response = await axios.get('https://www.eventbriteapi.com/v3/users/me/', {
      headers: {
        Authorization: `Bearer ${process.env.EVENTBRITE_API_KEY}` // Use API key from environment variables
      },
      params: {
        q: query, // Pass the query parameter to the Eventbrite API
      }
    });

    // Send the Eventbrite API response back to the frontend
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Eventbrite API:', error);
    res.status(500).json({ error: 'Failed to fetch data from Eventbrite API' });
  }
});

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});