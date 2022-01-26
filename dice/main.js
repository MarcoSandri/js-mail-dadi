// Oggetti
let start = document.getElementById("start");

let user = document.getElementById("userResult");
let computer = document.getElementById("computerResult");

let userResult = document.getElementById("userScore");
let computerResult = document.getElementById("computerScore");

let winLose = document.getElementById("winlose");

// Risultato
let userScore = 0;
let computerScore = 0;


start.addEventListener('click',
    
    function() {

        // Reset scritte e dadi
        document.getElementById("userFaceOne").style.display = "none";
        document.getElementById("userFaceTwo").style.display = "none";
        document.getElementById("userFaceThree").style.display = "none";
        document.getElementById("userFaceFour").style.display = "none";
        document.getElementById("userFaceFive").style.display = "none";
        document.getElementById("userFaceSix").style.display = "none";

        document.getElementById("computerFaceOne").style.display = "none";
        document.getElementById("computerFaceTwo").style.display = "none";
        document.getElementById("computerFaceThree").style.display = "none";
        document.getElementById("computerFaceFour").style.display = "none";
        document.getElementById("computerFaceFive").style.display = "none";
        document.getElementById("computerFaceSix").style.display = "none";

        winLose.innerHTML = "";


        // Genera numero randomico per l'utent da 1 a 6
        let randomUserNumber = Math.floor(Math.random() * 6 + 1);

        // Mostra il dado corretto
        if(randomUserNumber == 1){
            document.getElementById("userFaceOne").style.display = "flex";
        } else if(randomUserNumber == 2){
            document.getElementById("userFaceTwo").style.display = "flex";
        } else if(randomUserNumber == 3){
            document.getElementById("userFaceThree").style.display = "flex";
        } else if(randomUserNumber == 4){
            document.getElementById("userFaceFour").style.display = "flex";
        } else if(randomUserNumber == 5){
            document.getElementById("userFaceFive").style.display = "flex";
        } else if(randomUserNumber == 6){
            document.getElementById("userFaceSix").style.display = "flex";
        }
        
        // Genera numero randomico per il computer da 1 a 6
        let randomComputerNumber = Math.floor(Math.random() * 6 + 1);

        // Mostra il dado corretto
        if(randomComputerNumber == 1){
            document.getElementById("computerFaceOne").style.display = "flex";
        } else if(randomComputerNumber == 2){
            document.getElementById("computerFaceTwo").style.display = "flex";
        } else if(randomComputerNumber == 3){
            document.getElementById("computerFaceThree").style.display = "flex";
        } else if(randomComputerNumber == 4){
            document.getElementById("computerFaceFour").style.display = "flex";
        } else if(randomComputerNumber == 5){
            document.getElementById("computerFaceFive").style.display = "flex";
        } else if(randomComputerNumber == 6){
            document.getElementById("computerFaceSix").style.display = "flex";
        }

        // Controlla chi ha vinto
        if(randomUserNumber > randomComputerNumber) {
            userScore = userScore + 1;

        } else if(randomUserNumber < randomComputerNumber) {
            computerScore = computerScore + 1;

        }


        // Risultato al meglio delle 3
        if(computerScore == 3) {
            winLose.innerHTML = "Hai perso";
            userScore = 0;
            computerScore = 0;
        } else if(userScore == 3) {
            winLose.innerHTML = "Hai vinto!";
            userScore = 0;
            computerScore = 0;
        }

        userResult.innerHTML = userScore;
        computerResult.innerHTML = computerScore;

    }

);