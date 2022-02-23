
// A*A -- gestion de l'ordre de tri

const orderSelect = document.querySelector('#filterOrder');

orderSelect.addEventListener('change', (e) => {
  filters.order = e.target.value;

  // à chaque changement de '.order' on tri les 2 arrays 'categProducts' et 'tempProducts'
  changeOrder(categProducts);

  if (tempProducts.length > 0) {
    changeOrder(tempProducts);
    displayProducts(tempProducts);
  } else {
    displayProducts(categProducts);
  }

});



function changeOrder(itemsArray) {
  switch (filters.order) {
    case "priceDesc":
      itemsArray.sort((a, b) => parseFloat(a.p_price_def) > parseFloat(b.p_price_def) ? -1 : 1);
      break;
    case "priceAsc":
      itemsArray.sort((a, b) => parseFloat(a.p_price_def) < parseFloat(b.p_price_def) ? -1 : 1);
      break;
    case "noteDesc":
      itemsArray.sort((a, b) => a.p_rat > b.p_rat ? -1 : 1);
      break;
    case "noteAsc":
      itemsArray.sort((a, b) => a.p_rat < b.p_rat ? -1 : 1);
      break;
  }
}


// T*T -- checkIfActive
// vérifie si au moins 1 critère de filtrage est actif
// si c'est le cas, ça affiche 'tempProducts'
// sinon, ça affiche 'categProducts'
function checkIfActive() {
  if (
    filters.brands.length > 0 ||
    filters.prices.length > 0 ||
    filters.colors.length > 0 ||
    filters.sizes.length > 0
  ) {
    filters.active = true;
    filterDisplay();
  } else {
    filters.active = false;
    tempProducts = [];
    displayProducts(categProducts);
  }
}



// T*T -- code spécifique au filtrage par prix




function priceInRange(price) {
  let test = false;
  for (const range of filters.prices) {
    if (price >= priceTestValues[range][0] && price <= priceTestValues[range][1]) {
      test = true;
    }
  }
  return test;
}




// T*T -- ADD / REMOVE for PRICES, BRANDS, COLORS, SIZES


// A*A -- PRICES
function addPriceRangeToFilters(priceRangeIndex) {
  filters.prices.push(priceRangeIndex);
  sortArray(filters.prices);
  checkIfActive();
}

function removePriceRangeFromFilters(priceRangeIndex) {
  filters.prices.splice(filters.prices.indexOf(priceRangeIndex), 1);
  sortArray(filters.prices);
  checkIfActive();
}


// A*A -- BRANDS
function addBrandToFilters(id) {
  filters.brands.push(id);
  sortArray(filters.brands);
  checkIfActive();
}

function removeBrandFromFilters(id) {
  filters.brands.splice(filters.brands.indexOf(id), 1);
  sortArray(filters.brands);
  checkIfActive();
}


// A*A -- COLORS
function addColorToFilters(id) {
  filters.colors.push(id);
  sortArray(filters.colors);
  checkIfActive();
}

function removeColorFromFilters(id) {
  filters.colors.splice(filters.colors.indexOf(id), 1);
  sortArray(filters.colors);
  checkIfActive();
}


// A*A -- SIZES
function addSizeToFilters(id) {
  filters.sizes.push(id);
  sortArray(filters.sizes);
  checkIfActive();
}

function removeSizeFromFilters(id) {
  filters.sizes.splice(filters.sizes.indexOf(id), 1);
  sortArray(filters.sizes);
  checkIfActive();
}







// NEW -- filterDisplay() ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// cette f. s'exécute à chaque fois qu'un critère de filtrage change
function filterDisplay() {
  tempProducts = categProducts.filter(item => {

    let testPrice = false;
    let testBrand = false;
    let testColor = false;
    let testSize = false;

    // (+) -- test PRICE
    if (filters.prices.length === 0) {
      testPrice = true;
    } else {
      if (priceInRange(parseFloat(item.p_price_def))) {
        testPrice = true;
      }
    }

    // (+) -- test BRAND
    if (filters.brands.length === 0) {
      testBrand = true;
    } else {
      if (filters.brands.includes(item.p_braId)) {
        testBrand = true;
      }
    }

    // (+) -- test COLOR
    if (filters.colors.length === 0) {
      testColor = true;
    } else {
      for (const color of item.p_colors) {
        if (filters.colors.includes(color)) {
          testColor = true;
        }
      }
    }

    // (+) -- test SIZE
    if (filters.sizes.length === 0) {
      testSize = true;
    } else {
      for (const size of item.p_sizes) {
        if (filters.sizes.includes(size)) {
          testSize = true;
        }
      }
    }

    if (
      testPrice &&
      testBrand &&
      testColor &&
      testSize
    ) return item;
  });

  // console.log(tempProducts);
  displayProducts(tempProducts);
}





// MK -- reset filters

const resetFiltersBtn = document.querySelector('#resetFilters');
resetFiltersBtn.addEventListener('click', () => {
  resetAllFilters();
});


function resetAllFilters() {
  let allChecks = [];
  allChecks.push(...Array.from(document.querySelectorAll('.checkPrices')));
  allChecks.push(...Array.from(document.querySelectorAll('.checkBrands')));
  allChecks.push(...Array.from(document.querySelectorAll('.checkColors')));
  allChecks.push(...Array.from(document.querySelectorAll('.checkSizes')));

  allChecks.forEach(item => {
    if (item.checked) {
      item.checked = false;
    }
  });

  filters.prices = [];
  filters.brands = [];
  filters.colors = [];
  filters.sizes = [];
  filters.active = false;

  checkIfActive();
}
