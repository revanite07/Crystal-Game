var crystals = {
    red: 0, cyan: 0, blue: 0, purple: 0
};
var numberDiv = $(".game-number");
var number = 0;
var lossesBox = $(".losses");
var losses = 0;
var totalScore = 0;
var winBox = $(".win");
var wins = 0;


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

$(document).ready(function () {
    number = getRandomInt(20, 200);
    numberDiv.text('The Number is: ' + number);
    console.log("The Number is: " + number);
    crystals.red = getRandomInt(1, 13);
    crystals.cyan = getRandomInt(1, 13);
    crystals.blue = getRandomInt(1, 13);
    crystals.purple = getRandomInt(1, 13);

});

$('.crystal').on('click', function () {
    var value = ($(this).attr("data-crystal"));
    totalScore += crystals[value];
    console.log("New Score = " + value);
    $('#totalScore').text(totalScore);

    if (totalScore === number) {
        winGame()
        resetGame()
    }
    else if (totalScore > number) {
        loseGame()
        resetGame()
    }
});

function resetGame() {
    totalScore = 0;
    totalScore.innerHTML = 0;

    number = getRandomInt(20, 200);
    console.log(number);

}

function winGame() {
    alert("Wow! Nice job! You Win!");
    win++;
    winBox.text(win);
    gameReset()
}

function loseGame() {
    alert("Sorry please try again.");
    losses++;
    lossesBox.text(losses);
    gameReset()
}


