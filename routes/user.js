const express = require('express');
const usersController = require('../controllers');
const router = express.Router();
const jwtMiddleware = require('../middleware/jwtToken');

router.post('/signup', usersController.users.signUp);
router.post('/login', usersController.users.login);
router.get('/', jwtMiddleware, usersController.users.userInfo);
router.get('/logout', jwtMiddleware, usersController.users.logout);
router.patch('/', jwtMiddleware, usersController.users.updateInformation);
router.patch('/withdrawal', jwtMiddleware, usersController.users.withdrawal);
router.post('/oauth/kakao', usersController.users.socialKakao);
router.get('/oauth/google', usersController.users.socialGoogle);

module.exports = router;
