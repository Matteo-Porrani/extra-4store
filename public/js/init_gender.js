
document.cookie = `gender=${encodeURIComponent(location.pathname)}; path= "/"`;


/*
if (location.pathname === '/man') {

// create cookie 'gender=man'
document.cookie = `gender=man; path=/`;

} else if (location.pathname === '/wom') {

  // create cookie 'gender=wom'
  document.cookie = `gender=wom; path=/`;

}
*/



/*

if (location.pathname === '/man') {
  const gender = 'M';

  fetch('http://localhost:3000/api/products/man')
  .then(res => res.json())
  .then(async data => {
    await useData(data, gender);
  });

} else if (location.pathname === '/wom') {
  const gender = 'W';

  fetch('http://localhost:3000/api/products/wom')
  .then(res => res.json())
  .then(async data => {

    await useData(data, gender);
  });
}

// initialisation de localStorage '.gender' & '.products' 
function useData(data, gender) {
  localStorage.gender = gender;
  localStorage.products = JSON.stringify(data);
}

*/