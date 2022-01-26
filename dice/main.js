// Facce dei dadi
const diceOne = ['five'];
const diceTwo = ['one' , 'nine'];
const diceThree = ['three' , 'five' , 'seven'];
const diceFour = ['one' , 'three' , 'seven' , 'nine'];
const diceFive = ['one' , 'three' , 'five' , 'seven' , 'nine'];
const diceSix = ['one' , 'three' , 'four' , 'six' , 'seven' , 'nine'];


let start = document.getElementById("start");
let user = document.getElementById("userResult");
let computer = document.getElementById("computerResult");
let userResult = document.getElementById("userScore");
let computerResult = document.getElementById("computerScore");

let winLose = document.getElementById("winlose");

let userScore = 0;
let computerScore = 0;


start.addEventListener('click',
    
    function() {

        let randomUserNumber = Math.floor(Math.random() * 6 + 1);
        user.innerHTML = randomUserNumber;
        let randomComputerNumber = Math.floor(Math.random() * 6 + 1);
        computer.innerHTML = randomComputerNumber;

        if(randomUserNumber > randomComputerNumber) {
            userScore = userScore + 1;

        } else if(randomUserNumber < randomComputerNumber) {
            computerScore = computerScore + 1;

        }

        if(computerScore == 3) {
            winLose.innerHTML = "Ha vinto il computer";
            userScore = 0;
            computerScore = 0;
        } else if(userScore == 3) {
            winLose.innerHTML = "Ha vinto il computer";
            userScore = 0;
            computerScore = 0;
        }

        userResult.innerHTML = userScore;
        computerResult.innerHTML = computerScore;

    }

);