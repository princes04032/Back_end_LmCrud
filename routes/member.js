const express = require('express');
const router = express.Router();

// placeholder endpoints
router.get('/', (req, res) => res.json({ message: 'Members route placeholder' }));
router.post('/', (req, res) => res.status(201).json({ message: 'Create member not implemented yet' }));

module.exports = router;