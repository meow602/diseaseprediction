// backend/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

// Import the database connection
const db = require('./db');

// Import routes
const authRoutes = require('./routes/auth');

// Use CORS middleware
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Use auth routes
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});