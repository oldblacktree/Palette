document.getElementById('prev-color').style.backgroundColor = 'green';
document.getElementById('current-color').style.backgroundColor = '#ccc';

const paintBucketEl = document.getElementById('paint-bucket');
const colorPickerEl = document.getElementById('color-picker');
const moveEl = document.getElementById('move');
const transformEl = document.getElementById('transform');

let currentColor = 'green';
let prevColor = '';
let orderMoveItem = '';
let orderIntoItem = '';


Array.from(document.querySelectorAll('.palette__item')).forEach((item) => {
  item.addEventListener('dragenter', function(e) {
    e.target.style.opacity = 0.5;
  })
  item.addEventListener('dragover', function (e) {
    e.preventDefault();
  })
  item.addEventListener('dragleave', function (e) {
    e.target.style.opacity = 1;
  })
  item.addEventListener('drop', function (e) {
    orderIntoItem = getComputedStyle(e.target).order;
    e.target.style.order = orderMoveItem;
    e.target.style.opacity = 1;
  })
})

document.addEventListener('dragstart', moveStart);
function moveStart(e){
  orderMoveItem = getComputedStyle(e.target).order;
}
document.addEventListener('dragend', moveEnd);
function moveEnd(e) {
  e.target.style.order = orderIntoItem;
}



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

