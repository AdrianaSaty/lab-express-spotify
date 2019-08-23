const express = require('express');
const router = express();
const {
    index,
    artistsRoute
} = require('../controller/spotifyRoutes.controllers');

router.get('/', index);

router.get('/artists', artistsRoute);

module.exports = router