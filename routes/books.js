const express = require('express');
const router = express.Router();
const { getAllBooks, getBookById, createBook, deleteBook } = require('/Users/Admin/Documents/Back_end_LmCrud/controllers/book');

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', createBook);
router.delete('/:id', deleteBook);

module.exports = router;