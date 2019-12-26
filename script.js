var player_move;
var player_score = 0;

var computer_move;
var computer_score = 0;

const computerScoreDisplay = document.querySelector("#computer-score-display");
const playerScoreDisplay = document.querySelector("#player-score-display");
const resultDisplay = document.querySelector("#result");

const selections = document.querySelectorAll(".select");


const values = {
    0: "rock",
    1: "paper",
    2: "scissors"
}

const precedence = {
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
}

function random(n) { return Math.floor(Math.random() * 3); }

function choiceComputer() {
    return values[random(2)];
}

function check_win(player_move, computer_move) {
    playerScoreDisplay.textContent = "Player chose: " + player_move;
    computerScoreDisplay.textContent = "Computer chose: " + computer_move;

    if (player_move == computer_move) {
        console.log("It's a draw!");
        return;
    } else if (precedence[player_move] == computer_move) {
        console.log("Player wins!");
        return "player";
    } else {
        console.log("Computer wins!");
        return "computer";
    }
}

selections.forEach(
    (button) => {
        button.addEventListener(
            "click", game(button.getAttribute("id"))
        )
    }
)

function game(player_move) {
    let winner = "";

    winner = check_win(player_move, choiceComputer());

    if (winner == "player") { 
        player_score++;
    }
    else if(winner == "computer") { 
        computer_score++; 
    }


    console.log("== Game finished ==");
    console.log("Player scored " + player_score.toString() + " points");
    console.log("Computer scored " + computer_score.toString() + " points");

    if (player_score > computer_score) {
        window.alert("Player won the game!");
    } else if (computer_score > player_score) {
        window.alert("Computer won the game!");
    } else {
        window.alert("The game is a draw!");
    }
}   