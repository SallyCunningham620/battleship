import Gameboard from '../src/gameboard.js';
import Ship from '../src/ship.js';

describe('Gameboard', () => {
    let gameboard;

    beforeEach(() => {
        gameboard = Gameboard();
    });

    test('should place ship at specific coordinates(horizonatal)', () => {
        gameboard.placeShip(3, 0, 0);
        const board = gameboard.getBoard();
        expect(board[0][0].length).toBe(3);
        expect(board[3][0]).toBeNull();
    });
    test('should place ship at specific coordinates(vertical)', () => {
        gameboard.placeShip(2, 0, 2, true);
        const board = gameboard.getBoard();
        expect(board[0][2].length).toBe(2);
        expect(board[0][3]).toBeNull();
    });
    test('should record a missed attack', () => {
        gameboard.receiveAttack(0, 0);
        expect(gameboard.getMissedAttacks()).toEqual([{ x: 0, y: 0 }]);
        expect(gameboard.getBoard()[0][0]).toBe('miss');
    });
    test('should send a hit to specified ship', () => {
        const ship = Ship(2);
        gameboard.placeShip(ship.length, 0, 0);
        gameboard.receiveAttack(0, 0);
        const board = gameboard.getBoard();
        expect(board[0][0].getHits()).toBe(1);
    });
    test('should report when all ships are sunk', () => {
        gameboard.placeShip(1, 0, 0); 
        gameboard.receiveAttack(0, 0);
        expect(gameboard.allShipsSunk()).toBe(true);
    });
    test('should report false if all ships are sunk', () => {
        gameboard.placeShip(1, 0, 0);
        gameboard.placeShip(2, 5, 5);
        gameboard.receiveAttack(0, 0);
        expect(gameboard.allShipsSunk()).toBe(false);
    });
})