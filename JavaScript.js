var guessing = 0
let number = Math.floor((Math.random() * 100) + 1);
var amountOfGuesses = 0

document.getElementById("star").style.visibility = "hidden";

const game = {
    test() {
        console.log("TEST COMPLETE");
    },

    showStar() {
        console.log("Star shown");
        document.getElementById("star").style.visibility = "visible";
    },

    hideStar() {
        console.log("Star hidden");
        document.getElementById("star").style.visibility = "hidden";
    },

    startGuessingGame() {
        guessing = 1
        number = Math.floor((Math.random() * 100) + 1);
        console.log("STARTED GUESSING GAME")
        console.log("Guess a number from 1 to 100")
        console.log("You can start guessing by typing the command 'game.guess(your number)'")
    },

    guess(num) {
        if (guessing == 1) {

            amountOfGuesses += 1
            if (num == number) {
                console.log("Correct! Nice job!");
                console.log("That took you " + amountOfGuesses + " guesses");
                console.log("Start another game by typing the command 'game.startGuessingGame()'");
            } else if (num > number) {
                console.log("Smaller!");
            } else {
                console.log("Bigger!")
            }

        } else {
            
            console.log("You have to start the guessing game by typing the command 'game.startGuessingGame()'")
        
        }
    },

    getData(dataSheet) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", dataSheet);
        xhr.send();
        xhr.responseType = "json";
        xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            console.log(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
        };
    },
};
