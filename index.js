

function rockPaperScissors(arg){
    let playerWins = 0;
    let computerWins = 0;
    let returnMsg = '';
    let response = '';
    

    if (arg ==='rock' || arg === 'paper' || arg ==='scissors'){   
        const responses = ['rock', 'paper','scissors']
        let random = Math.floor(Math.random()*3)
        let response = responses[random]
        if (arg == 'rock' && response == 'paper'){returnMsg ='Paper 💌 beats rock 🪨. I win!'; computerWins++;}
        else if (arg == 'rock' && response == 'scissor'){returnMsg = 'Rock 🪨 beats scissors ✂️. You win!'; playerWins++;}
        else if (arg == 'paper' && response == 'rock'){returnMsg = 'Paper 💌 beats rock 🪨. You win!'; playerWins++;}
        else if (arg == 'paper' && response == 'scissors'){returnMsg = 'Scissors ✂️ beats paper 💌. I win!'; computerWins++;}
        else if (arg == 'scissors' && response == 'paper'){returnMsg ='Scissors ✂️ beats paper 💌. You win!'; playerWins++;}
        else if (arg == 'scissors' && response == 'rock'){returnMsg = 'Rock 🪨 beats scissors ✂️. I win!'; computerWins++;}
        else {returnMsg = 'It is a Tie!';}
        
    } else {
        console.log('that is not a valid input')
    } return [playerWins, computerWins, returnMsg, response]
    
}
let playerTotalWins = 0;
let computerTotalWins = 0;
let computerMsg = '';
let arg = '';
console.log(playerTotalWins)
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const playerScoreBoard = document.querySelector("#player-wins");
const computerScoreBoard = document.querySelector("#computer-wins");
const roundResponse = document.querySelector("#round-response");
const allButtons = document.querySelector("img")


rockButton.addEventListener("click", function(){
        arg = 'rock';
        let [playerWins, computerWins, returnMsg, response] = rockPaperScissors(arg);
        playerTotalWins += playerWins;
        computerTotalWins += computerWins;
        computerMsg = returnMsg;
        updateScoreboard();
        returnMsgs();
        checkForWinner();
        disableButtons();
    })
rockButton.addEventListener("mouseover", function(){
    rockButton.setAttribute("style", "box-shadow: 5px 5px 5px linen; border-radius: 8px")
})
rockButton.addEventListener("mouseout", function(){
    rockButton.setAttribute("style", "")
})
paperButton.addEventListener("click", function(){
        arg = 'paper'
        let [playerWins, computerWins, returnMsg, response] = rockPaperScissors(arg);
        playerTotalWins += playerWins;
        computerTotalWins += computerWins;
        computerMsg = returnMsg;
        updateScoreboard();
        returnMsgs();
        checkForWinner();
    })
paperButton.addEventListener("mouseover", function(){
        paperButton.setAttribute("style", "box-shadow: 5px 5px 5px linen; border-radius: 8px")
    })
paperButton.addEventListener("mouseout", function(){
        paperButton.setAttribute("style", "")
    })

scissorsButton.addEventListener("click", function(){
        arg = 'scissors'
        let [playerWins, computerWins, returnMsg, response] = rockPaperScissors(arg);
        playerTotalWins += playerWins;
        computerTotalWins += computerWins;
        computerMsg = returnMsg;
        updateScoreboard();
        returnMsgs();
        checkForWinner();
    })
scissorsButton.addEventListener("mouseover", function(){
        scissorsButton.setAttribute("style", "box-shadow: 5px 5px 5px linen; border-radius: 8px")
    })
scissorsButton.addEventListener("mouseout", function(){
        scissorsButton.setAttribute("style", "")
    })
function updateScoreboard(){
    playerScoreBoard.textContent = playerTotalWins;
    computerScoreBoard.textContent = computerTotalWins;
}
function returnMsgs(){
    roundResponse.textContent = computerMsg;
}
function checkForWinner(){
    if (playerTotalWins === 5){
        roundResponse.textContent="You're the game winner!";
        playerTotalWins = 0;
        computerTotalWins= 0;
        playerScoreBoard.textContent = 0;
        computerScoreBoard.textContent = 0;
        disableButtons();
    } else if (computerTotalWins === 5){
        roundResponse.textContent="I'm the winner. Better luck next time!";
        playerTotalWins = 0;
        computerTotalWins= 0;
        playerScoreBoard.textContent = 0;
        computerScoreBoard.textContent = 0;
        disableButtons();
    }
}    
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}