// ### INIT ###

const express = require('express');
const db = require('../data/database');

// create router
const router = express.Router();


// ### ROUTES ###

router.get('/', async (req, res) => {
  res.render('index', { templateName: "index.ejs" });
});




// ### EXPORT ###
module.exports = router;