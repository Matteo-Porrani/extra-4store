
const slideActive = 1;


const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);

const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);


// get an array of divs with product info
const info = document.querySelector('#promoInfo');
const advertItems = Array.from(info.children);


// We need to know tha width of the display window...
const slideWidth = slides[0].getBoundingClientRect().width;




// Arrange the slides next to one another

const setSlidePosition = (slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
}

// this will automatically use 'slide' & 'index' as function parameters
slides.forEach(setSlidePosition);



// T*T -- automatic slide

if (slideActive) {

  setInterval(() => {
    slideRight();
  }, 2000);

}




// MK -- moveToSlide f.
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;

  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

// MK -- updateDots f.
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}






// T*T -- buttons

// MK -- LEFT button > move slides to the left
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const currentSlideIndex = slides.indexOf(currentSlide);

  findInfoIndex(currentSlideIndex, 'left');

  const currentDot = dotsNav.querySelector('.current-slide');

  const prevIndex = slides.indexOf(currentSlide);

  let prevSlide;
  let prevDot;

  if (prevIndex === 0) {
    prevSlide = slides[slides.length - 1];
    prevDot = dots[dots.length - 1];
  } else {
    prevSlide = currentSlide.previousElementSibling;
    prevDot = currentDot.previousElementSibling;
  }

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
});



// MK -- RIGHT button > move slides to the right
nextButton.addEventListener('click', e => {
  slideRight();
});



// TODO -- new slideRight() f.
const slideRight = () => {
  /**
   * this code was in the click RIGHT event listener,
   * now this function can be called both on RIGHT click and AUTOMATICALLY by setInterval
   */
  const currentSlide = track.querySelector('.current-slide');
  const currentSlideIndex = slides.indexOf(currentSlide);

  // let targetInfoIndex;
  // if (currentSlideIndex === slides.length - 1) {
  //   targetInfoIndex = 0;
  // } else {
  //   targetInfoIndex = currentSlideIndex + 1;
  // }

  // showAdvertItem(advertItems[targetInfoIndex]);

  findInfoIndex(currentSlideIndex, 'right');


  const currentDot = dotsNav.querySelector('.current-slide');
  const prevIndex = slides.indexOf(currentSlide);

  let nextSlide;
  let nextDot;

  if (prevIndex === (slides.length - 1)) {
    // we are on the last slide
    nextSlide = slides[0];
    nextDot = dots[0];
  } else {
    nextSlide = currentSlide.nextElementSibling;
    nextDot = currentDot.nextElementSibling;
  }

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
}



const findInfoIndex = (currentSlideIndex, direction) => {

  let targetInfoIndex;

  if (direction === 'left') {
    // LEFT

    if (currentSlideIndex === 0) {
      targetInfoIndex = slides.length - 1;
    } else {
      targetInfoIndex = currentSlideIndex - 1;
    }

  } else {
    // RIGHT

    if (currentSlideIndex === slides.length - 1) {
      targetInfoIndex = 0;
    } else {
      targetInfoIndex = currentSlideIndex + 1;
    }

  }

  showAdvertItem(advertItems[targetInfoIndex]);
}







// when I click nav indicators > move to that slide

// MK -- dots

dotsNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');

  // if we didn't click on a button, function stops
  if (!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');

  const targetIndex = dots.indexOf(targetDot);
  const targetSlide = slides[targetIndex];
  const targetInfo = advertItems[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);

  // this will show info corresponding to the index of the clicked dot
  showAdvertItem(targetInfo);
});






// MK -- info display / hide

const showAdvertItem = (targetInfo) => {

  advertItems.forEach((item) => {
    if (item === targetInfo) {
      item.classList.remove('dnn');
    } else {
      item.classList.add('dnn');
    }
  });

} 