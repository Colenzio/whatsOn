// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 5001;

const cors = require('cors');
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/buigit statusld')));

// API route example
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});