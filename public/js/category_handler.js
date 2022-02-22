
const refColors = ["", "multi", "noir", "blanc", "gris", "rose", "rouge", "jaune", "orange", "violet", "vert", "bleu", "marine", "marron"];
const refSizes = ["", "unique", "XS", "S", "M", "L", "XL", "2XL", "3XL", "empty", "empty", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47"];

const priceTestValues = [
  [0, 20],
  [20, 45],
  [45, 75],
  [75, 100],
  [100, 125],
  [125, 160],
  [160, 200],
  [200, 300],
  [300, 600]
];


// on initialise les paramètres de filtrage
const filters = {
  order: "noteDesc",
  prices: [],
  brands: [],
  colors: [],
  sizes: [],
  active: false
}


// fonction qu'on va utiliser plusieurs fois
function sortArray(arr) {
  arr.sort((a, b) => a > b ? 1 : -1);
}




// on initialise les variables produits
let products = [];
let categProducts = [];
let categPrices = [];
let activeRanges = [];
let tempProducts = [];



// on récupère le genre courant et on construit le path pour le fetch
const currGenderPath = getCookieValue('gender');
const fetchUrl = `http://localhost:3000/api/products${currGenderPath}`;


// first fetch - TOUS les produits du genre (sans distinction de catégprie)
fetch(fetchUrl)
  .then(res => res.json())
  .then(async data => {
    await getProducts(data);
  });


function getProducts(data) {
  products = [...data];

  // ordre par note décroissante
  products.sort((a, b) => {
    return a.p_rat > b.p_rat ? -1 : 1;
  });

  filterByCateg(products);
}


// on filtre en fonction de(s) la catégorie(s) choisie(s) 
function filterByCateg(products) {
  const categID = location.pathname.split('/')[2];

  // on filtre selon 3 clés de filtrage possibles :
  switch (categID) {
    case '100':
      // index '100' -> PAS DE FILTRAGE !
      categProducts = [...products];
      break;
    case '99':
      // index '99' -> filtrage sur p_sales === 'Y'
      categProducts = products.filter(item => {
        if (item.p_sales === 'Y') return item;
      });
      break;
    default:
      // filtrage sur l'ID de catégorie
      categProducts = products.filter(item => {
        if (item.p_catId === parseInt(categID)) return item;
      });
      break;
  }

  // on récupère les prix des produits de catégorie
  categPrices = categProducts.map(p => parseFloat(p.p_price));
  sortArray(categPrices);

  // on affiche les cards produits et les selecteurs de filtrage
  displayProducts(categProducts);
  displayBrands(categProducts);
  displayColors(categProducts);
  displaySizes(categProducts);

  verifyPriceRanges(categPrices);
}


// T*T -- displayProducts
function displayProducts(items) {

  // on crée les éléments DOM avec les produits filtrés
  const htmlProducts = items.map(item => {

    let discountString = (item.p_sales === 'Y') ? `<div class="card__tag"><b>-${item.p_disc}%</b></div>` : "";
    if (item.p_subcat === null) item.p_subcat = "---";
    const namedColors = item.p_colors.map(item => refColors[item]);
    const namedSizes = item.p_sizes.map(item => refSizes[item]);

    let itemString = `
      <div class="card">
        <div class="card__id"><small>#${item.p_id}</small></div>
        ${discountString}
        <small class="txtgr">${item.p_categ}</small>
        <br>
        <small>${item.p_brand}</small>
        <br>  
        <small class="txtbl">${item.p_subcat}</small>
        <p style="font-size: 1.125rem; font-style: italic; margin: 0;"><b><a href="/detail/${item.p_id}">${item.p_name}</a></b></p>
        <h2>€ ${item.p_price}</h2>
        <h4><i class="ph-star"></i> ${item.p_rat}</h4>
        <small>${namedColors.join(', ')}</small>
        <br>
        <small>${namedSizes.join(', ')}</small>
      </div>
    `;

    return itemString;
  });

  // on affiche dans le DOM
  const showProducts = document.querySelector("#showProducts");
  showProducts.innerHTML = htmlProducts.join('');
}


// MK -- BRANDS
// on déclare la variable globalement pour l'event listener
let brandChecks;

function displayBrands(items) {
  // on prend les ids des produits filtrés
  const categoryIds = items.map(item => item.p_id);

  fetch(`http://localhost:3000/api/brands/${categoryIds.join('+')}`)
    .then(res => res.json())
    .then(activeBrands => {
      const htmlBrands = activeBrands.map(item => {
        return `<input type="checkbox" class="checkBrands" data-id="${item.braId}"><span>${item.braName}</span>`;
      });

      // on injecte les éléments (checkboxes) dans le DOM
      const filterBrands = document.querySelector('#filterBrands');
      filterBrands.innerHTML = htmlBrands.join('');

      // on récupère les checkboxes et on ajoute l'event listener
      brandChecks = document.querySelectorAll('.checkBrands');

      brandChecks.forEach(item => {
        item.addEventListener('change', (e) => {
          if (e.target.checked) {
            addBrandToFilters(parseInt(e.target.dataset.id));
          } else {
            removeBrandFromFilters(parseInt(e.target.dataset.id));
          }
        });
      });
    });
}

// MK -- COLORS
// on déclare la variable globalement pour l'event listener
let colorChecks;

function displayColors(items) {
  // on prend les ids des produits filtrés
  const filteredIds = items.map(item => {
    return item.p_id;
  });

  fetch(`http://localhost:3000/api/colors/${filteredIds.join('+')}`)
    .then(res => res.json())
    .then(activeColors => {
      const htmlColors = activeColors.map(item => {
        return `<input type="checkbox" class="checkColors" data-id="${item.colId}"><span>${item.colName}</span>`;
      });

      // on injecte les éléments (checkboxes) dans le DOM
      const filterColors = document.querySelector('#filterColors');
      filterColors.innerHTML = htmlColors.join('');

      // on récupère les checkboxes et on ajoute l'event listener
      colorChecks = document.querySelectorAll('.checkColors');

      colorChecks.forEach(item => {
        item.addEventListener('change', (e) => {

          if (e.target.checked) {
            addColorToFilters(parseInt(e.target.dataset.id));
          } else {
            removeColorFromFilters(parseInt(e.target.dataset.id));
          }
        });
      });
    });
}

// MK -- SIZES
// on déclare la variable globalement pour l'event listener
let sizeChecks;

function displaySizes(items) {
  // on prend les ids des produits filtrés
  const categoryIds = items.map(item => item.p_id);

  fetch(`http://localhost:3000/api/sizes/${categoryIds.join('+')}`)
    .then(res => res.json())
    .then(activeSizes => {
      const htmlSizes = activeSizes.map(item => {
        return `<input type="checkbox" class="checkSizes" data-id="${item.sizId}"><span>${item.sizName}</span>`;
      });

      // on injecte les éléments (checkboxes) dans le DOM
      const filterSizes = document.querySelector('#filterSizes');
      filterSizes.innerHTML = htmlSizes.join('');

      // on récupère les checkboxes et on ajoute l'event listener
      sizeChecks = document.querySelectorAll('.checkSizes');

      sizeChecks.forEach(item => {
        item.addEventListener('change', (e) => {
          if (e.target.checked) {
            addSizeToFilters(parseInt(e.target.dataset.id));
          } else {
            removeSizeFromFilters(parseInt(e.target.dataset.id));
          }
        });
      });
    });
}



// MK -- PRICES
// cette f. vérifie quelles tranches de prix sont active et cache celles qui sont inactives
function verifyPriceRanges(categPrices) {

  const minPrice = categPrices[0];
  const maxPrice = categPrices[categPrices.length - 1];

  for (let i = 0; i < priceTestValues.length; i++) {
    if (priceTestValues[i][1] > minPrice) {
      activeRanges.push(i);

      if (priceTestValues[i][1] > maxPrice) {
        break;
      }
    }
  }

  const domPriceRanges = Array.from(document.querySelectorAll('.checkPrices'));
  const domPriceRangesSpans = Array.from(document.querySelectorAll('.priceRangeSpan'));

  // event listener pour filtres prix
  domPriceRanges.forEach(item => {
    item.addEventListener('change', (e) => {
      if (e.target.checked) {
        addPriceRangeToFilters(parseInt(e.target.dataset.pricerange));
      } else {
        removePriceRangeFromFilters(parseInt(e.target.dataset.pricerange));
      }
    });
  });  


  domPriceRanges.forEach((item, index) => {
    if (!activeRanges.includes(index)) {
      domPriceRanges[index].remove();
      domPriceRangesSpans[index].remove();
    }
  });
}

