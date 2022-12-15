function openPlayerConfig(event) {
    edittedPlayer = +event.target.dataset.playerid //+'1' =>1  plus use to convert string type to integertype
    
    //when we have 2 buttons and them accessing same funtion then to 
    //differntiate between them we use the concept of data attribute
    //with the help of this when any buttton is been clicked we get the 
    //data value attached to that button which can help to differentiate
    //between them we use dataset on the event object to acces that data
    //attached to that button.   
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
  }
  
  function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error')
    errorMsg.textContent=''
    formElement.firstElementChild.lastElementChild.value='';
  }

  function savePlayerConfig(event){
    event.preventDefault();
    const userData=new FormData(event.target)
    //object creation using new keyword 
    //event.target is used to get that html element which caused this function calling 
    //with the help of this formdata object javascript will look for the input field which has the name attribute
    //like in this case input has a name of 'playername'
    const enteredPlayerName= userData.get('playername').trim() //with trim we can remove unneccessary blank spaces  
    console.log(enteredPlayerName)
    //VALIDATION OF INPUT
    if(!enteredPlayerName)
    {
        event.target.firstElementChild.classList.add('error')
        errorMsg.textContent='Enter A Valid Name'
        return;
    }
    const updatedPlayerDatatElement= document.getElementById('player-'+edittedPlayer+'-data')
    updatedPlayerDatatElement.children[1].textContent=enteredPlayerName

    //storing data in javascript within array object
    if(edittedPlayer === 1){
        players[0].name=enteredPlayerName
    }
    else{
        players[1].name=enteredPlayerName
    }
    closePlayerConfig();
  }
 