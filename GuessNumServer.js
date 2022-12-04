var express = require('express');
var app = express();

var port = 3000;

var current;
var numbers = [];
var count;

app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("Received: ");
    console.log(JSON.parse(req.query['data']));
    var z = JSON.parse(req.query['data']);

    if (z['action'] == "higher") {
        var guess = higher(z['guess']);
        var jsontext = JSON.stringify({
            'action': 'new_guess',
            'newGuess': guess,
            'count': count
        });
        console.log(jsontext);
        res.send(jsontext);
    } else if (z['action'] == "lower") {
        var guess = lower(z['guess']);
        var jsontext = JSON.stringify({
            'action': 'new_guess',
            'newGuess': guess,
            'count': count
        });
        console.log(jsontext);
        res.send(jsontext);
    } else if (z['action'] == "finished") {
        var jsontext = JSON.stringify({
            'action': 'end',
            'array': numbers,
        });
        console.log(jsontext);
        res.send(jsontext);
    }
    else if (z['action'] == "start") {
        numbers = []; // wipe the array clean
        numbers.push(z['num']); // add the first number
        current = z['num'] / 2; // set the current
        count = 0;
    }

}).listen(port);
console.log("Server is running! (listening on port " + port + ")");

function higher(guessNumber) {
    if (current < 1) {
        current = 1;
    }

    // generate next guess
    guessNumber += current;
    current /= 2;
    count++;

    if (current > 1) {
        var random = Math.random() < 0.5 ? -1 : 1; // randomly adds or subtracts 1;
        guessNumber += random;
    }
    numbers.push(Math.round(guessNumber));
    return Math.round(guessNumber);
}

function lower(guessNumber) {
    if (current < 1) {
        current = 1;
    }
    guessNumber -= current;

    if (current > 1) {
        var random = Math.random() < 0.5 ? -1 : 1; // randomly adds or subtracts 1;
        guessNumber += random;
    }


    current /= 2;
    count++;
    numbers.push(Math.round(guessNumber));
    return Math.round(guessNumber);
}
