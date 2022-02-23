// ### INIT ###

const express = require('express');
const db = require('../data/database');


// custom utilities
const ch = require('../utils/cookieHandler');


// create router
const router = express.Router();


// ### ROUTES ###

const getProductByid = `
  SELECT 
    p.proId AS p_id, 
    p.proName AS p_name,
    b.braName AS p_brand,
    c.catId AS p_catId,
    c.catName AS p_categ, 
    pr.priAmount AS p_price,
    p.proGender AS p_gender,
    p.proSubcat AS p_subcat,
    p.proDescription AS p_desc,
    p.proRating AS p_rating,
    p.proReviewCount AS p_revcount,
    p.proSales AS p_sales,
    p.proDiscount AS p_disc,
    p.proCode AS p_code
  FROM product p
  INNER JOIN brand b
  ON p.proBrandId = b.braId
  INNER JOIN category c 
  ON p.proCategoryId = c.catId
  INNER JOIN price pr 
  ON p.proPriceId = pr.priId
  WHERE p.proId = ?
`;

const getColorsByProductId = `
  SELECT 
    cl.colId AS col_id,
    cl.colName AS col_name
  FROM bindProductToColor bd
  INNER JOIN color cl
  ON bd.bind1ColorId = cl.colId
  WHERE bd.bind1ProductId = ?
`;

const getSizesByProductId = `
  SELECT 
    sz.sizId AS siz_id, 
    sz.sizName AS siz_name
  FROM bindProductToSize bd
  INNER JOIN size sz
  ON bd.bind2SizeId = sz.sizId
  WHERE bd.bind2ProductId = ?
`;


router.get('/detail/:id', async (req, res) => {

  const productID = req.params.id;

  const currentCookies = ch.getAppCookies(req);
  const genderPath = currentCookies.gender;
  
  let gender = "";

  if (genderPath === '/wom') {
    gender = 'Femme';
  } else if (genderPath === '/man') {
    gender = 'Homme';
  }


  const [product] = await db.query(getProductByid, [productID]);
  const [colors] = await db.query(getColorsByProductId, [productID]);
  const [sizes] = await db.query(getSizesByProductId, [productID]);

  product[0].p_price_def = (product[0].p_price - (product[0].p_price*(product[0].p_disc/100))).toFixed(2);



  res.render('detail', {
    templateName: "detail.ejs",
    gender: gender,
    genderPath: genderPath,
    product: product[0],
    colors: colors,
    sizes: sizes
  });
});




// ### EXPORT ###
module.exports = router;