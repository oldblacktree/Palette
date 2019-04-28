document.getElementById('prev-color').style.backgroundColor = 'green';
document.getElementById('current-color').style.backgroundColor = '#ccc';

const paintBucketEl = document.getElementById('paint-bucket');
const colorPickerEl = document.getElementById('color-picker');
const moveEl = document.getElementById('move');
const transformEl = document.getElementById('transform');

let currentColor = '';
let prevColor = '';



document.addEventListener('click', chooseColor)
function chooseColor(e){
  prevColor= currentColor;
  currentColor = getComputedStyle(e.target).backgroundColor;
  if (currentColor !== prevColor ) {
    document.getElementById('prev-color').style.backgroundColor = prevColor;
  }
  document.getElementById('current-color').style.backgroundColor = currentColor;
  console.log(currentColor);
}

