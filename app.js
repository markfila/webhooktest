'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/data', (req, res) => {
    const data = {
        message: 'Data retrieved successfully',
        timestamp: new Date().toISOString()
    };
    res.json(data); // Sends a JSON response
});