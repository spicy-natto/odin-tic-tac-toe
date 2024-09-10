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

    expect(gameLogic.isWinner({token: 'X'}, newBoard)).toBe(true);
});

test('isWinner - X is not winner', () => {
    
    const newBoard = board.setCell(0,0,'X')
                        .setCell(1,1,'X')
                        .setCell(2,2,'O');

    expect(gameLogic.isWinner({token: 'X'}, newBoard)).toBe(false);
});

test('isFull - full', () => {
    
    const fullBoard = Gameboard(3, ['X', 'O'], [['X','O','X'],
                                                ['X','X','O'],
                                                ['O','O','X']]);

    expect(gameLogic.isFull(['X','O'], fullBoard)).toBe(true);
});

test('isFull - partial', () => {
    
    const partialBoard = Gameboard(3, ['X', 'O'], [['X','O','X'],
                                                   ['X','' ,'O'],
                                                   ['O','O','X']]);

    expect(gameLogic.isFull(['X','O'], partialBoard)).toBe(false);
});