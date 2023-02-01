let images = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];
let dice = document.querySelectorAll("img");
let counter = 0;

function roll() {
    let dice = document.querySelectorAll(".die");
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });
        let dieValues = [];
        dice.forEach((die) => {
            dieValues.push(Math.floor(Math.random() * 6));
            die.setAttribute("src", "/images/" + images[dieValues[dieValues.length - 1]]);
        });
        for (let i = 0; i < dieValues.length; i++) {
            dieValues[i]++;
        }
        console.log(dieValues);
        let result = "";
        if (dieValues[0] == dieValues[1]) {
            if (dieValues[1] == dieValues[2]) {
                result = "Triples! You win!"
            } else {
                result += dieValues[2] + " points";
            }
        } else if (dieValues[0] == dieValues[2]) {
            result += dieValues[1] + " points";
        } else if (dieValues[1] == dieValues[2]) {
            result += dieValues[0] + " points";
        } else if (dieValues.includes(4) && dieValues.includes(5) && dieValues.includes(6)) {
            result = "4-5-6 you WIN!";
        } else if (dieValues.includes(1) && dieValues.includes(2) && dieValues.includes(3)) {
            result = "1-2-3 you lose";
        } else {
            result = "Roll again";
        }
        document.querySelector("#result").innerHTML = result;
        console.log(result);

    }, 1000);
}

function addDie() {
    d3.xml('/static/dice-06.svg')
        .then(data => {
            document.querySelector(".dice-wrapper").append(data.documentElement);
        });
    counter++;
}


function removeDie() {
    let diceWrapper = document.querySelector(".dice-wrapper");
    diceWrapper.removeChild(diceWrapper.lastChild);
    counter--;
}