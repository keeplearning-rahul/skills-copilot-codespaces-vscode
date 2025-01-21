//Create Web Server
const express = require('express');
const app = express();

//Create API
app.get('/api/comments', (req, res) => {
    res.json([
        // Add your comments here
    ]);});