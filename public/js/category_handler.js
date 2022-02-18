

// A*A -- on récupère le genre courant et on construit le path pour le fetch
const currGenderPath = getCookieValue('gender');
const fetchUrl = `http://localhost:3000/api/products${currGenderPath}`;


/*
fetch(fetchUrl)
  .then(res => res.json())
  .then(async data => {
    await filterProducts(data);
  });
*/

// A*A -- on récupère tous les produits du genre courant
fetch(fetchUrl)
  .then(res => res.json())
  .then(products => {

    const categID = location.pathname.split('/')[2];
    let filteredProducts = [];

    // NEW --
    // MK -- on filtre selon 3 clés de filtrage possibles :
    switch (categID) {

      case '100':
        // index '100' -> PAS DE FILTRAGE !
        filteredProducts = [...products];
        break;

      case '99':
        // index '99' -> filtrage sur p_sales === 'Y'
        filteredProducts = products.filter(item => {
          if (item.p_sales === 'Y') return item;
        });
        break;

      default:
        // filtrage sur l'ID de catégorie
        filteredProducts = products.filter(item => {
          if (item.p_catId === parseInt(categID)) return item;
        });
        break;
    }



    // MK -- on crée les éléments DOM avec les produits filtrés
    const htmlProducts = filteredProducts.map(item => {
      if (item.p_subcat === null) {
        item.p_subcat = "";
      }

      let itemString = `
    <li>
      <i class="ph-club"></i>
      <a href="/detail/${item.p_id}">${item.p_brand} / ${item.p_name} / ${item.p_subcat} / € ${item.p_price}</a>`;

      if (item.p_sales === 'Y') {
        itemString += `<span class="badge">-${item.p_disc}%</span></li>`;
      } else {
        itemString += `</li>`;
      }

      return itemString;
    });


    // MK -- on affiche dans le DOM
    const showProducts = document.querySelector("#showProducts");
    showProducts.innerHTML = htmlProducts.join('');

  });





