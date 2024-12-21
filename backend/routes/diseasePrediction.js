const express = require('express');
const router = express.Router();
const axios = require('axios');

// API endpoint for disease prediction
router.post('/predict', async (req, res) => {
  const { symptoms, healthRecords } = req.body;

  try {
    const response = await axios.post('http://localhost:5001/predict', {
      symptoms,
      health_records: healthRecords,
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error predicting disease:', error);
    res.status(500).send('Error predicting disease');
  }
});

module.exports = router;