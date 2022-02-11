// ### INIT ###

const express = require('express');
const db = require('../data/database');

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
`

router.get('/detail/:id', async (req, res) => {

  const productID = req.params.id;

  const [product] = await db.query(getProductByid, [productID]);

  res.render('detail', {
    templateName: "detail.ejs",
    product: product[0]
  });
});




// ### EXPORT ###
module.exports = router;