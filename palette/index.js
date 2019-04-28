document.getElementById('prev-color').style.backgroundColor = 'green';
document.getElementById('current-color').style.backgroundColor = '#ccc';

const paintBucketEl = document.getElementById('paint-bucket');
const colorPickerEl = document.getElementById('color-picker');
const moveEl = document.getElementById('move');
const transformEl = document.getElementById('transform');

let currentColor = 'green';
let prevColor = '';

// document.addEventListener('dragstart', move);
// function move(e){
//   e.target.style.opacity = 0.3; 
// }
// document.addEventListener('dragend', move1);
// function move1(e) {
//   e.target.style.opacity = 1;
// }

// document.addEventListener('click', transform);
// function transform(e) {
//   if (e.target.classList.contains('palette__item')) {
//     e.target.classList.toggle('-transform');
//   }
// }


// document.addEventListener('click', paint);
// function paint(e){
//   if (e.target.classList.contains('palette__item')){
//    e.target.style.backgroundColor = currentColor;
//   }
// }



// document.addEventListener('click', chooseColor)
// function chooseColor(e){
//   prevColor= currentColor;
//   currentColor = getComputedStyle(e.target).backgroundColor;
//   if (currentColor !== prevColor ) {
//     document.getElementById('prev-color').style.backgroundColor = prevColor;
//   }
//   document.getElementById('current-color').style.backgroundColor = currentColor;
//   console.log(currentColor);
// }

