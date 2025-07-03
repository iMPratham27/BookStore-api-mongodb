const express = require('express');
const dotenv = require('dotenv');
const bookRoutes = require('../BookStore-api/routes/bookRoutes');
const connectDB = require('./config/db');

// Load environment variables first
dotenv.config();

// Set PORT 
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Book routes
app.use('/books', bookRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
