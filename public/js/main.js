
const loc = location.pathname;


// (+) -- index.ejs

// activation links vers 'femme' / 'homme'
const genderLinks = document.querySelectorAll('.gender__link');

genderLinks.forEach(link => {
  link.addEventListener('click', e => {
    location = e.currentTarget.dataset.href;
  });
});





// (+) -- gender.ejs

// set cookie 'gender'
if (loc === '/wom' || loc === '/man') {
  document.cookie = `gender=${encodeURIComponent(location.pathname)}; path= "/"`;
}



// (+) initialize cookie 'cart'
let currCookies = getCookieArray();

let cartCookie = currCookies.find(item => item[0] === 'cart');

if (!cartCookie) {

  cartArray = [];
  flatCartArray = JSON.stringify(cartArray);
  
  writeNewCookie('cart', flatCartArray);
  console.log('cart cookie initialized');
} 



// carrousel




// (+) -- toutes les pages

function updateCartPreview() {
  const cartPreview = document.querySelector('#cartPreview');
  if (getCartItems().length > 0) {
    cartPreview.textContent = `(${getCartItems().length})`;
  }
}

updateCartPreview();






// T*T -- gestion modale

const mainModal = document.querySelector('#mainModal');
let mainModalText = document.querySelector('#mainModalText');

const testBtn = document.querySelector('#testBtn');

try {
  
  testBtn.addEventListener('click', (e) => {
    writeNewCookie('mmess', e.target.dataset.message);
    showModal(e.target.dataset.message);
  });

} catch (e) {
  
}