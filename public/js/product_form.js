
const mode = document.querySelector('#formMode').textContent;


// gestion de la remise
const rangeDiscount = document.querySelector('#p_form_discount');
const rangeDiscountValue = document.querySelector('#p_form_discount_value');
rangeDiscountValue.textContent = rangeDiscount.value;

rangeDiscount.addEventListener('change', (e) => {
  rangeDiscountValue.textContent = e.explicitOriginalTarget.value;
});



// gestion de la notation
const rangeRating = document.querySelector('#p_form_rating');
const rangeRatingValue = document.querySelector('#p_form_rating_value');

rangeRating.addEventListener('change', (e) => {
  rangeRatingValue.textContent = e.explicitOriginalTarget.value;
});



// gestion du nb d'avis
const rangeRevcount = document.querySelector('#p_form_revcount');
const rangeRevcountValue = document.querySelector('#p_form_revcount_value');

rangeRevcount.addEventListener('change', (e) => {
  rangeRevcountValue.textContent = e.target.value;
});


// FIXME -- changer la condition
if (document.querySelector('#formMode').textContent === 'edit_mode') {

  console.log('mode modification');

} else {
  // A*A -- specific code for 'CREATE' mode

  // random rating
  const randomRating = (Math.floor(Math.random() * (50 - 39)) + 39) / 10;
  rangeRating.value = randomRating;
  rangeRatingValue.textContent = rangeRating.value;

  // nb d'avis aléatoire
  const randomRevcount = Math.floor(Math.random() * 50) + 1;
  rangeRevcount.value = randomRevcount;


  const codeInput = document.querySelector('#p_form_code');
  // génération aléatoire du code produit
  const codePt1 = Math.floor(Math.random() * 999) + 1;
  const codePt2 = Math.floor(Math.random() * 999) + 1;
  const codePt3 = Math.floor(Math.random() * 9999) + 1;

  const codeString = `${codePt1}.${codePt2}.${codePt3}`;

  codeInput.value = codeString;
}
