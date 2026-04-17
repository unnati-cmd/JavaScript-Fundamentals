const board = document.querySelector('.board');
const scoreElement = document.querySelector('#score');
const highScoreElement = document.querySelector('#high-score');
const timeElement = document.querySelector('#time');

// Block height and width
const blockHeight = 80
const blockWidth = 80

// Number of rows and columns
const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

const blocks = []

for(let i = 0; i<rows; i++){
    for(let j = 0; j<cols; j++){
        const block = document.createElement('div');
        block.classList.add('block');
        board.appendChild(block);
        block.innerText = `${i}-${j}`;
        blocks[`${i}-${j}`] = block;
    }
}