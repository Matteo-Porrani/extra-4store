
// const rate = 2.2;

const rateParag = document.querySelector('#productRating');
const rate = rateParag.textContent; 

const fullStars = parseInt(rate);
const partStars = rate - fullStars;

// console.log((partStars * 100));

let stars = [];


// 1) analyze rate and fill the array
for (i=1; i <= 5; i++) {
  if (i <= fullStars) {
    stars.push(100);
  } else if (i === fullStars + 1) {
    stars.push(partStars * 100);
  } else {
    stars.push(0);
  }
}

// for 3.6 stars is [1, 1, 1, 60, 0]
// every array value will set the width of a .square__fill element in the next loop


// set the fillers' width (%)
for (i=1; i <= 5; i++) {
  const filler = document.querySelector(`#fill${i}`);
  filler.style.width = stars[i-1] + '%';
}