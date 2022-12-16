function reset(){
    activePlayer=0;
    gameIsOver=false
    curentRound=1;
    gameOverElement.firstElementChild.innerHTML='You won, <span id="winner-name">PLAYER NAME</span>!'
    gameOverElement.style.display='none'
    let gameboardIndex=0
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            gameData[i][j]=0;
            const gameboardItem=gameBoardElement.children[gameboardIndex]
            gameboardItem.textContent=''
            gameboardItem.classList.remove('disabled')
            gameboardIndex++;

        }
    }
}
function startNewGame(){
    
    if(players[0].name ===''||players[1].name ===''){
        alert('Please Enter Player Name');
        return;
    }
    reset();
    activeGame.style.display='block'
    playerTurn.textContent=players[activePlayer].name;
}

function checkWinner(){
    //Row EQUALITY 
    for(let i=0;i<3;i++)
    {  
          if(gameData[i][0]>0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]){
            console.log(gameData[i][1])
            return gameData[i][0];
          }
    }
    //COLUMN EQUALITY
    for(let i=0;i<3;i++)
    {  
          if(gameData[0][i]>0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i]){
            console.log(gameData[1][i])
            return gameData[1][i];}
    }
    //DIAGONAL CHECK : top-left to bottom-right 
    if(gameData[0][0]>0 && gameData[0][0] === gameData[1][1] &&gameData[2][2] === gameData[1][1]){
        return gameData[0][0];
    }
    if(gameData[0][2]>0 && gameData[0][2] === gameData[1][1] &&gameData[2][0] === gameData[1][1]){
        return gameData[0][0];

    }
    if(curentRound===9){
        return -1;
    }
    return 0;
}

function switchPlayer(){
    if(activePlayer === 1)
    activePlayer=0;
    else
    activePlayer=1
    playerTurn.textContent=players[activePlayer].name;
}

function selectGameField(event){
    if(gameIsOver){
        return;
    }

    let selectedRow=event.target.dataset.row-1
    let selectedCol=event.target.dataset.col-1
    if (gameData[event.target.dataset.row-1][event.target.dataset.col-1] > 0){
        alert('Please Select An empty Field !!')
        return;
    }
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add('disabled') //css class defined in game.css to make the cursor default and to remove the hover effect from the selected tiles.
    gameData[selectedRow][selectedCol]=activePlayer+1


    const winerid = checkWinner();
    if(winerid !== 0){
        endGame(winerid)
    }
    console.log(winerid);
    curentRound++;
    switchPlayer();

}

function endGame(winerId){
    gameIsOver=true
    gameOverElement.style.display='block'

    if(winerId>0){
        const winnerName=players[winerId-1].name
    gameOverElement.firstElementChild.firstElementChild.textContent=winnerName
    }
    else{
        gameOverElement.firstElementChild.textContent ='It\'s a Draw guyz'
    }
}
