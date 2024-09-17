import * as R from 'ramda';
import * as GameLogic from './game-logic';
import * as Board from './board';

function GameController() {
    const players = {
        player1: {token: 'X', name: ''},
        player2: {token: 'O', name: ''}
    }
    let activePlayer;
    let gameStatus;
    let board;
    const gameLogic = GameLogic.GameLogic(players.player1, players.player2);

    initialize();

    function getActivePlayer() {
        return R.clone(activePlayer);
    }

    function switchActivePlayer() {
        activePlayer = 
            activePlayer.token === players.player1.token 
            ? players.player2
            : players.player1;
    }

    function getPlayers() {
        return R.clone(players);
    }
    
    function getBoard() {
        return board.getBoard();
    }

    function printBoard() {
        return board.printBoard();
    }
    
    function getGameStatus() {
        return gameStatus;
    }

    function initialize() {
        activePlayer = players.player1;
        gameStatus = 'IN PROGRESS';
        board = Board.Gameboard(3);
    }

    function move(x, y) {
        const token = activePlayer.token;
        if (gameLogic.isValidMove(x, y, board)) {
            board = board.setCell(x, y, token);
            if (board) {
                gameStatus = gameLogic.getGameStatus(board);
                switchActivePlayer();
            }
        }
    }

    return { getActivePlayer, getBoard, printBoard, initialize, getGameStatus, getPlayers, move };
}

export { GameController };