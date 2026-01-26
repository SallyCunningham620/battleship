import Player from '../src/player.js';

test('Player object has a gameboard instance', () => {
    const player = Player('Main');
    expect(player.gameboard).toBeDefined();
    expect(player.gameboard.board.length).toBeGreaterThan(0);
});

test.skip('Computer player makes a random, valid move', () => {
    const player = Player('Computer');
    //board to attack
    const targetBoard = player.gameboard;
    const initialMissCount = targetBoard.getMissedAttacks.length;

    player.attackEnemey([0, 0], targetBoard);

    expect(targetBoard.board[0][0]).not.toBeNull();
});