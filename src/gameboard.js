// src/gameboard.js
import Ship from './ship.js';

class Gameboard {
    constructor(user) {
        this.user = user;
        this.board = this.createBoard(user);
        this.ships = [];
        this.missedAttacks = [];
    }

    createBoard(user) {
        const gameBoardContainer = document.getElementById(user);
        if (gameBoardContainer) gameBoardContainer.id = user;
        return Array(10).fill(null).map(() => Array(10).fill(null))
    }

    getValidity(allBoardBlocks, isHorizontal, startIndex, ship) {
        //not over 100        
        let validStart = isHorizontal ? 
        //handle horizontal
        (startIndex <= 100 - ship.length ? startIndex : 100 - ship.length) :
        //handle vertical
        (startIndex <= 100 - 10 * ship.length ? startIndex : startIndex - ship.length * 10 + 10);

        let shipCells = [];

        for (let i = 0; i < ship.length; i++) {
            if (isHorizontal) {
                shipCells.push(allBoardBlocks[Number(validStart) + i]);
            } else {
                shipCells.push(allBoardBlocks[Number(validStart) + i * 10])
            }
        }

        let valid;
        //horizontal
        if (isHorizontal) {
            shipCells.every((_shipCell, index) =>
            valid = shipCells[0].id % 10 !== 10 - (shipCells.length - (index + 1)))
        } else {
            //vertical
            shipCells.every((_shipCell, index) => 
            valid = shipCells[0].id < 90 + (10 * index + 1)
            )
        }
        let notTaken = shipCells.every(shipCell => !shipCell.classList.contains('taken'));
        
        return {shipCells, valid, notTaken};
    }


    placeShip(user, ship, startId, isVertical) {
        const allBoardBlocks = document.querySelectorAll(`#${user} .cell`);
        let randomBoolean = Math.random() < 0.5;
        let isHorizontal = user === 'player-board' ? !isVertical : randomBoolean;
        let randomStartIndex = Math.floor(Math.random() * 100); 
        
        let startIndex = startId ? startId : randomStartIndex;  

        const {shipCells, valid, notTaken } = this.getValidity(allBoardBlocks, isHorizontal, startIndex, ship);

        if (valid && notTaken) {
            shipCells.forEach(shipCell => {
                shipCell.classList.add(ship.name);
                shipCell.classList.add('taken');
            })
        } else {
        if (user === 'computer-board') this.placeShip(user, ship, startId);
        if (user === 'player') notDropped = true;
    }
}
      

    hightlightArea(startIndex, ship, isVerticalInput) {
        const allBoardBlocks = document.querySelectorAll('#player-board .cell');
        let isHorizontal = !isVerticalInput;

        const { shipCells, valid, notTaken } = this.getValidity(allBoardBlocks, isHorizontal, startIndex, ship);

        if (valid && notTaken) {
            shipCells.forEach(shipCell => {
                shipCell.classList.add('hover');
                setTimeout(() => shipCell.classList.remove('hover'), 500);
            })
        }
    }
    
    receiveAttack(x, y) {
        const cell = this.board[x][y];
        console.log(this.board);
        console.log(cell);
        if (cell === null) {
            if (!this.missedAttacks.some(m => m[0] === x && m[1] === y)) {
                this.missedAttacks.push([x, y]);
            }
            return 'miss';
        } else if (cell.ship && !cell.hit) {
            cell.ship.hit();
            cell.hit = true;
            return 'hit';
        }
        return 'Already hit, please retry.';
    }

    allShipsSunk(user) {
        return user.ships.every(ship => ship.isSunk());
    }
}

export default Gameboard;
