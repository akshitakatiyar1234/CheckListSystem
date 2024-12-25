// Setting up express App
const express = require('express');
const checklistRoutes = require('./checklistRoutes');

const app = express();

//to serve static files from the public directory
app.use(express.static('public'));


app.use('/api', checklistRoutes);

module.exports = app;
