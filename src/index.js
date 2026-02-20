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
let playerAttacks = [];
let computerAttacks = [];
let playerSunkShips = [];
let computerSunkShips = [];

const destroyer = new Ship('destroyer', 2);
const submarine = new Ship('submarine', 3);
const cruiser = new Ship('cruiser', 3);
const battleship = new Ship('battleship', 4);
const carrier = new Ship('carrier', 5);

let ships = [destroyer, submarine, cruiser, battleship, carrier];

function resetGame() {
    isPlayerTurn = true;
    gameActive = true;
    isVertical = false;
    notDropped = undefined;
    draggedShip = undefined;
    playerAttacks = [];
    computerAttacks = [];
    playerSunkShips = [];
    computerSunkShips = [];
    ships = ['destroyer', 'submarine', 'cruiser', 'battleship', 'carrier'];

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
    const ship = ships[draggedShip.id];
    player.board.hightlightArea(e.target.id, ship, isVertical);
}

function dropShip(e) {
    e.preventDefault();
    if (!draggedShip) return;

    const startId = e.target.id;
    const ship = ships[draggedShip.id];
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

        setTimeout(() => {
            let randomComputerGo = Math.floor(Math.random() * 100)
            const allPlayerCells = document.querySelectorAll('#player-board .cell');
            let cell = allPlayerCells[randomComputerGo];
            console.log(cell);
            if (cell.classList.contains('taken') &&
                cell.classList.contains('hit')
            ) {
                computerTurn();
                return
            } else if (
                cell.classList.contains('taken') &&
                !cell.classList.contains('hit')
            ) {
                let classes = Array.from(cell.classList);
                console.log(classes);
                let shipName = classes.find(c => c !== 'cell' && c !== 'taken' && c !== 'hit');
                console.log(shipName);
                let ship = ships.find(s => s.name === shipName);
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
                        ships = ships.filter(s => !s.sunk);
                        console.log(ships);
                    }
                    gameActiveCheck('computer-board', computerSunkShips);
                    
                }
            } else {console.log('1');
                    updateMessage('Nothing hit this time.');
                    cell.classList.add('miss');
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
        alert('The game is over.');
        return;
    }
}

function handleCellClick(e) {
    if (gameActive && isPlayerTurn) {
        if (e.target.classList.contains('taken') && !e.target.classList.contains('hit')) {
            let shipName = Array.from(e.target.classList).find(ship =>
                ['destroyer', 'submarine', 'cruiser', 'battleship', 'carrier'].includes(ship)
            );
            console.log(shipName);
            // Find the corresponding Ship instance from your computerShips array
            let ship = ships.find(s => s.name === shipName);
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
                    ships = ships.filter(s => !s.sunk);
                    console.log(ships);
                    //console.log(playerAttacks)
                }
                gameActiveCheck('player-board', playerSunkShips);
            }
        } else if (!e.target.classList.contains('taken')) {
            updateMessage('No ships hit.');
            e.target.classList.add('miss');
        }
        isPlayerTurn = false;
        const allBoardCells = document.querySelectorAll('#computer-board .cell');
        allBoardCells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        setTimeout(computerTurn, 3000);

    } else {
        alert(`It's the computers turn.`);
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
 /*   console.log(user);
    console.log(userAttacks);
    console.log(userSunkShips);
    function checkShip(shipName, shipLength) {
        console.log(shipName);
        console.log(shipLength);
        //console.log(shipName);
  /*      if (
            userAttacks.filter(currentShipsName => currentShipsName === shipName).length === shipLength
        ) {
            if (user === 'computer-board') {
                updateMessage(`The computer sunk your ${shipName}`);
                computerAttacks = userAttacks.filter(currentShipName => currentShipName !== shipName)
                console.log(computerAttacks);
                userSunkShips.push(shipName);
                console.log(userSunkShips);
            }
        }
    }
    checkShip('destroyer', 2);
    checkShip('submarine', 3);
    checkShip('cruiser', 3);
    checkShip('battleship', 4);
    checkShip('carrier', 5);
*/

function placeComputerShipsRandomly() {  
    ships.forEach(ship => computer.board.placeShip('computer-board', ship));
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
