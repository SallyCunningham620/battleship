import Player from '../src/player.js';
import Gameboard from '../src/gameboard.js';

jest.mock('../src/gameboard.js');

describe('Player Factory Function', () => {

    let enemyBoard;

    beforeEach(() => {
        enemyBoard = {
            receiveAttack: jest.fn()
        };
        Gameboard.mockReturnValue(enemyBoard)
    });

    test.skip('Player object has a name and gameboard instance', () => {
        const player = Player('One', true);
        expect(player.name).toBe('One');
        expect(player.gameboard).toBeDefined();
        expect(player.isComputer).toBe(true);
    });

    test.skip('Create a computer player', () => {
        const computer = Player('Computer', true);

        expect(computer.isComputer).toBe(true);
    });

    test.skip('human player attack enemy board at specific coord.', () => {
        const player = Player('Player1');
        player.attackEnemey(enemyBoard, 2, 3)

        expect(enemyBoard.receiveAttack).toHaveBeenCalledWith(2, 3);
    });

    test.skip('computer player attacks random coord. on enemy board', () => {
        const computer = Player('Computer', true);
        computer.attackEnemey(enemyBoard);

        expect(enemyBoard.receiveAttack).toHaveBeenCalledWith(
            expect.any(Number),
            expect.any(Number)
        );
    });

    test.skip('computer player does not repeat attacks', () => {
        const computer = Player('Computer', true);
        
        for (let i = 0; i < 100; i++) {
            computer.attackEnemey(enemyBoard);
        }

        const attackCoords = computer.getAttackedCoordinates();
        const uniqueCoords = new Set(Array.from(attackCoords));

        expect(uniqueCoords.size).toBe(100);
        expect(enemyBoard.receiveAttack).toHaveBeenCalledTimes(100);
    });
})