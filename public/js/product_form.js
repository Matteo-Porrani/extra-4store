
// gestion de la remise
const rangeDiscount = document.querySelector('#p_form_discount');
const rangeDiscountValue = document.querySelector('#p_form_discount_value');
rangeDiscountValue.textContent = rangeDiscount.value;

rangeDiscount.addEventListener('change', (e) =>{
  rangeDiscountValue.textContent = e.explicitOriginalTarget.value;
});



// gestion de la notation
const rangeRating = document.querySelector('#p_form_rating');
const rangeRatingValue = document.querySelector('#p_form_rating_value');

rangeRating.addEventListener('change', (e) =>{
  rangeRatingValue.textContent = e.explicitOriginalTarget.value;
});

const randomRating = (Math.floor(Math.random() * (50 - 39)) + 39) / 10;
rangeRating.value = randomRating;

// console.log(randomRating);

rangeRatingValue.textContent = rangeRating.value;


// gestion du nb d'avis
const rangeRevcount = document.querySelector('#p_form_revcount');
const rangeRevcountValue = document.querySelector('#p_form_revcount_value');
const randomRevcount = Math.floor(Math.random() * 50) + 1;
rangeRevcount.value = randomRevcount;

rangeRevcount.addEventListener('change', (e) =>{
  rangeRevcountValue.textContent = e.explicitOriginalTarget.value;
});



// génération aléatoire du code produit
const codePt1 = Math.floor(Math.random() * 999) + 1;
const codePt2 = Math.floor(Math.random() * 999) + 1;
const codePt3 = Math.floor(Math.random() * 9999) + 1;

const codeString = `${codePt1}.${codePt2}.${codePt3}`;

const codeInput = document.querySelector('#p_form_code');
codeInput.value = codeString;