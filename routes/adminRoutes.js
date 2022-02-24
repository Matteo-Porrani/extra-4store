// ### INIT ###
const express = require('express');
const db = require('../data/database');


// create router
const router = express.Router();


// ### ROUTES ###


// MK -- /admin (get)
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

// MK -- CREATE product (get)
router.get('/product/create', async (req, res) => {

  const [categories] = await db.query(getCategoryList);
  const [brands] = await db.query(getBrandList);
  const [prices] = await db.query(getPriceList);
  const [colors] = await db.query(getColors);
  const [sizes] = await db.query(getSizes);

  res.render('product_handler', {
    templateName: "product_handler.ejs",
    productFormMode: "create_mode",
    productFormAction: "create",
    categories: categories,
    brands: brands,
    prices: prices,
    colors: colors,
    sizes: sizes
  });
});






// MK -- CREATE product (post)
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

  for (let i = 0; i < sizes.length; i++) {
    await db.query(`
      INSERT INTO bindProductToSize (bind2ProductId, bind2SizeId)
      VALUES (${newlyCreatedId[0].proId}, ${sizes[i]})`);
  }

  res.redirect('/success/create');
});








// MK -- '/viewer' (get)

const viewerQuery1 = `
  SELECT
    p.proActive AS p_act,
    p.proId AS p_id,
    p.proName AS p_name,
    p.proGender AS p_gend,
    b.braName AS p_brand,
    c.catName AS p_categ,
    p.proSubcat AS p_subcat,
    pr.priAmount AS p_price,
    p.proRating AS p_rat,
    p.proReviewCount AS p_revcount,
    p.proSales AS p_sal,
    p.proDiscount AS p_disc,
    p.proCode AS p_code
  FROM product p
  INNER JOIN category c
  ON p.proCategoryId = c.catId
  INNER JOIN brand b
  ON p.proBrandId = b.braId
  INNER JOIN price pr
  ON p.proPriceId = pr.priId
  ORDER BY p.proGender, c.catId, p.proId
`;

router.get('/viewer', async (req, res) => {

  const [products] = await db.query(viewerQuery1);
  const [nbOfProducts] = await db.query("SELECT COUNT(*) AS p_count FROM product");

  res.render('viewer', {
    templateName: "viewer.ejs",
    products: products,
    count: nbOfProducts[0].p_count
  });
});




// MK -- EDIT product
// same code as 'detailRoutes.js'
const getProductByid = `
  SELECT 
    p.proId AS p_id, 
    p.proName AS p_name,
    b.braId AS p_braId,
    b.braName AS p_brand,
    c.catId AS p_catId,
    c.catName AS p_categ, 
    pr.priId AS p_priId,
    pr.priAmount AS p_price,
    p.proGender AS p_gender,
    p.proSubcat AS p_subcat,
    p.proDescription AS p_desc,
    p.proRating AS p_rating,
    p.proReviewCount AS p_revcount,
    p.proSales AS p_sales,
    p.proDiscount AS p_disc,
    p.proCode AS p_code,
    p.proComments AS p_comm,
    p.proActive AS p_act
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

router.get('/product/edit/:id', async (req, res) => {

  const productId = req.params.id;

  // get all the information to prefill the EDIT FORM
  const [productInfo] = await db.query(getProductByid, [productId]);
  const [productColors] = await db.query(getColorsByProductId, [productId]);
  const [productSizes] = await db.query(getSizesByProductId, [productId]);

  const colorIds = productColors.map(item => item.col_id);
  const sizeIds = productSizes.map(item => item.siz_id);

  productInfo[0].p_colors = colorIds;
  productInfo[0].p_sizes = sizeIds;


  // get elements to populate <select>
  const [categories] = await db.query(getCategoryList);
  const [brands] = await db.query(getBrandList);
  const [prices] = await db.query(getPriceList);
  const [colors] = await db.query(getColors);
  const [sizes] = await db.query(getSizes);


  res.render('product_handler', {
    templateName: "temp_edit.ejs",
    productFormMode: "edit_mode",
    productFormAction: "edit",
    productInfo: productInfo[0],
    categories: categories,
    brands: brands,
    prices: prices,
    colors: colors,
    sizes: sizes
  });
});



// MK -- EDIT product (post)
router.post('/product/edit', async (req, res) => {

  const updateQuery = `
    UPDATE product
    SET 
      proName = "${req.body.p_form_name}",
      proCategoryId = ${req.body.p_form_category},
      proBrandId = ${req.body.p_form_brand},
      proPriceId = ${req.body.p_form_price},
      proGender = "${req.body.p_form_gender}",
      proSubcat = "${req.body.p_form_subcat}",
      proCode = "${req.body.p_form_code}",
      proDescription = "${req.body.p_form_description}",
      proDiscount = "${req.body.p_form_discount}",
      proSales = "${req.body.p_form_sales}",
      proRating = "${req.body.p_form_rating}",
      proReviewCount = "${req.body.p_form_revcount}",
      proComments = "${req.body.p_form_comments}",
      proActive = "${req.body.p_form_active}"
    WHERE proId = ${req.body.p_form_id}
  `;

  await db.query(updateQuery);

  // A*A -- DELETE all existing "binds" for current ID
  await db.query(`DELETE FROM bindProductToColor WHERE bind1ProductId =${req.body.p_form_id}`);
  await db.query(`DELETE FROM bindProductToSize WHERE bind2ProductId =${req.body.p_form_id}`);

  // A*A -- write NEW BINDS for colors
  const colors = req.body.p_form_color;

  for (let i = 0; i < colors.length; i++) {
    await db.query(`
        INSERT INTO bindProductToColor (bind1ProductId, bind1ColorId)
        VALUES (${req.body.p_form_id}, ${colors[i]})`);
  }

  // A*A -- write NEW BINDS for sizes
  const sizes = req.body.p_form_size;

  for (let i = 0; i < sizes.length; i++) {
    await db.query(`
        INSERT INTO bindProductToSize (bind2ProductId, bind2SizeId)
        VALUES (${req.body.p_form_id}, ${sizes[i]})`);
  }

  res.redirect('/success/edit');
});




// MK -- CREATE SUCCESS
router.get('/success/create', (req, res) => {
  res.render('product_success', {
    templateName: "product_success.ejs",
    successMode: "CRÉÉ"
  });
});



// MK -- EDIT SUCCESS
router.get('/success/edit', (req, res) => {
  res.render('product_success', {
    templateName: "product_success.ejs",
    successMode: "MODIFIÉ"
  });
});





// export
module.exports = router;
