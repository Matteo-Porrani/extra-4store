// ### INIT ###

const express = require('express');
const db = require('../data/database');

// create router
const router = express.Router();


// ### ROUTES ###

router.get('/api/products/all', async (req, res) => {

  const query = `
    SELECT *
    FROM product p
    INNER JOIN brand b
    ON p.proBrandId = b.braId
    INNER JOIN category c 
    ON p.proCategoryId = c.catId
    INNER JOIN price pr 
    ON p.proPriceId = pr.priId
    ORDER BY c.catId
  `;

  const [products] = await db.query(query)

  // res.render('products', { products: products });

  res.json(products);
});




// first part of the query, both M & W
const getProductsByGender = `
  SELECT 
    p.proId AS p_id, 
    p.proName AS p_name, 
    b.braName AS p_brand,
    c.catId AS p_catId,
    c.catName AS p_categ, 
    pr.priAmount AS p_price,
    p.proGender AS p_gender,
    p.proSubcat AS p_subcat,
    p.proRating AS p_rat,
    p.proReviewCount AS p_revcount,
    p.proSales AS p_sales,
    p.proDiscount AS p_disc
  FROM product p
  INNER JOIN brand b
  ON p.proBrandId = b.braId
  INNER JOIN category c 
  ON p.proCategoryId = c.catId
  INNER JOIN price pr 
  ON p.proPriceId = pr.priId
`;


router.get('/api/products/man', async (req, res) => {

  const query = getProductsByGender + 'WHERE p.proGender IN ("M","U")';
  const [products] = await db.query(query)

  res.json(products);
});


router.get('/api/products/wom', async (req, res) => {

  const query = getProductsByGender + 'WHERE p.proGender IN ("W","U")';
  const [products] = await db.query(query)

  res.json(products);
});









router.get('/advert/man', async (req, res) => {

  const query = `
    SELECT
      a.advOrder AS a_order,
      p.proName AS p_name, 
      b.braName AS p_brand, 
      c.catId AS p_catId,
      c.catName AS p_categ,
      p.proSubcat AS p_subcat,
      pr.priAmount AS p_price,
      p.proGender AS p_gender,
      p.proRating AS p_rat,
      p.proReviewCount AS p_revcount,
      p.proSales AS p_sales,
    FROM advert a
    INNER JOIN product p
    ON a.advProductId = p.proId
    INNER JOIN brand b
    ON p.proBrandId = b.braId
    INNER JOIN category c 
    ON p.proCategoryId = c.catId
    INNER JOIN price pr 
    ON p.proPriceId = pr.priId
    WHERE p.proGender IN ("M","U")
`;

  const [products] = await db.query(query)

  res.json(products);
});




// ### EXPORT ###
module.exports = router;