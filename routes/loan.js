const express = require('express');
const router = express.Router();
const { getAllLoans, getLoanById, createLoan, deleteLoan } = require('../controllers/loan.js');

// Define routes
router.get('/', getAllLoans);
router.get('/:id', getLoanById);
router.post('/', createLoan);
router.delete('/:id', deleteLoan);

module.exports = router;