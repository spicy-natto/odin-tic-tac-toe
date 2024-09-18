import * as R from 'ramda';
import * as Util from './util.js';

function Gameboard(sideLength, brd) {

    // Initialize board
    const emptyVal = '';
    const board = brd ? brd : initBoard();

    function initBoard() {
        return Util.init2dArray(sideLength, sideLength, () => emptyVal);
    }

    function setCell(x, y, val) {
        if (Util.areCoordsValid(board, x, y)) {
            const newBrd = R.clone(board);
            newBrd[x][y] = val;
            return Gameboard(sideLength, newBrd);
        }
        return false;
    }

    function isCellEmpty(x, y) {
        if (Util.areCoordsValid(board, x, y)) {
            return board[x][y] === emptyVal;
        }
        return false;
    }

    function getCell(x, y) {
        if (Util.areCoordsValid(board, x, y)) {
            return board[x][y];
        }
    }

    function getBoard() {
        return R.clone(board);
    } 

    return { getBoard, setCell, isCellEmpty, getCell };
}

export { Gameboard };