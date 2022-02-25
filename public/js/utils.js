
function writeNewCookie(key, val) {
  const encodedVal = encodeURIComponent(val);
  document.cookie = `${key}=${encodedVal}; path=/`;
}


function getCookieArray() {
  const cookies = decodeURIComponent(document.cookie);
  const cookiesArray = cookies.split('; ');
  const cookiesArrayDeep = cookiesArray.map(cookie => {
    return cookie.split('=');
  });

  return cookiesArrayDeep;
}


function getCookieValue(key) {
  const cookies = getCookieArray();
  return cookies.find(item => item[0] === key)[1];
}



// A*A -- special functions for cart cookie

function getCartItems() {
  const cartItems = JSON.parse(getCookieValue('cart'));
  let parsedCartItems = cartItems.map(item => JSON.parse(item));
  return parsedCartItems;
}


function removeItemFromCartCookie(itemId) {
  const cartItems = getCartItems();
  const indexToRemove = cartItems.findIndex(item => item.id == itemId);

  cartItems.splice(indexToRemove, 1);

  // turn an array of objects into an array of STRINGIFIED objects
  cartStringifiedItems = cartItems.map(item => JSON.stringify(item));

  // rewrite cookie
  writeNewCookie('cart', JSON.stringify(cartStringifiedItems));
}




// 
function showModal(modalMessage) {
  writeNewCookie('mmess', modalMessage);

  mainModal.classList.add('modal__show');
  setTimeout(() => {
    mainModalText.textContent = getCookieValue('mmess');
  }, 500)

  setTimeout(() => {
    mainModalText.textContent = "";
    writeNewCookie('mmess', "");
    mainModal.classList.remove('modal__show');
  }, 3000);
}








