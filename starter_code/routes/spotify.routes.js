const express = require('express');
const router = express();
const {
    index,
} = require('../controller/spotifyRoutes.controllers');

router.get('/', index);

module.exports = router