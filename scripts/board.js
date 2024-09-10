import * as R from 'ramda';
import * as Util from './util.js';

function Gameboard(sideLength, playerVals, brd) {
    const emptyVal = '';
    const allowedVals = playerVals.concat(emptyVal);

    const initBoard = () => 
        Util.init2dArray(sideLength, sideLength, () => emptyVal);

    const setCell = (x, y, val) => {
        if (Util.areCoordsValid(board, x, y)) {
            const newBrd = R.clone(board);
            newBrd[x][y] = val;
            return Gameboard(sideLength, playerVals, newBrd);
        }
        return false;
    };

    const isCellEmpty = (x, y, brd) => {
        if (Util.areCoordsValid(brd, x, y)) {
            return brd[x][y] === emptyVal;
        }
    }

    const getBoard = () => R.clone(board);

    const printBoard = () => board.forEach(arr => console.log(...arr));

    // Basic validation but may not contain game logic.
    const isBoardValid = (brd) => {
        return Array.isArray(brd)
        && Util.isSquare(brd)
        && brd.length === sideLength
        && Util.onlyContains(allowedVals, brd);
    };

    // Initialize board
    const board = isBoardValid(brd) ? brd : initBoard();

    return { getBoard, initBoard, setCell, isCellEmpty, printBoard };
}

export { Gameboard };