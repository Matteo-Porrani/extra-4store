// ### INIT ###

const express = require('express');
const db = require('../data/database');

// custom utilities
const ch = require('../utils/cookieHandler');


// create router
const router = express.Router();


// ### ROUTES ###

router.get('/cart', async (req, res) => {

  // récupération des éléments dans le cookie 'cart'
  const currentCookies = ch.getAppCookies(req);
  const cart = currentCookies.cart;

  // double passe de .parse()
  const parsedCart = JSON.parse(cart);
  const parsedItems = parsedCart.map(item => JSON.parse(item));

  // console.log(parsedItems);

  // {
  //   p_name: 'Jungle Fever',
  //   p_brand: 'Quixilder',
  //   p_id: '77',
  //   p_color: 'Jaune',
  //   p_size: 'S',
  //   p_quant: '1',
  //   p_priceDef: '26.99'
  // }

  const cartItems = [];
  for (const item of parsedItems) {

    const cartProductQuery = `
      SELECT
        p.proName AS p_name,
        b.braName AS p_brand
      FROM product p
      INNER JOIN brand b
      ON p.proBrandId = b.braId
      WHERE proId = ${item.id}
    `;

    const cartColorQuery = `
      SELECT colName
      FROM color
      WHERE colId = ${item.color}        
    `;

    const cartSizeQuery = `
      SELECT sizName
      FROM size
      WHERE sizId = ${item.size}        
    `;

    const [productInfo] = await db.query(cartProductQuery);
    const [productColor] = await db.query(cartColorQuery);
    const [productSize] = await db.query(cartSizeQuery);

    productInfo[0].p_id = item.id;
    productInfo[0].p_color = productColor[0].colName;
    productInfo[0].p_size = productSize[0].sizName;
    productInfo[0].p_quant = item.quant;
    productInfo[0].p_priceDef = item.priceDef.toFixed(2);

    cartItems.push(productInfo[0]);

  }


  res.render('cart', { 
    templateName: "cart.ejs",
    cartItems: cartItems
  });
});




// ### EXPORT ###
module.exports = router;