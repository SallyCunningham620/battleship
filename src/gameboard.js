import Ship from '../src/ship.js';

const Gameboard = () => {
    const board = Array(10).fill(null).map(() => Array(10).fill(null));
    const missedAttacks = [];
    const ships = [];

    const isValidCoordinate = (x, y) =>  x >= 0 && x < 10 && y >= 0 && y < 10;

    const placeShip = (shipLength, startX, startY, isVertical = false) => {
        //check if valid
        for (let i = 0; i < shipLength; i++) {
            const x = isVertical ? startX + i : startX;
            const y = isVertical ? startY : startY + i;

            if (!isValidCoordinate(x, y) || board[x][y] !== null){
                return false; //Invalid placement
            }
        } 
        const newShip = Ship(shipLength);
        ships.push(newShip);
        //console.log(ships);
        //place ship on board
        for (let i = 0; i < shipLength; i++) {
            const x = isVertical ? startX + i : startX;
            const y = isVertical ? startY : startY + i;
            board[x][y] = newShip;
        }
    return true;
    };

    const receiveAttack = (x, y) => {
        if (!isValidCoordinate(x, y)) return "Invalid coordinate";

        const target = board[x][y];

        const alreadyMissed = missedAttacks.some(m => m[0] === x && m[1] === y);
        const isHit = target !== null && target !== 'miss' && target.getHits() > 0;
        if (alreadyMissed || isHit) return 'Already atacked';

        if (target === null) {
            board[x][y] = 'miss';
            missedAttacks.push({x, y});
            return "Miss"; // Miss
        } else {
            target.hit();
            return "Hit"; // Hit
        }
    };

    const allShipsSunk = () => {
        return ships.length > 0 && ships.every(ship => ship.isSunk());
    };

    return {
        placeShip,
        receiveAttack,
        allShipsSunk,
        board,
        getBoard: () => board,
        getMissedAttacks: () => missedAttacks,
    };
};

export default Gameboard;