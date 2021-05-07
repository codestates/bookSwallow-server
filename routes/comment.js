const express = require('express');
const commentsController = require('../controllers');
const router = express.Router();
const jwtMiddleware = require('../middleware/jwtToken');

router.get('/:id', commentsController.comments.getComment);
router.post('/:id', jwtMiddleware, commentsController.comments.createComment);
router.patch('/:id', jwtMiddleware, commentsController.comments.updateComment);
router.delete('/:id', jwtMiddleware, commentsController.comments.deleteComment);

module.exports = router;
