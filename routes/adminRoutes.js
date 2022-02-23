// ### INIT ###
const express = require('express');
const db = require('../data/database');


// create router
const router = express.Router();


// ### ROUTES ###

router.get('/admin', (req, res) => {
  res.render('admin', { templateName: "admin.ejs" });
});


const getCategoryList = `
  SELECT catId, catName
  FROM category
  ORDER BY catId
`;

const getBrandList = `
  SELECT braId, braName
  FROM brand
  ORDER BY braId
`;

const getPriceList = `
  SELECT priId, priAmount
  FROM price
  ORDER BY priAmount
`;

const getColors = `
  SELECT colId, colName
  FROM color
  ORDER BY colId
`;

const getSizes = `
  SELECT sizId, sizName
  FROM size
  ORDER BY sizId
`;



router.get('/product/create', async (req, res) => {

  const [categories] = await db.query(getCategoryList);
  const [brands] = await db.query(getBrandList);
  const [prices] = await db.query(getPriceList);
  const [colors] = await db.query(getColors);
  const [sizes] = await db.query(getSizes);

  // console.log(brands);

  res.render('product_handler', {
    templateName: "product_handler.ejs",
    categories: categories,
    brands: brands,
    prices: prices,
    colors: colors,
    sizes: sizes
  });
});







router.post('/product/create', async (req, res) => {

  const args = [
    req.body.p_form_category,
    req.body.p_form_brand,
    req.body.p_form_price,
    req.body.p_form_code,
    req.body.p_form_name,
    req.body.p_form_description,
    req.body.p_form_subcat,
    req.body.p_form_gender,
    req.body.p_form_discount,
    req.body.p_form_rating,
    req.body.p_form_revcount,
    req.body.p_form_comments,
    req.body.p_form_sales,
    req.body.p_form_active
  ];

  const query = `
    INSERT INTO product
    (
      proCategoryId,
      proBrandId,
      proPriceId,
      proCode,
      proName,
      proDescription,
      proSubcat,
      proGender,
      proDiscount,
      proRating,
      proReviewCount,
      proComments,
      proSales,
      proActive
    )
    VALUES (?);
  `;

  await db.query(query, [args]);

  res.redirect('/product/create/success');
});


router.get('/product/create/success', (req, res) => {
  res.render('product_success', {
    templateName: "product_success.ejs"
  });
});


// export
module.exports = router;

