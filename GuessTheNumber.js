var current;
var count;
var guessNumber
function finished() {
    alert("Nice, Let's try another Number!");
    window.location.replace("GuessMain.html");
}
function start() {
    document.getElementById('guess').innerHTML = Math.round(guessNumber / 2);
}

function higher() {
    // gets the current guess number
    var guessNumber = parseInt(document.getElementById('guess').innerHTML);

    if (current < 1) {
        current = 1;
    }

    // generate next guess
    guessNumber += current;
    current /= 2;
    count++;

    // randomly adds or subtracts 1;
    var random = Math.random() < 0.5 ? -1 : 1;
    guessNumber += random;



    // sets the displayed count and guess
    document.getElementById('count').innerHTML = count;
    document.getElementById('guess').innerHTML = Math.round(guessNumber);
}

function lower() {
    var guessNumber = parseInt(document.getElementById('guess').innerHTML);
    if (current < 1) {
        current = 1;
    }
    guessNumber -= current;
    // randomly adds or subtracts 1;
    var random = Math.random() < 0.5 ? -1 : 1;
    guessNumber += random;
    current /= 2;
    count++;
    document.getElementById('count').innerHTML = count;
    document.getElementById('guess').innerHTML = Math.round(guessNumber);
}
function onStart() {
    guessNumber = parseInt(window.prompt("Enter the highest Number in range 0-guessNumber", ""));
    current = guessNumber / 4;
    count = 0;

}