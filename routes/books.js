const express = require('express');
const router = express.Router();

// placeholder endpoints
router.get('/', (req, res) => res.json({ message: 'Books route placeholder' }));
router.get('/:id', (req, res) => res.status(404).json({ message: 'Book not implemented yet' }));

module.exports = router;