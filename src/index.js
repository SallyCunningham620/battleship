//move computerTurn to player.js
import "./styles.css";

// src/index.js
import Gameboard from './gameboard.js';
import Ship from './ship.js';
import Player from './player.js';

const player = new Player("Human");
const computer = new Player("Computer", true);
const infoDisplay = document.getElementById('game-message');
const turnDisplay = document.getElementById('turn-message');

const shipsContainer = document.querySelector('.ships-container');
const flipButton = document.getElementById('flip');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');

let isPlayerTurn = true;
let gameActive = true;
let isVertical = false;
let notDropped;
let draggedShip;
let alreadyAttacked;
let playerShips = shipFleet();
let computerShips = shipFleet();
let playerAttacks = [];
let computerAttacks = [];
let playerSunkShips = [];
let computerSunkShips = [];

function shipFleet() {
    return[
        new Ship('destroyer', 2),
        new Ship('submarine', 3),
        new Ship('cruiser', 3),
        new Ship('battleship', 4),
        new Ship('carrier', 5)
    ];
}
function resetGame() {
    isPlayerTurn = true;
    gameActive = true;
    isVertical = false;
    notDropped = undefined;
    draggedShip = undefined;
    alreadyAttacked;
    playerShips = shipFleet();
    computerShips = shipFleet();
    playerAttacks = [];
    computerAttacks = [];
    playerSunkShips = [];
    computerSunkShips = [];
    //ships = ['destroyer', 'submarine', 'cruiser', 'battleship', 'carrier'];

    player.board.resetBoard('player-board');
    computer.board.resetBoard('computer-board');

    const allCells = document.querySelectorAll('.cell');
    allCells.forEach(cell => {
        cell.className = 'cell'; // Remove other classes
        cell.removeEventListener('click', handleCellClick);
    });

    shipsContainer.innerHTML = `
            <div id="0" class="destroyer-size destroyer horizontal" data-size="2" draggable="true"></div>
            <div id="1" class="submarine-size submarine horizontal" data-size="3" draggable="true"></div>
            <div id="2" class="cruiser-size cruiser horizontal" data-size="3" draggable="true"></div>
            <div id="3" class="battleship-size battleship horizontal" data-size="4" draggable="true"></div>
            <div id="4" class="carrier-size carrier horizontal" data-size="5" draggable="true"></div>
    `;

    const newShipOptions = Array.from(shipsContainer.children);
    
    newShipOptions.forEach(shipOption => {
        shipOption.addEventListener('dragstart', dragStart);
    });

    updateMessage('Game reset. Place your ships and click start.');
    turnMessage('');
    placeComputerShipsRandomly();
    dragOverNDrop();
}

resetButton.addEventListener('click', resetGame);
//Option choosing
function flip() {
    //flip ships horizontal and vertical
    isVertical = !isVertical;
    //adjust container for flip
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

//Drag player ships
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
    const ship = playerShips[draggedShip.id];
    player.board.hightlightArea(e.target.id, ship, isVertical);
}

function dropShip(e) {
    e.preventDefault();
    if (!draggedShip) return;

    const startId = e.target.id;
    const ship = playerShips[draggedShip.id];
    player.board.placeShip('player-board', ship, startId, isVertical)
    if (!notDropped) {
        draggedShip.remove()
    }
}

function dragOverNDrop() {
    const allPlayerCells = document.querySelectorAll(`#player-board .cell`);
    allPlayerCells.forEach(playerCell => {
        playerCell.addEventListener('dragover', dragOver);
        playerCell.addEventListener('drop', dropShip);
    })
}

function startGame() {
    if (isPlayerTurn === true) {
        if (shipsContainer.children.length != 0) {
            updateMessage('Please place all your ships first.');
        } else {
            const allBoardCells = document.querySelectorAll('#computer-board .cell');
            allBoardCells.forEach(cell => cell.addEventListener('click', handleCellClick));
            isPlayerTurn = true;
            turnMessage('Your turn.');
            updateMessage('The game started. Select a cell to attack on the computer board.');
        }
    }
}

startButton.addEventListener ('click', startGame);

function computerTurn() {
    console.log(gameActive);
    if (gameActive) {
        turnMessage('Computer Turn!');
        updateMessage(' The computer is thinking...');
        console.log(player);
        setTimeout(() => {
            const {ship, cell, shipName} = computer.computerAttack(playerShips)
            console.log(ship);
             if (ship && !ship.sunk) {
                    ship.hit();
                    cell.classList.add('hit');
                    updateMessage('The computer hit your ship!');
                    computerAttacks.push(shipName);
                    console.log(computerAttacks);
                    if (ship.isSunk()) {
                        updateMessage(`The computer sunk your ${ship.name}!`);
                        computerSunkShips.push(ship.name);
                        console.log(computerSunkShips);
                        computerAttacks = computerAttacks.filter(attackName => attackName !== shipName);
                        console.log(computerAttacks)
                    }
                    gameActiveCheck('computer-board', computerSunkShips);
                    
            } else {
                    updateMessage('Nothing hit this time.');
            }
        }, 2000)

        setTimeout(() => {
            isPlayerTurn = true;
            turnMessage('Player Go!');
            updateMessage('Select a cell to attack on the computer board.');
            const allComputerCells = document.querySelectorAll('#computer-board .cell');
            allComputerCells.forEach(cell => cell.addEventListener('click', handleCellClick));
        }, 4000);

    } else { 
        alert('The game is over. Reset the game to play again');
        return;
    }
}

function handleCellClick(e) {
    if (gameActive && isPlayerTurn) {
        const { ship, shipName, alreadyAttacked } = player.playerAttack(e, computerShips);
        if (alreadyAttacked) {
             updateMessage('Cell already attacked, please try again.');
             return;
        }
        console.log(ship);
        if (ship && !ship.sunk) {
            ship.hit();
            e.target.classList.add('hit');
            updateMessage('Computer ship hit!');
            playerAttacks.push(shipName);
            console.log(playerAttacks);
            
            if (ship.isSunk()) {
                updateMessage(`You sunk the computer's ${ship.name}!`);
                playerSunkShips.push(ship.name);
                console.log(playerSunkShips);
                playerAttacks = playerAttacks.filter(attackName => attackName !== shipName);
                console.log(playerAttacks)
            }
            gameActiveCheck('player-board', playerSunkShips);
        } else {
            updateMessage('No ships hit.');
            }
        isPlayerTurn = false;
        const allBoardCells = document.querySelectorAll('#computer-board .cell');
        allBoardCells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        setTimeout(computerTurn, 3000);

    } else {
        alert('The game is over. Reset the game to play again');
        return;
    }
}

function gameActiveCheck(user, userSunkShips) {
    console.log(user);
    console.log(userSunkShips);
    if (user === 'player-board'){
        if (userSunkShips.length === 5) {
        updateMessage('You sunk all the computer ships. YOU WON!');
        turnMessage('');
        gameActive = false;
       }
    }
    if (user === 'computer-board') {
        if (userSunkShips.length === 5) {
            updateMessage(' The computer sunk all your ships. You lost.');
            gameActive = false;
        }
    }
}

function placeComputerShipsRandomly() {  
    playerShips.forEach(ship => computer.board.placeShip('computer-board', ship));
}

function renderBoards() {
    player.board.renderBoard('player-board', false);
    computer.board.renderBoard('computer-board', true);
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
    updateMessage("Please place your ships and click Start.");
    turnMessage('');
}

initGame();
