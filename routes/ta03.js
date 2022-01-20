const express = require('express');
const router = express.Router();

const controller = require('../controllers/ta03');

router.get('/', controller.getItems);

router.get('/search', controller.getSearchItems);

module.exports = router;
