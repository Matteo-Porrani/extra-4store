
const categID = location.pathname.split('/')[2];

// on stocke le path de la page (avec la catégorie choisie) pour créer un bouton de retour dans la page détail
localStorage.categoryPath = location.pathname;

const showProducts = document.querySelector("#showProducts");
const backToGender = document.querySelector("#backToGender");


let gender = localStorage.gender;
const shortGender = ["M", "W"];
const longGender = ["man", "wom"];
const frenchGender = ["Homme", "Femme"];
// on génère dynamiquement le lien de retour vers la page "gender"
const genderPath = "/" + longGender[shortGender.indexOf(gender)];
const genderName = "< retour à la page " + frenchGender[shortGender.indexOf(gender)];

backToGender.href = genderPath;
backToGender.textContent = genderName;


// on récupère tous les produits
let products = JSON.parse(localStorage.products);

// (+) -- 3 clés de filtrage possibles :

// index 'all' -> PAS DE FILTRAGE !

let filteredProducts = [];

if (categID === '100') {
  
  filteredProducts = [...products];
  
} else if (categID === '99') {
  // index sal -> filtrage sur p_sales === 'Y'

  filteredProducts = products.filter(item => {
    if (item.p_sales === 'Y') {
      return item;
    }
  });

} else {
  // index 1...9 -> filtrage sur p_catId

  filteredProducts = products.filter(item => {
    if (item.p_catId === parseInt(categID)) {
      return item;
    }
  });  

}


console.log(filteredProducts);

const htmlProducts = filteredProducts.map(item => {

  if (item.p_subcat === null) {
    item.p_subcat = "";
  }

  let itemString = `
    <li>
      <i class="ph-club"></i>
      <a href="/detail/${item.p_id}">${item.p_brand} / ${item.p_name} / ${item.p_subcat} — € ${item.p_price}</a>`;

  if (item.p_sales === 'Y') {
    itemString += `<span class="badge">soldes</span><li>`;
  } else {
    itemString += `<li>`;
  }

  return itemString;
});

showProducts.innerHTML = htmlProducts.join('');




