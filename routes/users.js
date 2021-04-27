const express = require('express');
const usersController = require('../controllers');
const router = express.Router();

router.get('/', usersController.users.getUserInfo);
router.post('/signup', usersController.users.signUp);
router.post('/login', usersController.users.login);
router.get('/logout', usersController.users.logout);
router.patch('/', usersController.users.updateInformation);
router.patch('/withdrawal', usersController.users.withdrawal);
router.get('/oauth/kakao', usersController.users.socialKakao);
router.get('/oauth/google', usersController.users.socialGoogle);
