let images = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];
let dice = document.querySelectorAll("img");
let counter = 0;
let point = 0;

function roll(gameMode) {
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
            die.setAttribute("src", "images/" + images[dieValues[dieValues.length - 1]]);
        });
        for (let i = 0; i < dieValues.length; i++) {
            dieValues[i]++;
        }
        console.log(dieValues);
        let result = "";
        if(gameMode === "ceelo") {
            result = ceelo(dieValues);
        } else if (gameMode === "craps"){
            result = craps(dieValues);
        }
        document.querySelector("#result").innerHTML = result;
    }, 1000);
}

function roller() {
    d3.selectAll(".die").classed("shake", true);
    setTimeout(function () {
        d3.selectAll(".die").classed("shake", false);

        d3.selectAll(".die").remove();
        for (let i = 1; i <= counter; i++) {
            let value = Math.floor(Math.random() * 6 + 1);
            d3.xml('/images/dice-0' + value + '.svg')
                .then(data => {
                    document.querySelector(".dice-wrapper").append(data.documentElement)
                });
        }
    }, 1000);
}

function ceelo(dieValues) {
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
    return result;
}

function craps(dieValues) {
    let result = "";
    let total = 0;
    dieValues.forEach(value => {
        total += value;
    });
    console.log(total);
    if (point == 0) { // first roll
        switch (total) {
            case 7:
            case 11:
                result = "You win!";
                break;
            case 2:
            case 3:
            case 12:
                result = "You lose!";
                break;
            default:
                result = total + " points";
                point = total;
        }
    } else {
        if (total == point) {
            result = "You win!";
            point = 0;
        } else if (total == 7) {
            result = "You lose!";
            point = 0;
        } else {
            result = "Roll again";
        }
    }
    return result;
}


function addDie() {
    d3.xml('/images/dice-06.svg')
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