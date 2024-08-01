const choices=["Rock","Paper","Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay= document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
let playerScore=0;
let computerScore=0;
function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result="";

    if (playerChoice===computerChoice){
        result = "It's a Tie";
    }
    else{
        switch(playerChoice){
            case "Rock":
                result=(computerChoice==="Scissors")?"YOU WIN!!!":"YOU LOSE!!!";
                break;
            case "Scissors":
                result=(computerChoice==="Paper")?"YOU WIN!!!":"YOU LOSE!!!";
                break;
            case "Paper":
                result=(computerChoice==="Rock")?"YOU WIN!!!":"YOU LOSE!!!";
                break;
        }
    }
    

    playerDisplay.textContent=`PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenTEXT","redTEXT");
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenTEXT");
            playerScore ++;
            playerScoreDisplay.textContent=playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redTEXT");
            computerScore ++;

            console.log(computerScore);
            computerScoreDisplay.textContent=computerScore;
            break;
            }
}

