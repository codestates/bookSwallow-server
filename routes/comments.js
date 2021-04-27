const express = require('express');
const commentsController = require('../controllers');
const router = express.Router();

router.post('/', commentsController.comments.createPostMethod);
router.get('/:id', commentsController.comments.getComment);
router.patch('/:id', commentsController.comments.updateComment);
router.delete('/:id', commentsController.comments.deleteComment);
