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




// MK -- CREATE (get)
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






// MK -- CREATE (post)
router.post('/product/create', async (req, res) => {

  // A*A -- (1) - INSERT INTO product

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

  const query1 = `
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

  // écriture en BDD produit
  await db.query(query1, [args]);


  // A*A -- (2) - retrieve the newly created ID
  const args2 = [req.body.p_form_name];

  const query2 = `SELECT proId FROM product WHERE proName = ?`;
  const [newlyCreatedId] = await db.query(query2, args2);

  // A*A -- (3) - INSERT INTO bindProductToColor
  const colors = req.body.p_form_color;

  for (let i = 0; i < colors.length; i++) {
    await db.query(`
      INSERT INTO bindProductToColor (bind1ProductId, bind1ColorId)
      VALUES (${newlyCreatedId[0].proId}, ${colors[i]})`);
  }


  // A*A -- (4) - INSERT INTO bindProductToSize
  const sizes = req.body.p_form_size;

  for (let i = 0; i < colors.length; i++) {
    await db.query(`
      INSERT INTO bindProductToSize (bind2ProductId, bind2SizeId)
      VALUES (${newlyCreatedId[0].proId}, ${sizes[i]})`);
  }


  res.redirect('/product/create/success');
});




// MK -- CREATE SUCCESS
router.get('/product/create/success', (req, res) => {
  res.render('product_success', {
    templateName: "product_success.ejs"
  });
});








// export
module.exports = router;

