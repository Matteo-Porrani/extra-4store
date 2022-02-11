// ### INIT ###

const express = require('express');
const db = require('../data/database');

// create router
const router = express.Router();


// ### ROUTES ###

router.get('/', async (req, res) => {
  res.render('index');
});




// ### EXPORT ###
module.exports = router;