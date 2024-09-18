import { GameLogic } from '../scripts/game-logic';
import { Gameboard } from '../scripts/board';

let board;
const gameLogic = GameLogic({token: 'X'}, {token: 'O'});

beforeEach(() => {
    board = Gameboard(3);
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
    
    const fullBoard = Gameboard(3, [['X','O','X'],
                                    ['X','X','O'],
                                    ['O','O','X']]);

    expect(gameLogic.isFull(fullBoard)).toBe(true);
});

test('isFull - partial', () => {
    
    const partialBoard = Gameboard(3, [['X','O','X'],
                                       ['X','' ,'O'],
                                       ['O','O','X']]);

    expect(gameLogic.isFull(partialBoard)).toBe(false);
});

test('getGameStatus - O is winner', () => {
    
    const winBoard = Gameboard(3, [['X','O','X'],
                                   ['X','O','O'],
                                   ['O','O','X']]);

    expect(gameLogic.getGameStatus(winBoard)).toBe('O');
});

test('getGameStatus - X is winner', () => {

    const winBoard = Gameboard(3, [['X','O','X'],
                                   ['X','O','O'],
                                   ['X','' ,'X']]);

    expect(gameLogic.getGameStatus(winBoard)).toBe('X');
});

test('getGameStatus - tie', () => {

    const winBoard = Gameboard(3, [['X','O','X'],
                                   ['X','O','O'],
                                   ['O','X','X']]);

    expect(gameLogic.getGameStatus(winBoard)).toBe('TIE');
});

test('getGameStatus - in progress', () => {

    const winBoard = Gameboard(3, [['X','O','X'],
                                   ['X','O','O'],
                                   ['O','' ,'X']]);

    expect(gameLogic.getGameStatus(winBoard)).toBe('IN PROGRESS');
});

test('isValidMove - is valid', () => {

    const board = Gameboard(3, [['X','O','X'],
                                ['X','O','O'],
                                ['O','' ,'X']]);

    expect(gameLogic.isValidMove(2, 1, board)).toBe(true);
});

test('isValidMove - is not valid', () => {

    const board = Gameboard(3, [['X','O','X'],
                                ['X','O','O'],
                                ['O','' ,'X']]);

    expect(gameLogic.isValidMove(1, 1, board)).toBe(false);
});