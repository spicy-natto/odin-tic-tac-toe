import { all, empty } from 'ramda';
import * as Util from './util.js';

function GameLogic() {

   const playerVals = ['X', 'O'];
   const emptyVal = '';
   const allowedVals = playerVals.concat(emptyVal);

    function isWinner({ token }, brd) {
        const arrBoard = brd.getBoard();
        const horizontalRows = Util.rotateLeft(arrBoard);
        const diagonals = Util.getDiagonals(arrBoard);
        const allWinPaths = [arrBoard, horizontalRows, diagonals].flat();
    
        return allWinPaths.some(arr => Util.onlyContains([token], arr));
    };

    function isFull(playerVals, brd) {
         return Util.onlyContains(playerVals, brd.getBoard());
    };

    return { isWinner, isFull, isBoardValid };
}


export { GameLogic };
