import * as Util from './util.js';

function GameLogic(player1, player2) {

   const playerVals = [player1.token, player2.token];

    function isWinner(player, brd) {
        const arrBoard = brd.getBoard();
        const horizontalRows = Util.rotateLeft(arrBoard);
        const diagonals = Util.getDiagonals(arrBoard);
        const allWinPaths = [arrBoard, horizontalRows, diagonals].flat();
    
        return allWinPaths.some(arr => Util.onlyContains([player.token], arr));
    };

    function isFull(brd) {
        return Util.onlyContains(playerVals, brd.getBoard());
    };

    function getGameStatus(brd) {
        if (isWinner(player1, brd)) {
            return player1.token;
        } else if (isWinner(player2, brd)) {
            return player2.token;
        } else if (isFull(brd)) {
            return 'TIE'
        } else {
            return 'IN PROGRESS'
        }
    };

    function isValidMove(x, y, brd) {
        return getGameStatus(brd) === 'IN PROGRESS'
            && brd.isCellEmpty(x, y);
    }

    return { isWinner, isFull, getGameStatus, isValidMove };
}


export { GameLogic };
