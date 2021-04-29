const express = require('express');
const zzimsController = require('../controllers');
const router = express.Router();
const jwtMiddleware = require('../middleware/jwtToken');

router.get('/', jwtMiddleware, zzimsController.zzims.zzimList);
router.post('/', jwtMiddleware, zzimsController.zzims.createZzim);

module.exports = router;
