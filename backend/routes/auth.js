// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Register a new patient
router.post('/register/patient', (req, res) => {
  const { username, password, name, gender, address, phone_no } = req.body;

  // Validate input
  if (!username || !password || !name || !gender || !address || !phone_no) {
    return res.status(400).send('All fields are required');
  }

  // Check if the username already exists
  const checkQuery = 'SELECT * FROM users WHERE username = ?';
  db.query(checkQuery, [username], (err, results) => {
    if (err) {
      return res.status(500).send('Error checking username');
    }

    if (results.length > 0) {
      return res.status(409).send('Username already exists');
    }

    // Insert the new patient into the database
    const insertQuery = 'INSERT INTO users (username, password, role, name, gender, address, phone_no) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(insertQuery, [username, password, 'patient', name, gender, address, phone_no], (err, result) => {
      if (err) {
        return res.status(500).send('Error registering patient');
      }
      res.status(201).send('Patient registered successfully');
    });
  });
});

// Register a new doctor
router.post('/register/doctor', (req, res) => {
  const { username, password, name, speciality, qualification, hospital, hospital_address, doctor_type, gender } = req.body;

  // Validate input
  if (!username || !password || !name || !speciality || !qualification || !hospital || !hospital_address || !doctor_type || !gender) {
    return res.status(400).send('All fields are required');
  }

  // Check if the username already exists
  const checkQuery = 'SELECT * FROM users WHERE username = ?';
  db.query(checkQuery, [username], (err, results) => {
    if (err) {
      return res.status(500).send('Error checking username');
    }

    if (results.length > 0) {
      return res.status(409).send('Username already exists');
    }

    // Insert the new doctor into the database
    const insertQuery = 'INSERT INTO users (username, password, role, name, speciality, qualification, hospital, hospital_address, doctor_type, gender) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(insertQuery, [username, password, 'doctor', name, speciality, qualification, hospital, hospital_address, doctor_type, gender], (err, result) => {
      if (err) {
        return res.status(500).send('Error registering doctor');
      }
      res.status(201).send('Doctor registered successfully');
    });
  });
});

// Login a user
router.post('/login/:role', (req, res) => {
  const { role } = req.params;
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  // Check if the user exists
  const checkQuery = 'SELECT * FROM users WHERE username = ? AND role = ?';
  db.query(checkQuery, [username, role], (err, results) => {
    if (err) {
      return res.status(500).send('Error checking username');
    }

    if (results.length === 0) {
      return res.status(401).send('Invalid username or password');
    }

    const user = results[0];
    if (user.password !== password) {
      return res.status(401).send('Invalid username or password');
    }

    res.status(200).json({ message: 'Login successful', role: user.role });
  });
});

// Admin login
router.post('/login/admin', (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  // Check if the admin exists
  const checkQuery = 'SELECT * FROM users WHERE username = ? AND role = ?';
  db.query(checkQuery, [username, 'admin'], (err, results) => {
    if (err) {
      return res.status(500).send('Error checking username');
    }

    if (results.length === 0) {
      return res.status(401).send('Invalid username or password');
    }

    const admin = results[0];
    if (admin.password !== password) {
      return res.status(401).send('Invalid username or password');
    }

    res.status(200).json({ message: 'Admin login successful', role: admin.role });
  });
});

module.exports = router;
