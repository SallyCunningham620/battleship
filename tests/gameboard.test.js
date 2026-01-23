import Gameboard from '../src/gameboard.js';
import Ship from '../src/ship.js';

describe('Gameboard', () => {
    let gameboard;

    beforeEach(() => {
        gameboard = Gameboard(10);
    });

    test('should place ship at specific coordinates(horizonatal)', () => {
        gameboard.placeShip(3, 0, 0);
        const board = gameboard.getBoard();
        expect(board[0][0].ship.length).toBe(3);
        expect(board[1][0].ship.length).toBe(3);
        expect(board[2][0].ship.length).toBe(3);
        expect(board[3][0]).toBeNull();
    });
    test('should place ship at specific coordinates(vertical)', () => {
        gameboard.placeShip(2, 0, 0, true);
        const board = gameboard.getBoard();
        expect(board[0][0].ship.length).toBe(2);
        expect(board[0][1].ship.length).toBe(2);
        expect(board[0][2]).toBeNull();
    });

})