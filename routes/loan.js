const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loan');

// Define routes
router.get('/', loanController.getAllLoans);
router.get('/:id', loanController.getLoanById);
router.post('/', loanController.createLoan);
router.delete('/:id', loanController.deleteLoan);

module.exports = router;