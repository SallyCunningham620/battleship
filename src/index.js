import "./styles.css";

// src/index.js
import Gameboard from './gameboard.js';
import Ship from './ship.js';
import Player from './player.js';
//add color to gameboard
//const playerBoard = new Gameboard('player-board');
//const computerBoard = new Gameboard('computer-board');
const player = new Player("Human");
const computer = new Player("Computer", true);
const infoDisplay = document.getElementById('game-message');
const turnDisplay = document.getElementById('turn-message');
//let gameOver = false;
let isPlayerTurn ;
let gameActive = true;

const shipsContainer = document.querySelector('.ships-container');
const flipButton = document.querySelector('#flip');
const startButton = document.querySelector('#start-button');
let isVertical;
//Option choosing
function flip() {
    isVertical = !isVertical;
    shipsContainer.style.flexWrap = isVertical ? 'nowrap' : 'wrap';
    
    const shipsArr = Array.from(shipsContainer.children)
    shipsArr.forEach(shipArr => {
        if (isVertical) {
            shipArr.classList.remove('horizontal');
            shipArr.classList.add('vertical');
        } else {
            shipArr.classList.remove('vertical');
            shipArr.classList.add('horizontal');
    }
        })
    };

flipButton.addEventListener('click', flip);

const destroyer = new Ship('destroyer', 2);
const submarine = new Ship('submarine', 3);
const cruiser = new Ship('cruiser', 3);
const battleship = new Ship('battleship', 4);
const carrier = new Ship('carrier', 5);

const ships = [destroyer, submarine, cruiser, battleship, carrier];

let notDropped;

//Drag player ships
let draggedShip;

const shipOptions = Array.from(shipsContainer.children);
shipOptions.forEach(shipOption => {
    shipOption.addEventListener('dragstart', dragStart)
});

function dragStart(e) {
    notDropped = false;
    draggedShip = e.target;
}

function dragOver(e) {
    e.preventDefault();
    const ship = ships[draggedShip.id];
    player.board.hightlightArea(e.target.id, ship, isVertical);
}

function dropShip(e) {
    e.preventDefault();
    const startId = e.target.id;
    const ship = ships[draggedShip.id];
    player.board.placeShip('player-board', ship, startId, isVertical)
//    playerBoard.placeShip('player-board', ship, startId, isVertical);
    if (!notDropped) {
        draggedShip.remove()
    }
}

function dragOverNDrop() {
    const allPlayerBlocks = document.querySelectorAll(`#player-board .cell`);
    allPlayerBlocks.forEach(playerBlock => {
        playerBlock.addEventListener('dragover', dragOver);
        playerBlock.addEventListener('drop', dropShip);
    })
}

function startGame() {
    if (isPlayerTurn === undefined) {
        if (shipsContainer.children.length != 0) {
            updateMessage('Please place all your places first.');
        } else {
            const allBoardCells = document.querySelectorAll('#computer-board .cell');
            allBoardCells.forEach(cell => cell.addEventListener('click', handleCellClick));
            isPlayerTurn = true;
            turnMessage('Your turn');
            updateMessage('The game started.');
        }
    }
}

startButton.addEventListener ('click', startGame);

function computerTurn() {
    if (gameActive) {
        turnMessage('Computer Go!');
        updateMessage(' The computer is thinking...');

        setTimeout(() => {
            let randomComputerGo = Math.floor(Math.random() * 100)
            const allPlayerCells = document.querySelectorAll('#player-board .cell');

            if (allPlayerCells[randomComputerGo].classList.contains('taken') &&
                allPlayerCells[randomComputerGo].classList.contains('boom')
            ) {
                computerTurn();
                return
            } else if (
                allPlayerCells[randomComputerGo].classList.contains('taken') &&
                !allPlayerCells[randomComputerGo].classList.contains('boom')
            ) {
                allPlayerCells[randomComputerGo].classList.add('boom')
                updateMessage('The computer hit your ship!');
                let classes = Array.from(allPlayerCells[randomComputerGo].classList);
                classes = classes.filter(className => className !== 'block');
                classes = classes.filter(className => className !== 'boom');
                classes = classes.filter(className => className !== 'taken');
                computerAttacks.push(...classes);
                gameActiveCheck('computer-board', computerAttacks, computerSunkShips);
            } else {
                updateMessage('Nothing hit this time.');
                allPlayerCells[randomComputerGo].classList.add('empty');
            }
        }, 2000)

        setTimeout(() => {
            isPlayerTurn = true;
            turnMessage('Player Go!');
            updateMessage('Select a cell to attack on computer board.');
            const allComputerCells = document.querySelectorAll('#computer-board .cell');
            allComputerCells.forEach(cell => cell.addEventListener('click', handleCellClick));
        }, 4000);

    } else { 
        alert('The game is over.');
        return;
    }
}
/*
function gameOver(winner) {
    gameActive = false;
    updateMessage(`${winner} wins! Game over.`);
    // Remove event listeners from computer board
    const computerCells = document.getElementById('computer-board').querySelectorAll('.cell');
    computerCells.forEach(cell => cell.removeEventListener('click', handleCellClick));
}
//start game with updateMessage("Game started! Your turn to attack the computer's board");
*/

let playerAttacks = [];
let computerAttacks = [];
const playerSunkShips = [];
const computerSunkShips = [];

function handleCellClick(e) {
    if (gameActive && isPlayerTurn) {
        if (e.target.classList.contains('taken')) {
            e.target.classList.add('boom');
            updateMessage('Computer ship hit!')
            let attacks = Array.from(e.target.classList);
            attacks = attacks.filter(attack => attack !== 'block');
            attacks = attacks.filter(attack => attack !== 'boom');
            attacks = attacks.filter(attack => attack !== 'taken');
            playerAttacks.push(...attacks);
            //checkscore
            gameActiveCheck('player-board', playerAttacks, playerSunkShips);
        }
        if (!e.target.classList.contains('taken')) {
            updateMessage('No ships hit.');
            e.target.classList.add('empty');
        }
        isPlayerTurn = false;
        const allBoardCells = document.querySelectorAll('#computer-board .cell');
        allBoardCells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        setTimeout(computerTurn, 3000);

    } else {
        alert(`It's the computers turn.`);
    }
}

function gameActiveCheck(user, userAttacks, userSunkShips) {
    function checkShip(shipName, shipLength) {
        if (
            userAttacks.filter(currentShipsName => currentShipsName === shipName).length === shipLength
        ) {
            if (user === 'player-board') {
                updateMessage(`You sunk the computers ${shipName}`);
                playerAttacks = userAttacks.filter(currentShipName => currentShipName !== shipName)
            }
            if (user === 'computer-board') {
                updateMessage(`The computer sunk your ${shipName}`);
                computerAttacks = userAttacks.filter(currentShipName => currentShipName !== shipName)
            }
            userSunkShips.push(shipName);
        }
    }

    checkShip('destroyer', 2);
    checkShip('submarine', 3);
    checkShip('cruiser', 3);
    checkShip('battleship', 4);
    checkShip('carrier', 5);

    if (playerSunkShips.length === 5) {
        updateMessage('You sunk all the computer ships. YOU WON!');
        turnMessage('');
        gameActive = false;
    }
    if (computerSunkShips.length === 5) {
        updateMessage(' The computer sunk all your ships. You lost.');
        gameActive = false;
    }
}
function placeComputerShipsRandomly() {  
    ships.forEach(ship => computer.board.placeShip('computer-board', ship));
}

//add a reset game
function renderBoard(boardObj, elementId, isEnemyBoard) {
    const boardElement = document.getElementById(elementId);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x = i;
            cell.dataset.y = j;

            const cellId = (i * 10) + j;
            cell.id = cellId;
            //console.log(cellId);
/*
            const boardCellData = boardObj.board[i][j];
            console.log(boardCellData);

            if (boardCellData && boardCellData.ship && boardCellData.hit) {
                cell.classList.add('hit');
            } else if (boardObj.missedAttacks.some(m => m[0] === i && m[1] === j)) {
                cell.classList.add('miss');
            } else if (!isEnemyBoard && boardCellData && boardCellData.ship) {
                // Only show unhit ships on the player's own board
                cell.classList.add('ship');
            }*/
            //console.log(cell);
            boardElement.appendChild(cell);
        }
    }
}
function renderBoards() {
    renderBoard(player, 'player-board', false);
    renderBoard(computer, 'computer-board', true);
}

function updateMessage(msg) {
    infoDisplay.textContent = msg;
}
function turnMessage(msg) {
    turnDisplay.textContent = msg;
}

function initGame() {
    renderBoards();
    placeComputerShipsRandomly();
    dragOverNDrop();
    updateMessage("Place your ships and click Start.");
}

initGame();
