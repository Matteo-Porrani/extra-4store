// ### INIT ###

const express = require('express');
const db = require('../data/database');

// create router
const router = express.Router();


const templateName = "gender.ejs";


// ### ROUTES ###

router.get('/man', async (req, res) => {

  const gender = "Homme";

  const query1 = `
    SELECT * FROM category
    WHERE NOT (catName = "robes");
  `;
  const [categories] = await db.query(query1);

  const query2 = `
    SELECT
      a.advOrder AS a_order,
      p.proName AS p_name, 
      b.braName AS p_brand, 
      c.catName AS p_categ,
      p.proSubcat AS p_subcateg,
      pr.priAmount AS p_price,
      p.proGender AS p_gender,
      p.proRating AS p_rat,
      p.proReviewCount AS p_revcount
    FROM advert a
    INNER JOIN product p
    ON a.advProductId = p.proId
    INNER JOIN brand b
    ON p.proBrandId = b.braId
    INNER JOIN category c 
    ON p.proCategoryId = c.catId
    INNER JOIN price pr 
    ON p.proPriceId = pr.priId
    WHERE a.advGender = "M"
`;

  const [advertProducts] = await db.query(query2)

  res.render('gender', { 
    templateName: templateName,
    gender: gender, 
    categories: categories,
    promos: advertProducts
  });

});


router.get('/wom', async (req, res) => {

  const gender = "Femme";

  const query1 = `SELECT * FROM category`;
  const [categories] = await db.query(query1);

  const query2 = `
    SELECT
      a.advOrder AS a_order,
      p.proName AS p_name, 
      b.braName AS p_brand, 
      c.catName AS p_categ,
      p.proSubcat AS p_subcateg,
      pr.priAmount AS p_price,
      p.proGender AS p_gender,
      p.proRating AS p_rat,
      p.proReviewCount AS p_revcount
    FROM advert a
    INNER JOIN product p
    ON a.advProductId = p.proId
    INNER JOIN brand b
    ON p.proBrandId = b.braId
    INNER JOIN category c 
    ON p.proCategoryId = c.catId
    INNER JOIN price pr 
    ON p.proPriceId = pr.priId
    WHERE a.advGender = "W"
`;

  const [advertProducts] = await db.query(query2)

  res.render('gender', {
    templateName: templateName,
    gender: gender, 
    categories: categories,
    promos: advertProducts
  });
});



// ### EXPORT ###
module.exports = router;