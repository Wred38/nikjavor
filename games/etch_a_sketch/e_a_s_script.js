
function createGrid(x = 16) {
  const container = document.querySelector('.container');
  let grid = document.querySelectorAll('.rowdiv')
  grid.forEach(element => element.remove())
  for (let i = 0; i < x; i++) {
    rowdiv = document.createElement('div');
    rowdiv.classList.add('rowdiv');
    for (let i = 0; i < x; i++) {
      div = document.createElement('div')
      div.classList.add('gridElement')
      div.style.cssText = `height: ${320 / x - 1}px; width: ${320 / x - 1}px; margin: 0.5px`;
      div.classList.add('unhovered')
      rowdiv.appendChild(div);
    }
    container.appendChild(rowdiv)
  }
  let gridElements = document.querySelectorAll('.gridElement')
  gridElements.forEach(gridElement => gridElement.addEventListener('mouseover', draw));
};

function draw(e) {
  this.classList.remove('unhovered')
  this.classList.add('hovered')
};

function erase(e){
  this.classList.remove('hovered')
  this.classList.add('unhovered')
};

createGrid()


let newButton = document.querySelector('.button-new')
newButton.addEventListener('click', () => {
  while (true) {
    newGridSize = parseInt(prompt('Enter the number of squares per side for the new grid:\nMin: 1 Max: 100', '16'));
    console.log(typeof (newGridSize));
    if (isNaN(newGridSize) == false && newGridSize > 0 && newGridSize < 101) {
      break
    }
  }
  createGrid(newGridSize)
})

let eraseButton = document.querySelector('.button-erase')
eraseButton.addEventListener('click', () => {
  if (eraseButton.textContent == "ERASE: OFF"){
    let gridElements = document.querySelectorAll('.gridElement')
    gridElements.forEach(gridElement => gridElement.addEventListener('mouseover', erase));
    eraseButton.textContent = "ERASE: ON"
  }
  else{
    gridElements = document.querySelectorAll('.gridElement')
    gridElements.forEach(gridElement => {
      gridElement.addEventListener('mouseover', draw),
      gridElement.removeEventListener('mouseover', erase)})
    eraseButton.textContent = "ERASE: OFF"
  }
})


