//delacring variables
var location = 3;
var location = 4;
var location = 5;

var guesses;
var hits = 0;
var isSunk = false;

//game logic

while (isSunk == false) {
    guess = prompt("Ready!, Aim!, Fire! 🎆 (Enter number 0-6)");

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!")
    } else {
        guesses = guesses + 1;
        alert("Hit!")

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("Hit!")

            if(hits == 3) {
                isSunk = true;
                alert("You sank my battleship! 🥹🥹")
            }

        } else {
            alert("Miss ⚠️")
        }
    }
}

var stats =  "You sank my Battleship at: " + guesses + " guesses" + "and you accuracy is" + (3/guesses);

alert(stats);