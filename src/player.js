import Gameboard from "./gameboard";

const Player = (name, isComputer = false) => {
    const gameboard = Gameboard();
    const attackCoordinates = new Set();

    const randomCoordinate = () => {
        return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    }

    const attackEnemey = (enemyGameboard, x, y) => {
        if(isComputer) {
            let coords = randomCoordinate();
            while (attackCoordinates.has(JSON.stringify(coords))) {
                coords = randomCoordinate();
            }
            x = coords[0];
            y = coords[1];
            attackCoordinates.add(JSON.stringify(coords));
        }
        return enemyGameboard.receiveAttack(x, y);
    }
    return { name, gameboard, isComputer, attackEnemey, getAttackedCoordinates: () => attackCoordinates };
};

export default Player;