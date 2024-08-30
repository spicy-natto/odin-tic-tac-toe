import { Gameboard } from '../scripts/board';

test('Initialize board', () => {
    const board = Gameboard(3, ['X', 'O']);
    expect(board.getBoard()).toEqual([['','',''],
                                      ['','',''],
                                      ['','','']]);
});


test('Save board - output', () => {
    const gameBoard = Gameboard(3, ['X', 'O']);
    const saveBoard = gameBoard.setCell(1, 2, 'X')(gameBoard.getBoard());
    expect(gameBoard.save(saveBoard)).toEqual([['','',''],
                                               ['','','X'],
                                               ['','','']]);
});

test('Save board - getBoard() - whether saved to object', () => {
    const gameBoard = Gameboard(3, ['X', 'O']);
    const saveBoard = gameBoard.setCell(1, 2, 'X')(gameBoard.getBoard());
    gameBoard.save(saveBoard);
    expect(gameBoard.getBoard()).toEqual([['','',''],
                                          ['','','X'],
                                          ['','','']]);
});

test('isCellEmpty - cell is empty', () => {
    const gameBoard = Gameboard(3, ['X', 'O']);
    expect(gameBoard.isCellEmpty(1, 1, gameBoard.getBoard())).toBe(true);
});