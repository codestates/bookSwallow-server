const express = require('express');
const booksController = require('../controllers');
const router = express.Router();

router.get('/', booksController.books.getBookList);
router.get('/:id', booksController.books.getBookSearch);
router.post('/like', booksController.books.like);

module.exports = router;
