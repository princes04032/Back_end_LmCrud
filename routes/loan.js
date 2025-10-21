const express = require('express');
const router = express.Router();

// placeholder endpoints
router.get('/', (req, res) => res.json({ message: 'Loans route placeholder' }));
router.post('/', (req, res) => res.status(201).json({ message: 'Create loan not implemented yet' }));

module.exports = router;