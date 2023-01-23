let images = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);
        let dieThreeValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue,dieThreeValue);
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#die-3").setAttribute("src", images[dieThreeValue]);
        let result;
        if(dieOneValue == 3 && dieTwoValue == 4 && dieThreeValue == 5) {
            result = "You win!";
        } else if(dieOneValue == 3 && dieTwoValue == 5 && dieThreeValue == 4) {
            result = "You win!";
        } else if(dieOneValue == 4 && dieTwoValue == 3 && dieThreeValue == 5) {
            result = "You win!";
        } else if(dieOneValue == 4 && dieTwoValue == 5 && dieThreeValue == 3) {
            result = "You win!";
        } else if(dieOneValue == 5 && dieTwoValue == 4 && dieThreeValue == 3) {
            result = "You win!";
        } else if(dieOneValue == 5 && dieTwoValue == 3 && dieThreeValue == 4) {
            result = "You win!";
        } else if(dieOneValue == 0 && dieTwoValue == 1 && dieThreeValue == 2) {
            result = "You lose";
        } else if(dieOneValue == 0 && dieTwoValue == 2 && dieThreeValue == 1) {
            result = "You lose";
        } else if(dieOneValue == 1 && dieTwoValue == 0 && dieThreeValue == 2) {
            result = "You lose";
        } else if(dieOneValue == 1 && dieTwoValue == 2 && dieThreeValue == 0) {
            result = "You lose";
        } else if(dieOneValue == 2 && dieTwoValue == 0 && dieThreeValue == 1) {
            result = "You lose";
        } else if(dieOneValue == 2 && dieTwoValue == 1 && dieThreeValue == 0) {
            result = "You lose";
        } else if(dieOneValue == dieTwoValue && dieOneValue == dieThreeValue) {
            //House Rule "Ace Out"
            // if(dieOneValue == 0) {
            //     result = "Ace out, you lose";
            // }
            result = dieOneValue + 1 + " Trips";
        } else if (dieOneValue == dieTwoValue) {
            result = (dieThreeValue + 1 + " Points");
        } else if (dieOneValue == dieThreeValue) {
            result = (dieTwoValue + 1 + " Points");
        } else if(dieTwoValue == dieThreeValue) {
            result = (dieOneValue + 1 + " Points");
        } else {
            result = "Roll again";
        }

        document.querySelector("#total").innerHTML = result;
    },
    1000
    );
}