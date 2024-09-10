import { GameLogic } from '../scripts/game-logic';
import { Gameboard } from '../scripts/board';
import * as R from 'ramda';

let board;
const gameLogic = GameLogic();

beforeEach(() => {
    board = Gameboard(3, ['X', 'O']);
});

test('isWinner - X wins', () => {
    
    const newBoard = board.setCell(0,0,'X')
                        .setCell(1,1,'X')
                        .setCell(2,2,'X');

    expect(gameLogic.isWinner({token: 'X'}, newBoard.getBoard())).toBe(true);
});

test('isWinner - X is not winner', () => {
    
    const newBoard = board.setCell(0,0,'X')
                        .setCell(1,1,'X')
                        .setCell(2,2,'O');

    expect(gameLogic.isWinner({token: 'X'}, newBoard.getBoard())).toBe(false);
});

