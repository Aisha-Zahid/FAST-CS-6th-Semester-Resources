// variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("score");
// user choice
function getUserChoice(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}
// pc choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// Update scores
function win(userChoice, computerChoice) 
{
    userScore++;
    userScore_span.innerHTML = userScore;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) 
{
    computerScore++;
    userScore_span.innerHTML = userScore;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 300);
}
document.getElementById("rock").addEventListener("click", function() {
    getUserChoice("rock");
});

document.getElementById("paper").addEventListener("click", function() {
    getUserChoice("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
    getUserChoice("scissors");
});
