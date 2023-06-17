let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convert(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors";
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    result_div.textContent = `${convert(userChoice)} (user) beats ${convert(computerChoice)} (Computer) . You win!`
    userScore = userScore + 1;
    userScore_span.textContent = userScore;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow');}, 1000);
}

function loss(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    result_div.textContent = `${convert(computerChoice)} (Computer) beats ${convert(userChoice)} (User) . You lose!`
    computerScore = computerScore + 1;
    computerScore_span.textContent = computerScore;
    // adds class at the end of a div. With this we can add css with some effect
    userChoice_div.classList.add('red-glow');
    // it ends what was added in 1000ms which is 1s
    setTimeout(function() {userChoice_div.classList.remove('red-glow');}, 1000);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    result_div.textContent = convert(computerChoice) + " draws " + convert(userChoice) + ". It is a draw!"
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() {userChoice_div.classList.remove('gray-glow');}, 1000);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, computerChoice);


            break;
        case "rp":
        case "ps":
        case "sr":
        loss(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function(){
        game("r");
    })
    
    paper_div.addEventListener('click', function(){
        game("p");
    })
    
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();

