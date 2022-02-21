

// on récupère le genre courant et on construit le path pour le fetch
const currGenderPath = getCookieValue('gender');
const fetchUrl = `http://localhost:3000/api/products${currGenderPath}`;


// first fetch - TOUS les produits du genre
fetch(fetchUrl)
  .then(res => res.json())
  .then(async data => {
    await getProducts(data);
  });



let products = [];
let categProducts = [];
let tempProducts = [];

function getProducts(data) {
  products = [...data];
  
  // ordre par note décroissante
  products.sort((a, b) => {
    return a.p_rat > b.p_rat ? -1 : 1;
  });

  filterByCateg(products);
}




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

  displayProducts(categProducts);
  displayColors(categProducts);
  displaySizes(categProducts);
}




function displayProducts(items) {

  // A*A -- on crée les éléments DOM avec les produits filtrés
  const htmlProducts = items.map(item => {
    if (item.p_subcat === null) {
      item.p_subcat = "";
    }

    let itemString = `
      <li>
        <i class="ph-diamond"></i>
        <a href="/detail/${item.p_id}">${item.p_brand} / <b>${item.p_name}</b> / ${item.p_subcat} / € ${item.p_price} / <i class="ph-star"></i> ${item.p_rat}</a>`;

    if (item.p_sales === 'Y') {
      itemString += `<span class="badge">-${item.p_disc}%</span></li>`;
    } else {
      itemString += `</li>`;
    }

    return itemString;
  });


  // A*A -- on affiche dans le DOM
  const showProducts = document.querySelector("#showProducts");
  showProducts.innerHTML = htmlProducts.join('');
}



let colorChecks;

function displayColors(items) {

  const filterColors = document.querySelector('#filterColors');

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




function displaySizes(items) {

  const filterSizes = document.querySelector('#filterSizes');

  // on prend les ids des produits filtrés
  const filteredIds = items.map(item => {
    return item.p_id;
  });

  fetch(`http://localhost:3000/api/sizes/${filteredIds.join('+')}`)
    .then(res => res.json())
    .then(activeSizes => {

      const htmlSizes = activeSizes.map(item => {
        return `
          <input type="checkbox" data-filter="col" data-id="${item.sizId}"><span>${item.sizName}</span>
        `
      });

      filterSizes.innerHTML = htmlSizes.join('');

    });

}
