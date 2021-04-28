const express = require('express');
const commentsController = require('../controllers');
const router = express.Router();

router.get('/:id', commentsController.comments.getComment);
router.post('/', commentsController.comments.createComment);
router.patch('/:id', commentsController.comments.updateComment);
router.delete('/:id', commentsController.comments.deleteComment);

module.exports = router;
