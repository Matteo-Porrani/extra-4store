
const loc = location.pathname;




// (+) -- index.ejs

// activation links home page 'femme' / 'homme'
const test = document.querySelector('#test')

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



// carrousel
