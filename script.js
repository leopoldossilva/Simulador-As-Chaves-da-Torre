function rollDice() {
    var red = parseInt(document.getElementById('red').value);
    var yellow = parseInt(document.getElementById('yellow').value);
    var blue = parseInt(document.getElementById('blue').value);
    var black = parseInt(document.getElementById('black').value);

    var redResults = roll(red);
    var yellowResults = roll(yellow);
    var blueResults = roll(blue);
    var blackResults = roll(black);

    var redSuccesses = countSuccesses(redResults);
    var yellowSuccesses = countSuccesses(yellowResults);
    var blueSuccesses = countSuccesses(blueResults);
    var blackSuccesses = countSuccesses(blackResults);

    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = "<h2>Results</h2>" +
                            "<h3 class='red'>Red Dice:</h3>" + formatResults(redResults, redSuccesses, 'red') +
                            "<h3 class='yellow'>Yellow Dice:</h3>" + formatResults(yellowResults, yellowSuccesses, 'yellow') +
                            "<h3 class='blue'>Blue Dice:</h3>" + formatResults(blueResults, blueSuccesses, 'blue') +
                            "<h3 class='black'>Black Dice:</h3>" + formatResults(blackResults, blackSuccesses, 'black');
}

function roll(numDice) {
    var results = [];
    for (var i = 0; i < numDice; i++) {
        var rollResult = Math.floor(Math.random() * 6) + 1;
        results.push(rollResult);
    }
    return results;
}

function countSuccesses(results) {
    var successes = 0;
    for (var i = 0; i < results.length; i++) {
        if (results[i] >= 5) {
            successes++;
        }
    }
    return successes;
}

function formatResults(results, successes, color) {
    var formattedResults = "<p>Results: ";
    for (var i = 0; i < results.length; i++) {
        formattedResults += "<span class='" + color + "'>" + results[i] + "</span>";
        if (i !== results.length - 1) {
            formattedResults += ", ";
        }
    }
    formattedResults += "</p>";
    formattedResults += "<p>Successes: <span class='" + color + "'>" + successes + "</span></p>";
    return formattedResults;
}
