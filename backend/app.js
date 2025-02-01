const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const douctor_routes = require('./routes/douctor_routes');


// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});


// Routes,  não sei se fiz certo
app.use('/api/doctors', douctor_routes);


module.exports = app;