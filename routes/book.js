const express = require('express');
const booksController = require('../controllers');
const router = express.Router();
const jwtMiddleware = require('../middleware/jwtToken');

router.get('/', booksController.books.getBookList);
router.get('/:id', booksController.books.getBookSearch);
router.post('/like', jwtMiddleware, booksController.books.like);

module.exports = router;
