// backend/routes/users.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).send('Error fetching users');
    }
    res.json(results);
  });
});

module.exports = router;