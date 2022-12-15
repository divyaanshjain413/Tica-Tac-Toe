let gameData=[
    [0 , 0 , 0],
    [0 , 0 , 0],
    [0 , 0 , 0],
]
let edittedPlayer=0;
let activePlayer = 0;
let curentRound=1;
let gameIsOver=false;

const players = [
    {
        name:'',
        symbol: 'X'
    },
    {
        name:'',
        symbol: 'O'
    },
]

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement=document.querySelector('form')
const errorMsg=document.getElementById('errorMsg')
const activeGame= document.getElementById('active-game')
const playerTurn = document.getElementById('active-player-name')
const gameOverElement= document.getElementById('game-over')


const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameButton = document.getElementById('start-game')
const gameFieldElements=document.querySelectorAll('#game-board li'); //querySelectorAll(#id then html tag)
const gameBoardElement=document.getElementById('game-board')


startNewGameButton.addEventListener('click',startNewGame)
editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig)

//GAMEFIELDELEMENT WILL PASS ANA RRAY OF LI ELEMENT SO WE HAVE APPROCHES TO HANDLE THIS
// ONE IS USING FOR...OF LOOP AND OTHER IS NORMAL FOR.. LOOP
// for (const gameElement of gameFieldElements){  ..........(FOR...OF)
//     gameElement.addEventListener('click',selectGameField)
// }
for (let i=0;i<gameFieldElements.length;i++){
    gameFieldElements[i].addEventListener('click',selectGameField)
}
