var url = "http://localhost:3000/post";

var guessNumber;
var newGuess;
var numbers = [];
var current;

function onStart() {
    guessNumber = parseInt(window.prompt("Enter the highest Number in range 0-guessNumber", ""));
}

function start() {
    var num = Math.round(guessNumber / 2);
    document.getElementById('guess').innerHTML = Math.round(guessNumber / 2);
    $.post(
        url + '?data=' + JSON.stringify({
            'action': 'start',
            'num': num
        })
    )
}
function res() {
    alert("Nice, Let's try another Number!");
    window.location.replace("GuessMain.html");
}

function higher() {
    var num = parseInt(document.getElementById('guess').innerHTML);
    $.post(
        url + '?data=' + JSON.stringify({
            'guess': num,
            'action': 'higher',
        }),
        response
    );
}

function lower() {
    var num = parseInt(document.getElementById('guess').innerHTML);
    $.post(
        url + '?data=' + JSON.stringify({
            'guess': num,
            'action': 'lower',
        }),
        response
    );
}

function finished() {
    $.post(
        url + '?data=' + JSON.stringify({
            'action': 'finished',
        }),
        response
    );

}

function drawChart() {
    const Graph = [['Guess', 'Number']];
    for (var i = 0; i < numbers.length; i++) {
        const temp = [i, numbers[i]];
        Graph.push(temp);
    }

    var data = google.visualization.arrayToDataTable(Graph);

    var options = {
        title: 'Guesses',
        curveType: 'function',
        pointSize: 10,
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}

function response(data, status) {
    var response = JSON.parse(data);
    console.log(data);
    if (response['action'] == 'new_guess') {  // if the action to to set a new data
        newGuess = response['newGuess'];
        count = response['count'];
        document.getElementById('count').innerHTML = count;
        document.getElementById('guess').innerHTML = Math.round(newGuess);
    } else if (response['action'] == 'end') {
        numbers = response['array'];
        drawChart();
        document.getElementById("buttonAppear").innerHTML = '<button onclick="res();">Restart</button>';
    }
}