document.getElementById('prev-color').style.backgroundColor = 'green';
document.getElementById('current-color').style.backgroundColor = '#ccc';

const paintBucketEl = document.getElementById('paint-bucket');
const colorPickerEl = document.getElementById('color-picker');
const moveEl = document.getElementById('move');
const transformEl = document.getElementById('transform');

let currentColor = '#ccc';
let prevColor = '';
let orderMoveItem = '';
let orderIntoItem = '';
let choosenTool = '';


paintBucketEl.addEventListener('click', e => {
  removeEvLis();
  choosenTool = paintBucketEl;
  document.addEventListener('click', paint);
  styleTool(e);
})

colorPickerEl.addEventListener('click', e => {
  removeEvLis();
  choosenTool = colorPickerEl;
  document.addEventListener('click', chooseColor)
  styleTool(e);
})

transformEl.addEventListener('click', e => {
  removeEvLis();
  choosenTool = transformEl;
  document.addEventListener('click', transform)
  styleTool(e);
})

moveEl.addEventListener('click', e => {
  removeEvLis();
  choosenTool = moveEl;
  styleTool(e);

  Array.from(document.querySelectorAll('.palette__item')).forEach((item) => {
    item.setAttribute('draggable', 'true');
    item.addEventListener('dragenter', dragenterFigure);
    item.addEventListener('dragover', dragoverFigure);
    item.addEventListener('dragleave', dragleaveFigure);
    item.addEventListener('drop', dropFigure);
  })
  document.addEventListener('dragstart', moveStart);
  document.addEventListener('dragend', moveEnd);
})

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 80:
      removeEvLis();
      choosenTool = paintBucketEl;
      document.addEventListener('click', paint);
      paintBucketEl.style.cssText = 'border: 3px solid green'
      break;
    case 67:
      removeEvLis();
      choosenTool = colorPickerEl;
      document.addEventListener('click', chooseColor);
      colorPickerEl.style.cssText = 'border: 3px solid green'
      break;
    case 77:
      removeEvLis();
      choosenTool = moveEl;
      Array.from(document.querySelectorAll('.palette__item')).forEach((item) => {
        item.setAttribute('draggable', 'true');
        item.addEventListener('dragenter', dragenterFigure);
        item.addEventListener('dragover', dragoverFigure);
        item.addEventListener('dragleave', dragleaveFigure);
        item.addEventListener('drop', dropFigure);
      })
      document.addEventListener('dragstart', moveStart);
      document.addEventListener('dragend', moveEnd);
      moveEl.style.cssText = 'border: 3px solid green'
      break;
    case 84:
      removeEvLis();
      choosenTool = transformEl;
      document.addEventListener('click', transform);
      transformEl.style.cssText = 'border: 3px solid green'
      break;
  }
})



function dragenterFigure(e) {
  e.target.style.opacity = 0.5;
}
function dragoverFigure(e) {
  e.preventDefault();
}
function dragleaveFigure(e) {
  e.target.style.opacity = 1;
}
function dropFigure (e) {
  orderIntoItem = getComputedStyle(e.target).order;
  e.target.style.order = orderMoveItem;
  e.target.style.opacity = 1;
}

function moveStart(e){
  orderMoveItem = getComputedStyle(e.target).order;
}

function moveEnd(e) {
  e.target.style.order = orderIntoItem;
}


function removeEvLis() {
  if (choosenTool === paintBucketEl) {
    document.removeEventListener('click', paint);
    paintBucketEl.style.border = 'none'
  } else if (choosenTool === colorPickerEl) {
    document.removeEventListener('click', chooseColor)
    colorPickerEl.style.border = 'none'
  } else if (choosenTool === transformEl) {
    document.removeEventListener('click', transform);
    transformEl.style.border = 'none'
  } else if (choosenTool === moveEl) {
    Array.from(document.querySelectorAll('.palette__item')).forEach((item) => {
      item.removeAttribute('draggable');
      item.removeEventListener('dragenter', dragenterFigure);
      item.removeEventListener('dragover', dragoverFigure);
      item.removeEventListener('dragleave', dragleaveFigure);
      item.removeEventListener('drop', dropFigure);
    })
    document.removeEventListener('dragstart', moveStart);
    document.removeEventListener('dragend', moveEnd);
    moveEl.style.border = 'none'
  }
}

function paint(e){
  if (e.target.classList.contains('palette__item')) {
   e.target.style.backgroundColor = currentColor;
  }
}

function chooseColor(e){
  prevColor= currentColor;
  currentColor = getComputedStyle(e.target).backgroundColor;
  if (currentColor !== prevColor ) {
    document.getElementById('prev-color').style.backgroundColor = prevColor;
  }
  document.getElementById('current-color').style.backgroundColor = currentColor;
}

function transform(e) {
  if (e.target.classList.contains('palette__item')) {
    e.target.classList.toggle('-transform');
  }
}

function styleTool(e){
  e.currentTarget.style.cssText = 'border: 3px solid green'
}







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


// document.addEventListener('click', paint);
// function paint(e){
//   if (e.target.classList.contains('palette__item')){
//    e.target.style.backgroundColor = currentColor;
//   }
// }

// Array.from(document.querySelectorAll('.palette__item')).forEach((item) => {
//   item.addEventListener('dragenter', function(e) {
//     e.target.style.opacity = 0.5;
//   })
//   item.addEventListener('dragover', function (e) {
//     e.preventDefault();
//   })
//   item.addEventListener('dragleave', function (e) {
//     e.target.style.opacity = 1;
//   })
//   item.addEventListener('drop', function (e) {
//     orderIntoItem = getComputedStyle(e.target).order;
//     e.target.style.order = orderMoveItem;
//     e.target.style.opacity = 1;
//   })
// })

// document.addEventListener('dragstart', moveStart);
// function moveStart(e){
//   orderMoveItem = getComputedStyle(e.target).order;
// }
// document.addEventListener('dragend', moveEnd);
// function moveEnd(e) {
//   e.target.style.order = orderIntoItem;
// }





// document.addEventListener('click', transform);
// function transform(e) {
//   if (e.target.classList.contains('palette__item')) {
//     e.target.classList.toggle('-transform');
//   }
// }
