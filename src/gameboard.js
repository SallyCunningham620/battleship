// src/gameboard.js

class Gameboard {
    constructor(user) {
        this.user = user;
        this.board = this.createBoard(user);
        this.ships = [];
    }

    createBoard(user) {
        const gameBoardContainer = document.getElementById(user);
        if (gameBoardContainer) gameBoardContainer.id = user;
        return Array(10).fill(null).map(() => Array(10).fill(null))
    }

    renderBoard(elementId, isEnemyBoard) {
    const boardElement = document.getElementById(elementId);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x = i;
            cell.dataset.y = j;

            const cellId = (i * 10) + j;
            cell.id = cellId;
            boardElement.appendChild(cell);
        }
    }
}

    resetBoard(user) {
        const gameBoardContainer = document.getElementById(user);
        if (gameBoardContainer) gameBoardContainer.id = user;
        this.ships = [];
        return Array(10).fill(null).map(() => Array(10).fill(null))

    }

    getValidity(allBoardCells, isHorizontal, startIndex, ship) {      
        //boundary correction
        let validStart = isHorizontal ? 
        //handle horizontal, shifts the start position to the left 
        (startIndex <= 100 - ship.length ? startIndex : 100 - ship.length) :
        //handle vertical, shifts the start position upward
        (startIndex <= 100 - 10 * ship.length ? startIndex : startIndex - ship.length * 10 + 10);

        let shipCells = [];

        for (let i = 0; i < ship.length; i++) {
            //identify cells
            if (isHorizontal) {
                //adds 1 to the index to move across a row
                shipCells.push(allBoardCells[Number(validStart) + i]);
            } else {
                //adds 10 to the index to move down a column
                shipCells.push(allBoardCells[Number(validStart) + i * 10])
            }
        }

        //edge wrapping protection
        let valid;
        //horizontal
        if (isHorizontal) {
            //ship stays within the same row, stopping it from wrapping around to the next line
            shipCells.every((_shipCell, index) =>
            valid = shipCells[0].id % 10 !== 10 - (shipCells.length - (index + 1)))
        } else {
            //starting ID allows the vertical ship to exist without going beyond the 100
            shipCells.every((_shipCell, index) => 
            valid = shipCells[0].id < 90 + (10 * index + 1)
            )
        }
        //ensures that all targeted cells are free
        let notTaken = shipCells.every(shipCell => !shipCell.classList.contains('taken'));
        
        return {shipCells, valid, notTaken};
    }


    placeShip(user, ship, startId, isVertical) {
        //select user cells
        const allBoardCells = document.querySelectorAll(`#${user} .cell`);
        let randomBoolean = Math.random() < 0.5;
        let isHorizontal = user === 'player-board' ? !isVertical : randomBoolean;
        let randomStartIndex = Math.floor(Math.random() * 100); 
        
        let startIndex = startId ? startId : randomStartIndex;  

        const {shipCells, valid, notTaken } = this.getValidity(allBoardCells, isHorizontal, startIndex, ship);

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
      

    hoverArea(startIndex, ship, isVerticalInput) {
        //select all player cells
        const allBoardCells = document.querySelectorAll('#player-board .cell');
        let isHorizontal = !isVerticalInput;

        const { shipCells, valid, notTaken } = this.getValidity(allBoardCells, isHorizontal, startIndex, ship);

        if (valid && notTaken) {
            shipCells.forEach(shipCell => {
                shipCell.classList.add('hover');
                setTimeout(() => shipCell.classList.remove('hover'), 500);
            })
        }
    }
}

export default Gameboard;
