const board = document.querySelector('.board');
const scoreElement = document.querySelector('#score');
const highScoreElement = document.querySelector('#high-score');
const timeElement = document.querySelector('#time');
const startButton = document.querySelector('.btn-start');
const modal = document.querySelector('.modal');

let IntervalId;
let timerIntervalId = null;

// Block height and width
const blockHeight = 80
const blockWidth = 80

let highScore = localStorage.getItem('highScore') ? JSON.parse(localStorage.getItem('highScore')) : 0;
highScoreElement.innerText = `${highScore}`;
let score = 0
let time = `00:00`

// Number of rows and columns
const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

// 2D array to store blocks
const blocks = []

// array to store snake body segments, initially snake has only one segment at position (1,3)
let snake = [
    {x:1, y:3}, 
];

let direction = 'left';
let food = {x: Math.floor(Math.random()*rows), y:Math.floor(Math.random()*cols)}; 

// start the game when start button is clicked
startButton.addEventListener('click',function(){
    modal.style.display = 'none';
    IntervalId = setInterval(()=>{
        render();
    }, 300) 
    timerIntervalId = setInterval(()=>{
        let[min, sec] = time.split(':').map(Number);
        if(sec==59){
            min+=1;
            sec=0;
        }else{
            sec+=1;
        }
        time = `${min}:${sec}`;
        timeElement.innerText = time;
    }, 1000)
})

// listen to arrow keys to change direction of snake
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

// create blocks for the board
for(let i = 0; i<rows; i++){
    for(let j = 0; j<cols; j++){
        const block = document.createElement('div');
        block.classList.add('block');
        board.appendChild(block);
        blocks[`${i}-${j}`] = block;
    }
}

// check if snake head is colliding with its body
function isSelfCollision(head){
    return snake.some(segment=> segment.x === head.x && segment.y === head.y);
}

// render the snake and food on the board
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

    if(head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols || isSelfCollision(head)) {
        alert("Game Over!");
        clearInterval(IntervalId);
        location.reload();
    }

    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.remove('fill');
    })

    snake.unshift(head);
    snake.pop();

    // check if snake head is on food
    if(head.x == food.x && head.y == food.y){
        blocks[`${food.x}-${food.y}`].classList.remove('food');
        food = {x: Math.floor(Math.random()*rows), y:Math.floor(Math.random()*cols)}; 
        blocks[`${food.x}-${food.y}`].classList.add('food');
        snake.unshift(head);

        score+=10;
        scoreElement.innerText = `${score}`;
        timeElement.innerText = `${time}`;
        if(score > highScore){
            highScore = score;
            localStorage.setItem('highScore', JSON.stringify(highScore));
            highScoreElement.innerText = `${highScore}`;
        }

    }

    // render the snake
    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.add('fill');
    })
}