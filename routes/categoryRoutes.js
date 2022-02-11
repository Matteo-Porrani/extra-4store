// ### INIT ###

const express = require('express');
const db = require('../data/database');

// create router
const router = express.Router();


// ### ROUTES ###

router.get('/category/:id', async (req, res) => {

  let categoryID = req.params.id;
  let categoryName;
  let categoryNameParsed;

  if (categoryID === "99") {
    categoryNameParsed = "soldes";
  } else if (categoryID === "100") {
    categoryNameParsed = "toutes les catégories"
  } else {
    [categoryName] = await db.query('SELECT catName FROM category WHERE catId = ?', [categoryID]);
    categoryNameParsed = categoryName[0].catName;
  }

  res.render('category', {
    templateName: "category.ejs",
    categoryID: categoryID,
    categoryName: categoryNameParsed
  });
});




// ### EXPORT ###
module.exports = router;