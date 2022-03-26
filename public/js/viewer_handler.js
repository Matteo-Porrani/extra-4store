

const vwSelectors = document.querySelectorAll('.vw__sel');

vwSelectors.forEach(item => {
  item.addEventListener('change', (e) => {
    lineNb = e.target.dataset.count;

    const selectTgt = document.querySelector(`#row${lineNb}`);
    if (e.target.checked) {
      selectTgt.style.backgroundColor = '#ffd60a';
    } else {
      selectTgt.style.backgroundColor = 'transparent';
    }
  });
})




const idCells = document.querySelectorAll('.id__cell');

/* ?????? */ const nbOfProducts = document.querySelector('#nbOfProducts'); 


idCellsArray = [...idCells];
const idsArray = idCellsArray.map(item => item.textContent);

idsArray.forEach(item => {

  // fetch(`http://localhost:3000/api/colors/${item}`)
  fetch(`https://demo-4store.herokuapp.com/api/colors/${item}`)
    .then(res => res.json())
    .then(data => {

      const colCell = document.querySelector(`#colCell${item}`);
      colorNames = data.map(item => item.colName);
      colCell.textContent = colorNames.join(', ');

    });

});


idsArray.forEach(item => {

  // fetch(`http://localhost:3000/api/sizes/${item}`)
  fetch(`https://demo-4store.herokuapp.com/api/sizes/${item}`)
    .then(res => res.json())
    .then(data => {

      const sizCell = document.querySelector(`#sizCell${item}`);
      sizeNames = data.map(item => item.sizName);
      sizCell.textContent = sizeNames.join(', ');

    });

});




