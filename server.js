// server.js
const express = require('express');
const app = express();
const port = 3000;
app.set('trust proxy', true);
// Define a route for GET requests
app.get('/', (req, res) => {
    const ip = req.ip || req.connection.remoteAddress;
    res.send(`Request IP: ${ip}`);
});

// Define another route for GET requests with a parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
