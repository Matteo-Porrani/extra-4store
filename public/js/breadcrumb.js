



const loc = location.pathname;

// A*A -- on lit le dernier niveau
const lastLevel = getLastLevel();
let currLevel;

// A*A -- on met a jour le niveau courant
const rgxCategory = new RegExp ("/category/");
const rgxDetail = new RegExp ("/detail/");

if (loc === '/') {
  currLevel = 0;

  const brdInit = ["/"];
  // init brd cookie
  document.cookie = `brd=${encodeURIComponent(JSON.stringify(brdInit))}; path=/`;

  console.log('breadcrumb reset');
  console.log(getCurrentBrd());

} else if (loc === '/man' || loc === '/wom') {
  currLevel = 1;
} else if (rgxCategory.test(loc)) {
  currLevel = 2;
} else if (rgxDetail.test(loc)) {
  currLevel = 3;
}
document.cookie = `lev=${currLevel}; path=/`;


// A*A -- on calcule le delta et on décide si ajouter ou enlever
const delta = currLevel - lastLevel;
console.log(delta);

if (delta < 0 && loc !== '/') {
  // on supprime
  for (let i = 1; i <= Math.abs(delta); i++) {
    popBrd();
    console.log('deleted 1 item from breadcrumb');
    console.log(getCurrentBrd());
  }
} else if (delta > 0) {
  // on ajoute
  addToBrd(loc);

  console.log(`added -> ${loc}`);
  console.log(getCurrentBrd());

}




function getLastLevel() {

  const cookies = document.cookie.split('; ');
  const prsCookies = cookies.map(item => {
    return item.split('=');
  });

  try {
    const levCookie = prsCookies.find(item => item[0] === 'lev');
    return parseInt(levCookie[1]);
  } catch {
    return 0;
  }
  
}




// MK -- breadcrumb routes

function getCurrentBrd() {

  const cookies = document.cookie.split('; ');
  const prsCookies = cookies.map(item => {
    return item.split('=');
  });

  const brdCookie = prsCookies.find(item => item[0] === 'brd');

  const brdJourney = JSON.parse(decodeURIComponent(brdCookie[1]));

  // console.log(brdJourney);
  return brdJourney;
}


function addToBrd(item) {
  const currentBrd = getCurrentBrd();
  currentBrd.push(item);
  const updatedBrd = JSON.stringify(currentBrd);
  document.cookie = `brd=${encodeURIComponent(updatedBrd)}; path=/`;
}


function popBrd() {
  const currentBrd = getCurrentBrd();
  currentBrd.pop();
  const updatedBrd = JSON.stringify(currentBrd);
  document.cookie = `brd=${encodeURIComponent(updatedBrd)}; path=/`;
}






// MK -- display breadcrumb


const categories = {
  1: "t-shirts",
  2: "vestes",
  3: "pantalons",
  4: "robes",
  6: "sweats & pulls",
  7: "sportswear",
  8: "chaussures",
  9: "accessoires",
  99: "soldes",
  100: "toutes les catégories"
}


const brdList = document.querySelector('.brd__list');

function displayBrd() {

  const links = getCurrentBrd();

  const listItems = links.map((item, index) => {
    let text;
    if (item === '/') {
      text = "accueil";
    } else if (item === '/man') {
      text = "homme";
    } else if (item === '/wom') {
      text = "femme";
    } else if (rgxCategory.test(item)) {
      text = categories[item.split('/')[2]];
    } else if (rgxDetail.test(item)) {

      // on récupère le nom du produit directement depuis le DOM
      text = document.querySelector('#detailPageProductName').textContent;
    }

    if (index === links.length - 1) {
      return `<li><a class="brd__link txtor">${text}</a></li>`;
    } else {
      return `<li><a class="brd__link" href="${item}">${text}</a></li>`;
    }

  });

  
  brdList.innerHTML = listItems.join('<span> / </span>');
}


// A*A -- on affiche uniquement si on n'est pas sur la home
if (loc !== '/') {
  displayBrd();
}