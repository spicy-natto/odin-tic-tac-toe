import * as R from 'ramda';
import * as Util from './util.js';

function Gameboard(sideLength, playerVals) {
    const emptyVal = '';
    const allowedVals = playerVals.concat(emptyVal);

    const initBoard = () => 
        Util.init2dArray(sideLength, sideLength, () => emptyVal);
    let board = initBoard();

    const save = (brd) => {
        if (isBoardValid(brd)) {
            board = brd;
            return R.clone(board);
        }
        return false;
    };

    const setCell = (x, y, val) => brd => {
        if (Util.areCoordsValid(x, y, brd)) {
            const newBrd = R.clone(brd);
            newBrd[x][y] = val;
            return newBrd;
        }
        return false;
    };

    const isCellEmpty = (x, y, brd) => {
        if (Util.areCoordsValid(x, y, brd)) {
            return brd[x][y] === emptyVal;
        }
    }

    const getBoard = () => R.clone(board);

    const printBoard = () => board.forEach(arr => console.log(...arr));

    // Basic validation but may not contain game logic.
    const isBoardValid = (brd) => {
        return Array.isArray(brd)
        && Util.isSquareOfLen(sideLength, brd)
        && Util.onlyContainsVals2d(allowedVals, brd);
    };

    return { save, getBoard, initBoard, setCell, isCellEmpty, printBoard };
}

export { Gameboard };