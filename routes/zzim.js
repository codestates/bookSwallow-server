const express = require('express');
const zzimsController = require('../controllers');
const router = express.Router();

router.get('/', zzimsController.zzims.zzimList);
router.post('/', zzimsController.zzims.createZzim);

module.exports = router;
