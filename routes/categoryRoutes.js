// ### INIT ###

const { request } = require('express');
const express = require('express');
const db = require('../data/database'); 

// custom utilities
const ch = require('../utils/cookieHandler');

// create router
const router = express.Router();







// ### ROUTES ###

router.get('/category/:id', async (req, res) => {

  const currentCookies = ch.getAppCookies(req);
  const genderPath = currentCookies.gender;
  
  let gender = "";
  let genderCondition = "";

  if (genderPath === '/wom') {
    gender = 'Femme';
    genderCondition = ``;
  } else if (genderPath === '/man') {
    gender = 'Homme';
    genderCondition = `WHERE NOT (catName = "robes")`;
  }

  // get ALL categories to display '.inbar'
  const query1 = `
    SELECT * FROM category c
    INNER JOIN icon i
    ON c.catIconId = i.icoId
    ${genderCondition}
  `;
  const [categories] = await db.query(query1);


  const categoryID = req.params.id;
  let categoryName;
  let categoryNameParsed;

  if (categoryID === "99") {
    categoryNameParsed = "soldes";
    categoryIconParsed = "";
  } else if (categoryID === "100") {
    categoryNameParsed = "toutes les catégories";
    categoryIconParsed = "";
  } else {
    [categoryName] = await db.query('SELECT catName FROM category WHERE catId = ?', [categoryID]);
    [categoryIcon] = await db.query('SELECT icoUrl FROM icon WHERE icoId = ?', [categoryID]);
    // on met la première lettre en majuscule
    categoryNameParsed = categoryName[0].catName.charAt(0).toUpperCase() + categoryName[0].catName.slice(1);
    categoryIconParsed = categoryIcon[0].icoUrl;
  }


  // str.charAt(0).toUpperCase() + str.slice(1);

  res.render('category', {
    templateName: "category.ejs",
    gender: gender,
    genderPath: genderPath,
    categories: categories,
    categoryID: categoryID,
    categoryName: categoryNameParsed,
    categoryIcon: categoryIconParsed,
  });
});




module.exports = router;
// ### EXPORT ###