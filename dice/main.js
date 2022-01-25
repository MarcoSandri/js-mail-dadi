const dice = [1 , 2 , 3 , 4 , 5 , 6];

let start = document.getElementById("start");
let user = document.getElementById("userResult");
let computer = document.getElementById("computerResult");
let result = document.getElementById("winlose");

start.addEventListener('click',
    function() {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        user.innerHTML = randomNumber;
        randomNumber = Math.floor(Math.random() * 6 + 1);
        computer.innerHTML = randomNumber;

        if(user.innerHTML > computer.innerHTML) {
            result.innerHTML = "hai vinto";
        } else if(user.innerHTML < computer.innerHTML) {
            result.innerHTML = "hai perso";
        } else {
            result.innerHTML = "pareggio";
        }
    }

);