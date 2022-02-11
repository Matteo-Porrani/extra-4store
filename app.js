// ### REQUIRES ###

// built-in packages
const path = require('path');

// external packages
const express = require('express');

// routes
const defaultRoutes = require('./routes/defaultRoutes');
const genderRoutes = require('./routes/genderRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const detailRoutes = require('./routes/detailRoutes');
const adminRoutes = require('./routes/adminRoutes');
const apiRoutes = require('./routes/apiRoutes');
const exp = require('constants');


// ### MAIN APP ###
const app = express();


// ### EJS CONFIG ###
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// ### MIDDLEWARES ###
app.use(express.urlencoded({ extended: true}))
app.use(express.static('public'));


// ### ROUTES ###
app.use('/', defaultRoutes);
app.use('/', genderRoutes);
app.use('/', categoryRoutes);
app.use('/', detailRoutes);
app.use('/', adminRoutes);
app.use('/', apiRoutes);



// ### ERROR HANDLING

app.use(function (req, res) {
  res.status(404).render('404');
});

/*
app.use(function (error, req, res, next) {
  // Default error handling function
  // Will become active whenever any route / middleware crashes
  console.log(error);
  res.status(500).render('500');
});
*/


// ### LISTENING... ###
app.listen(3000);

