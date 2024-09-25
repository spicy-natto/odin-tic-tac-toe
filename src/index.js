import * as Util from './util.js';
import * as GameController from './game-controller.js';
import "./styles.css";

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

    // Set event listeners
    setCellListeners(cellArray);
    restartBtn.addEventListener('click', restartGame);

    player1Name.addEventListener('change', (e) => {
        gameController.setPlayerName('player1', e.target.value.toUpperCase());
    });
    player2Name.addEventListener('change', (e) => {
        gameController.setPlayerName('player2', e.target.value.toUpperCase());
    });

    // Render
    render();

    function render() {
        syncBoard(cellArray, gameController.getBoard());
        setPlayerClass(gameController.getActivePlayer().token, statusMsg);
        statusMsg.innerText = 
            createStatusMsg(gameController.getGameStatus());
    }

    function restartGame()  {
        gameController.initialize();
        render();
    }

    function syncBoard(cellArr, boardArr) {
        cellArr.forEach((row, rowInd) => {
            row.forEach((el, colInd) => {
                const cellToken = boardArr[rowInd][colInd];
                el.innerText = cellToken;
                setPlayerClass(cellToken, el);
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
        const playerName = activePlayer.name.toUpperCase();
        let msg;
        switch(status) {
            case 'X':
            case 'O':
                msg = playerName + ' WINS!';
                break;
            case 'TIE':
                msg = 'TIE!';
                break;
            case 'IN PROGRESS':
                    msg = playerName + '\'S TURN!';
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
                        gameController.move(rowInd, colInd);
                        render();
                    }
                })
            })
        });
    }

    function setPlayerClass(token, el) {
        if (token === 'X') {
            el.classList.add('player1');
            el.classList.remove('player2');
        } else {
            el.classList.add('player2');
            el.classList.remove('player1');
        };
    }
})();