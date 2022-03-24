const toggler = document.querySelector('.head__toggler');
const headNav = document.querySelector('.head__nav');

toggler.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('open');
  headNav.classList.toggle('open');

});