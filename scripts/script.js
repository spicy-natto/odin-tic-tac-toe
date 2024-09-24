import * as Util from './util.js';
import * as GameController from './game-controller.js';

const domController = (function() {

    // Cache DOM
    const gameBoardDiv = document.querySelector('.game-board');
    const statusMsg = document.querySelector('.game-status');
    const restartBtn = document.querySelector('.restart-button');
    const player1Name = document.querySelector('#player1-name');
    const player2Name = document.querySelector('#player2-name');

    const cellArray = generateCellArr(3);
    setDomGameBoard(gameBoardDiv, cellArray);

    // Initialize game controller
    const gameController = GameController.GameController();
    setPlayerClass(gameController, statusMsg);
    statusMsg.innerText = 
    createStatusMsg(gameController.getGameStatus());

    // Set event listeners
    setCellListeners(cellArray);
    restartBtn.addEventListener('click', restartGame);

    player1Name.addEventListener('change', (e) => {
        console.log(e.target);
        gameController.setPlayerName('player1', e.target.value.toUpperCase());
    });
    player2Name.addEventListener('change', (e) => {
        gameController.setPlayerName('player2', e.target.value.toUpperCase());
    });

    function restartGame()  {
        gameController.initialize();
        syncBoard(cellArray, gameController.getBoard());
        statusMsg.innerText = 
            createStatusMsg(gameController.getGameStatus());
        setPlayerClass(gameController, statusMsg);
    }

    function syncBoard(cellArr, boardArr) {
        cellArr.forEach((row, rowInd) => {
            row.forEach((el, colInd) => {
                el.innerText = boardArr[rowInd][colInd];
            })
        });
    }

    function generateCellArr(sideLength) {
        return Util.init2dArray(sideLength, sideLength, createCell);
    }

    function createCell() {
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.classList.add('gameCell');
        return button;
    }

    function setDomGameBoard(div, cellArr) {
        div.replaceChildren(...cellArr.flat());
    }

    // todo make more flexible based on player 1 / player 2 info
    function createStatusMsg(status) {
        const activePlayer = gameController.getActivePlayer();
        let msg;
        switch(status) {
            case 'X':
                msg = 'PLAYER 1 WINS!';
                break;
            case 'O':
                msg = 'PLAYER 2 WINS!';
                break;
            case 'TIE':
                msg = 'TIE!';
                break;
            case 'IN PROGRESS':
                if(activePlayer.token === 'X') {
                    msg = activePlayer.name.toUpperCase() + '\'S TURN!';
                } else {
                    msg = activePlayer.name.toUpperCase() + '\'S TURN!';
                }
                break;
            default:
                msg = 'Error';
        }

        return msg;
    }

    // Todo - figure out consistent x / y notation
    function setCellListeners(cellArr) {
        cellArr.forEach((row, rowInd) => {
            row.forEach((el, colInd) => {
                el.addEventListener("click", () => {
                    const gameStatus = gameController.getGameStatus();
                    if (gameStatus === 'IN PROGRESS') {
                        setPlayerClass(gameController, el);
                        gameController.move(rowInd, colInd);
                        el.innerText = gameController.getCell(rowInd, colInd);
                        statusMsg.innerText = 
                            createStatusMsg(gameController.getGameStatus());
                        setPlayerClass(gameController, statusMsg);
                    }
                })
            })
        });
    }

    function setPlayerClass(gameController, el) {
        const token = gameController.getActivePlayer().token;
        console.log(token);
        console.log(el);
        if (token === 'X') {
            el.classList.add('player1');
            el.classList.remove('player2');
        } else {
            el.classList.add('player2');
            el.classList.remove('player1');
        };
    }
})();