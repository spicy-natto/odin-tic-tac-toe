import { clone } from '../node_modules/ramda/es/index.js';
import * as GameLogic from './game-logic.js';
import * as Board from './board.js';

function GameController() {
    const players = {
        player1: {token: 'X', name: 'Player 1'},
        player2: {token: 'O', name: 'Player 2'}
    }
    let activePlayer;
    let gameStatus;
    let board;
    const gameLogic = GameLogic.GameLogic(players.player1, players.player2);

    initialize();

    function getActivePlayer() {
        return clone(activePlayer);
    }

    function switchActivePlayer() {
        activePlayer = 
            activePlayer.token === players.player1.token 
            ? players.player2
            : players.player1;
    }

    function getPlayers() {
        return clone(players);
    }
    
    function setPlayerName(playerKey, name) {
        if (playerKey in players) {
            players[playerKey].name = name;
        }
    }

    //todo - maybe update getBoard to actually
    // provide board object?
    function getBoard() {
        return board.getBoard();
    }

    function getCell(row, col) {
        return board.getCell(row, col);
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
                if(gameStatus === 'IN PROGRESS')
                    switchActivePlayer();
            }
        }
    }

    return { getActivePlayer, getBoard, getCell, printBoard, 
            initialize, getGameStatus, getPlayers, move, setPlayerName};
}

export { GameController };