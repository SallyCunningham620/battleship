import Ship from './ship.js';

const Gameboard = (size = 10) => {
    const board = Array(size).fill(null).map(() => Array(size).fill(null));
    const ships = [];

    const placeShip = (shipLength, startX, startY, isVertical = false) => {
        const newShip = Ship(shipLength);
        if (isVertical) {
            for (let i = 0; i < shipLength; i++) {
                if (startY + i >=size || board[startX][startY + i] !== null) return false;
                board[startX][startY + i] = { ship: newShip, index: i };
            }
        } else {
            for (let i = 0; i < shipLength; i++) {
                if(startX + i >= size || board[startX + i][startY] !== null) return false;
                board[startX + i][startY] = { ship: newShip, index: i};
            }
        }
    ships.push(newShip);
    return true;
    };

    return {
        placeShip,
        getBoard: () => board,
    }
}

export default Gameboard;