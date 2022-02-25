

// T*T -- detail.ejs

// MK -- gestion de l'ajout produit au panier
const addButton = document.querySelector('#addToCart');
const idElem = document.querySelector('#detailPageProductId');
const nameElem = document.querySelector('#detailPageProductName');
const brandElem = document.querySelector('#detailPageProductBrand');
const priceDefElem = document.querySelector('#detailPageProductPriceDef');

let selectedColor = "";
let selectedSize = "";

const quantDisplay = document.querySelector('#quantDisplay');
const quantBtns = document.querySelectorAll('.quantBtn');


try {
  quantBtns.forEach(item => {
    item.addEventListener('click', e => {
      const action = e.target.dataset.action;
      let currQuant = parseInt(quantDisplay.value);

      if (action === 'sub' && currQuant > 0) { currQuant--; }
      else if (action === 'add') { currQuant++; }

      quantDisplay.value = currQuant;
    });
  });
} catch {

}


// A*A -- choix couleurs & tailles
const detColorBtns = document.querySelectorAll('.detColorBtn');
const detSizeBtns = document.querySelectorAll('.detSizeBtn');

try {
  detColorBtns.forEach(item => {
    item.addEventListener('click', (e) => {
      selectedColor = e.target.dataset.colid;
    });
  });

  detSizeBtns.forEach(item => {
    item.addEventListener('click', (e) => {
      selectedSize = e.target.dataset.sizid;
    });
  });
} catch (e) {

}


// A*A -- création de objet produit et ajout dans le cookie 'cart'
let productObj = {};

try {
  addButton.addEventListener('click', (e) => {

    if (selectedColor && selectedSize) {


      productObj.id = idElem.textContent;
      productObj.color = selectedColor;
      productObj.size = selectedSize;
      productObj.quant = quantDisplay.value;
      productObj.priceDef = parseFloat(priceDefElem.textContent) * quantDisplay.value;

      flatProductObj = JSON.stringify(productObj);

      let currCartArray = JSON.parse(getCookieValue('cart'));

      currCartArray.push(flatProductObj);
      writeNewCookie('cart', JSON.stringify(currCartArray));

      updateCartPreview();

      // modale de confirmation
      showModal("l'article a bien été ajouté :)");

    } else {

      showModal("Veuillez choisir COULEUR & TAILLE");
    }

  })

} catch (e) {

}


// T*T -- cart.ejs

// A*A -- calcul du montant total

let deliveryAmount = 0;

const cartTotalAmountDisplay = document.querySelector('#cartTotalAmountDisplay');
const checkoutTotalArticles = document.querySelector('#checkoutTotalArticles');
const checkoutTotal = document.querySelector('#checkoutTotal');


const cartTotalHidden = document.querySelector('#cartTotalHidden');


try {

  updateCartTotal();

} catch (e) {

}


function updateCartTotal() {
  const amountsDisplay = [...document.querySelectorAll('.cart__price__def')];
  const amounts = amountsDisplay.map(item => parseFloat(item.textContent));
  const total = amounts.reduce((sum, price) => {
    return sum += price;
  }, 0);

  cartTotalHidden.value = total.toFixed(2);
  cartTotalAmountDisplay.textContent = '€ ' + total.toFixed(2);
  checkoutTotalArticles.textContent = '€ ' + total.toFixed(2);

  checkoutTotal.textContent = '€ ' + (total + deliveryAmount).toFixed(2);
}


// A*A -- gestion de la suppression d'articles

const cartItemDeleteBtns = document.querySelectorAll('.cartItemDeleteBtn');

try {

  cartItemDeleteBtns.forEach(item => {
    item.addEventListener('click', (e) => {

      const targetSelector = `#cartItemDisplay${e.currentTarget.dataset.target}`;
      const target = document.querySelector(targetSelector);
      target.remove();

      // remove item from cookie
      removeItemFromCartCookie(e.currentTarget.dataset.target);
      updateCartPreview();

      updateCartTotal();

    });
  })

} catch (e) {

}



// recalcul total en fonction du choix de livraison

const deliveryLabels = document.querySelectorAll('.deliveryOption');

deliveryLabels.forEach(item => {
  item.addEventListener('click', (e) => {
    deliveryAmount = parseFloat(e.target.dataset.deliv);
    updateCartTotal();
  });
});


