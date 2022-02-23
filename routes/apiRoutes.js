// ### INIT ###

const express = require('express');
const res = require('express/lib/response');
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



/*
router.get('/api/products/man', async (req, res) => {

  const query = getProductsByGender + 'WHERE p.proGender IN ("M","U")';
  const [products] = await db.query(query);

  res.json(products);
});


router.get('/api/products/wom', async (req, res) => {

  const query = getProductsByGender + 'WHERE p.proGender IN ("W","U")';
  const [products] = await db.query(query);

  res.json(products);
});
*/


// (+) -- SHARED QUERIES

// first part of the query, both M & W
const getProductById = `
  SELECT 
    p.proId AS p_id, 
    p.proName AS p_name, 
    b.braId AS p_braId,
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

const queryColors = `
  SELECT cl.colId
  FROM bindProductToColor bd
  INNER JOIN color cl
  ON bd.bind1ColorId = cl.colId
  `;

const querySizes = `
  SELECT sz.sizId
  FROM bindProductToSize bd
  INNER JOIN size sz
  ON bd.bind2SizeId = sz.sizId
  `;




router.get('/api/products/:gender', async (req, res) => {

  let queryIds = "";

  switch (req.params.gender) {
    case "wom":
      queryIds = 'SELECT proId FROM product WHERE proGender IN ("W","U")';
      break;
    case "man":
      queryIds = 'SELECT proId FROM product WHERE proGender IN ("M","U")';
      break;
  }

  const [productIds] = await db.query(queryIds);
  const idsArray = productIds.map(item => item.proId);

  let productObjects = [];

  for (const id of idsArray) {

    const [features] = await db.query(getProductById + `WHERE proId = ${id}`);
    
    const [colors] = await db.query(queryColors + `WHERE bd.bind1ProductId = ${id}`);
    features[0].p_colors = colors.map(item => item.colId);

    const [sizes] = await db.query(querySizes + `WHERE bd.bind2ProductId = ${id}`);
    features[0].p_sizes = sizes.map(item => item.sizId);


    features[0].p_price_def = (features[0].p_price - (features[0].p_price*(features[0].p_disc/100))).toFixed(2);

    productObjects.push(features[0]);
  }

  res.json(productObjects);
});






// (product.p_price - (product.p_price*(product.p_disc/100))).toFixed(2)






router.get('/advert/man', async (req, res) => {

  const query = `
    SELECT
      a.advOrder AS a_order,
      p.proName AS p_name, 
      b.braId AS p_braId,
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




// NEW -- get BRANDS from product ids
router.get('/api/brands/:args', async (req, res) => {

  // args are passed as '11+12+13' and we turn them into '11, 12, 13' for the SQL query
  const queryArgs = req.params.args.replace(/\+/gi, ', ');

  const query = `
    SELECT DISTINCT 
      b.braId, 
      b.braName
    FROM product p
    INNER JOIN brand b
    ON p.proBrandId = b.braId
    WHERE p.proId IN (${queryArgs})
    ORDER BY b.braId
  `;

  const [colors] = await db.query(query);
 
  // res.render('apitemp', {colors: colors});
  res.json(colors);
});




// NEW -- get COLORS from product ids
router.get('/api/colors/:args', async (req, res) => {

  // args are passed as '11+12+13' and we turn them into '11, 12, 13' for the SQL query
  const queryArgs = req.params.args.replace(/\+/gi, ', ');

  const query = `
    SELECT DISTINCT 
      cl.colId, 
      cl.colName
    FROM bindProductToColor bd
    INNER JOIN color cl
    ON bd.bind1ColorId = cl.colId
    WHERE bd.bind1ProductId IN (${queryArgs})
    ORDER BY cl.colId
  `;

  const [colors] = await db.query(query);
 
  // res.render('apitemp', {colors: colors});
  res.json(colors);
});



// NEW -- get SIZES from product ids
router.get('/api/sizes/:args', async (req, res) => {

  // args are passed as '11+12+13' and we turn them into '11, 12, 13' for the SQL query
  const queryArgs = req.params.args.replace(/\+/gi, ', ');

  const query = `
    SELECT DISTINCT 
      sz.sizId, 
      sz.sizName
    FROM bindProductToSize bd
    INNER JOIN size sz
    ON bd.bind2SizeId = sz.sizId
    WHERE bd.bind2ProductId IN (${queryArgs})
    ORDER BY sz.sizId
  `;

  const [sizes] = await db.query(query);
 
  res.json(sizes);
});






// ### EXPORT ###
module.exports = router;