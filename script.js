//Initial Data
let currentColor = 'black';
let canDraw = false
let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector('#tela');
let context = screen.getContext('2d');

//Events
document.querySelectorAll(['.colorArea ']).forEach(item => {
    item.addEventListener('click', colorClickEvent);
   
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mouseup', mouseUpEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
document.querySelector('.clear').addEventListener('click', clearScreen);



//Functions
function colorClickEvent(e) {
    let colors = e.target.getAttribute('data-color');
    currentColor = colors;
    
    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
    
};


function mouseDownEvent(e) {
   canDraw = true;
   mouseX = e.pageX - screen.offsetLeft;
   mouseY = e.pageY - screen.offsetTop;
}
function mouseMoveEvent(e) {
  if(canDraw){
    draw(e.pageX,e.pageY);
  }
}
function mouseUpEvent() {
  canDraw = false; 
}

function draw(x,y) {
  let pointX = x - screen.offsetLeft;
  let pointY = y - screen.offsetTop;

  context.beginPath();
  context.lineWidth = 5;
  context.lineJoin = 'round';
  context.moveTo(mouseX, mouseY);
  context.lineTo(pointX, pointY);
  context.closePath();
  context.strokeStyle = currentColor;
  context.stroke();


  mouseX = pointX;
  mouseY = pointY;
}

function clearScreen() {

  context.setTransform(1, 0, 0,1, 0, 0);
  context.clearRect(0, 0, context.canvas.width, context.canvas.height)

}












// let current = 'black;'

// const toque = document.querySelectorAll('.colorArea ');
// const button = document.querySelector('.clear');



// button.addEventListener('click', ()=>{
//     console.log('foi clicado')
// })


// toque.forEach(item =>{
//     item.addEventListener('click', (e)=> {
//         let cores = e.target.getAttribute('data-color');

//         console.log('A cor clicada foi', cores);
//     })
// })