
const filters = {
  order: "noteDesc",
  prices: [],
  colors: [],
  sizes: []
}



const orderSelect = document.querySelector('#filterOrder');

orderSelect.addEventListener('change', (e) => {
  filters.order = e.target.value;
  changeOrder(categProducts);
  if (tempProducts.length > 0) {
    changeOrder(tempProducts);
  }
});




function changeOrder(itemsArray) {
  switch (filters.order) {
    case "priceDesc":
      itemsArray.sort((a, b) => parseFloat(a.p_price) > parseFloat(b.p_price) ? -1 : 1);
      break;
    case "priceAsc":
      itemsArray.sort((a, b) => parseFloat(a.p_price) < parseFloat(b.p_price) ? -1 : 1);
      break;
    case "noteDesc":
      itemsArray.sort((a, b) => a.p_rat > b.p_rat ? -1 : 1);
      break;
    case "noteAsc":
      itemsArray.sort((a, b) => a.p_rat < b.p_rat ? -1 : 1);
      break;
  }
  displayProducts(itemsArray);
}





function addColorToFilters(colId) {
  filters.colors.push(colId);
  // console.log("filters.colors updated !");
  // console.log(filters.colors);
  filterDisplay();
}

function removeColorFromFilters(colId) {
  filters.colors.splice(filters.colors.indexOf(colId), 1);
  // console.log("filters.colors updated !");
  // console.log(filters.colors);
  if (filters.prices.length > 0 || filters.colors.length > 0) {
    filterDisplay();
  } else {
    displayProducts(categProducts);
    tempProducts = [];
  }
}



// cette f. s'exécute à chaque fois qu'un critère de filtrage change
function filterDisplay() {
  tempProducts = categProducts.filter(item => {
    let test = false;
    
    // test PRIX
    if (priceInRange(parseFloat(item.p_price))) {
      test = true;
    }


    // test COULEUR
    for (const color of item.p_colors) {
      if (filters.colors.includes(color)) {
        test = true;
      }
    }

    // test TAILLE








    if (test) return item;
  });

  // console.log(tempProducts);
  changeOrder(tempProducts);
  displayProducts(tempProducts);
}





const priceTestValues = [
  [0, 20],
  [20, 45],
  [45, 75],
  [75, 100],
  [100, 125],
  [125, 160],
  [160, 200],
  [200, 300]
];

// const checkedRanges = [0, 1, 5, 6, 7];


function priceInRange(price) {

  let test = false;

  for (const range of filters.prices) {
    if (price > priceTestValues[range][0] && price < priceTestValues[range][1]) {
      test = true;
    }
  }

  return test;
}




function addPriceRangeToFilters(priceRangeIndex) {
  filters.prices.push(priceRangeIndex);
  filterDisplay();
}

function removePriceRangeFromFilters(priceRangeIndex) {
  filters.prices.splice(filters.prices.indexOf(priceRangeIndex), 1);
  if (filters.prices.length > 0 || filters.colors.length > 0) {
    filterDisplay();
  } else {
    displayProducts(categProducts);
    tempProducts = [];
  }
}

pricesChecks = document.querySelectorAll('.checkPrices');

pricesChecks.forEach(item => {
  item.addEventListener('change', (e) => {
    if (e.target.checked) {
      addPriceRangeToFilters(parseInt(e.target.dataset.pricerange));
    } else {
      removePriceRangeFromFilters(parseInt(e.target.dataset.pricerange));
    }
  });
});
