import * as GameLogic from '../scripts/game-logic';
import * as Board from '../scripts/board';
import * as R from 'ramda';

test('isWinner - X wins', () => {
    const board = Board.Gameboard(3, ['X', 'O']);
    R.pipe(
        board.setCell(0,0,'X'),
        board.setCell(1,1,'X'),
        board.setCell(2,2,'X'),
        board.save
    )(board.getBoard());

    expect(GameLogic.isWinner({token: 'X'}, board.getBoard())).toBe(true);
});

test('isWinner - X is not winner', () => {
    const board = Board.Gameboard(3, ['X', 'O']);
    R.pipe(
        board.setCell(0,0,'X'),
        board.setCell(1,1,'X'),
        board.setCell(2,2,'O'),
        board.save
    )(board.getBoard());

    expect(GameLogic.isWinner({token: 'X'}, board.getBoard())).toBe(false);
});