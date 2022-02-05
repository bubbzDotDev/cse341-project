//TA05
const express = require('express');
const router = express.Router();
const ta05Controller = require('../controllers/ta05');

router.post('/change-style', ta05Controller.postChangeStyle);

router.get('/', ta05Controller.getIndex);

module.exports = router;