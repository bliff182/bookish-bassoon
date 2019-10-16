$(document).ready(function () {

// GLOBAL VARIABLES
// =====================================================================================

    var wins = 0;
    var losses = 0;
    var scoreCounter = 0;
    var valuesAssigned = false;  // variable to check if crystals have been given number values yet
    var targetScore = randomizer(19, 120);  // variable to hold random numbers assigned to target score for each game
    var crystalValue;  // variable to hold eventual value of clicked crystal

    // html to update
    $("#target-score").html("Target Score: " + targetScore);
    $("#win-counter").html("Wins: " + wins);
    $("#loss-counter").html("Losses: " + losses);
    $("#score-counter").html("Your score: " + scoreCounter);


// FUNCTIONS
// =====================================================================================

    // function to return a random number between the specified range
    function randomizer(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // function to reset values after win or loss
    function reset() {
        valuesAssigned = false;
        scoreCounter = 0;
        targetScore = randomizer(19, 120);
        $("#score-counter").html("Your score: " + scoreCounter);
        $("#target-score").html("Target Score: " + targetScore);
    }

    // function to add crystalValue to scoreCounter and update html accordingly
    function addValue() {
        crystalValue = parseInt(crystalValue);
        scoreCounter += crystalValue;
        $("#score-counter").html("Your score: " + scoreCounter);
    }

// GAMEPLAY
// =====================================================================================

    // game starts on first button click
    $("button").on("click", function () {
        // code to run if crystals have not been given values (main gameplay)
        if (!valuesAssigned) {
            // prevent further clicks from resetting button values           
            valuesAssigned = true;
            // update html
            $("#win-lose-text").html("Click the Crystals!");
            // assign each crystal button a crystal-value attribute equal to a random number between 1-12
            var crystalButtons = $(".crystal-btn");
            for (var i = 0; i < crystalButtons.length; i++) {
                $(crystalButtons[i]).attr("crystal-value", randomizer(1, 12));
            }
            // crystalValue is assigned the value of the specific crystal that was clicked (THIS crystal)
            crystalValue = $(this).attr("crystal-value");
            // call addValue function
            addValue();
        }

        // code to run on subsuquent clicks
        else {
            // add crystal values to score counter
            crystalValue = $(this).attr("crystal-value");
            addValue();
        }

        // USER WINS
        if (scoreCounter === targetScore) {
            $("#win-lose-text").html("You win! Click a crystal to go for the next target score!");
            wins++;
            $("#win-counter").html("Wins: " + wins);
            reset();
        }

        // USER LOSES
        else if (scoreCounter > targetScore) {
            $("#win-lose-text").html("YOU LOSE! GOOD DAY SIR! (But seriously you can click a crystal to go for the next target score)")
            losses++;
            $("#loss-counter").html("Losses: " + losses);
            reset();
        }

    })

});