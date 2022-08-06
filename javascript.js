function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3 + 1);
    switch (randInt) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function getPlayerChoice() {
    let validChoice = false;
    while (validChoice == false) {
        let choice = prompt("Rock, Paper, or Scissors?");
        let option = choice.toLowerCase();
        switch (choice) {
            case "rock":
                return "Rock";
            case "paper":
                return "Paper";
            case "scissors":
                return "Scissors";
            default:
                alert("Invalid option!")
        }
    }
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        result = "It's a Tie!"
    } else if (playerSelection == "Rock") {
        if (computerSelection=="Paper") {
            result = "You Lose! Paper beats Rock";
        } else {
            result = "You Win! Rock beats Scissors";
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection=="Rock") {
            result = "You Win! Paper beats Rock";
        } else {
            result = "You Lose! Scissors beats Paper";
        }
    } else {
        if (computerSelection=="Rock") {
            result = "You Lose! Rock beats Scissors";
        } else {
            result = "You Win! Scissors beats Paper";
        }
    }

    return result;
}

function game() {
    let numOfRounds = prompt("How many rounds do you want to play?");
    for (let i = 0; i < numOfRounds; i++) {
        let result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);
    }
}

game();