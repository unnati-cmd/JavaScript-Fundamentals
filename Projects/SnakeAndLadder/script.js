const board = document.querySelector('.board');
const scoreElement = document.querySelector('#score');
const highScoreElement = document.querySelector('#high-score');
const timeElement = document.querySelector('#time');
const startButton = document.querySelector('.btn-start');
const modal = document.querySelector('.modal');

let IntervalId;

// Block height and width
const blockHeight = 80
const blockWidth = 80

// Number of rows and columns
const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

const blocks = []
let snake = [
    {x:1, y:3}, 
];

let direction = 'left';
let food = {x: Math.floor(Math.random()*rows), y:Math.floor(Math.random()*cols)}; 

startButton.addEventListener('click',function(){
    modal.style.display = 'none';
    IntervalId = setInterval(()=>{
        render();
    }, 400) 
})



addEventListener("keydown", function(dets){
    if(dets.key === 'ArrowUp'){
        direction = 'up';
    }
    else if(dets.key === 'ArrowDown'){
        direction = 'down';
    }
    else if(dets.key === 'ArrowRight'){
        direction = 'right';
    }
    else{
        direction = 'left';
    }
})

for(let i = 0; i<rows; i++){
    for(let j = 0; j<cols; j++){
        const block = document.createElement('div');
        block.classList.add('block');
        board.appendChild(block);
        block.innerText = `${i}-${j}`;
        blocks[`${i}-${j}`] = block;
    }
}

function render(){
    // calculate snake head again and again
    let head = null
    blocks[`${food.x}-${food.y}`].classList.add('food');
    if(direction === 'left'){
        head = {x: snake[0].x, y: snake[0].y - 1}
    }else if(direction === 'right'){
        head = {x: snake[0].x, y: snake[0].y + 1}
    }else if(direction === 'down'){
        head = {x: snake[0].x + 1, y: snake[0].y}
    }else{
        head = {x: snake[0].x - 1, y: snake[0].y}
    }

    if(head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
        alert("Game Over!");
        clearInterval(IntervalId);
        location.reload();
    }

    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.remove('fill');
    })

    snake.unshift(head);
    snake.pop();

    if(head.x == food.x && head.y == food.y){
        blocks[`${food.x}-${food.y}`].classList.remove('food');
        food = {x: Math.floor(Math.random()*rows), y:Math.floor(Math.random()*cols)}; 
        blocks[`${food.x}-${food.y}`].classList.add('food');
        snake.unshift(head);

    }

    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.add('fill');
    })
}