$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var scoreCounter = 0;
    // variable to check if crystals have been given number values yet
    var valuesAssigned = false;


    // function to return a random number between the specified range
    function randomizer(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    // variable to hold random numbers assigned to target score for each game
    var targetScore = randomizer(19, 120);


    // html to update
    $("#target-score").html("Target Score: " + targetScore);
    $("#win-counter").html("Wins: " + wins);
    $("#loss-counter").html("Losses: " + losses);
    $("#score-counter").html("Your score: " + scoreCounter);


    // GAMEPLAY
    // game starts on first button click
    $("button").on("click", function () {
        // code to run if crystals have not been given values (main gameplay)
        if (!valuesAssigned) {

            // crystal buttons given crystal-value attribute equal to a random number between 1-12
            // also, this is repetitive. How can this be cleaned up?
            $("#blue").attr("crystal-value", randomizer(1, 12));
            $("#green").attr("crystal-value", randomizer(1, 12));
            $("#purple").attr("crystal-value", randomizer(1, 12));
            $("#white").attr("crystal-value", randomizer(1, 12));

            // crystalValue is assigned the value of the specific crystal that was clicked (THIS crystal)
            var crystalValue = $(this).attr("crystal-value");

            $("#win-lose-text").html("Click the Crystals!")

            // convert string to number
            crystalValue = parseInt(crystalValue);

            // add to score counter
            scoreCounter += crystalValue;
            // update scoreCounter html
            $("#score-counter").html("Your score: " + scoreCounter);

            // prevent further clicks from resetting button values
            valuesAssigned = true;
        }

        // code to run on subsuquent clicks
        else {
            // add crystal values to score counter
            crystalValue = $(this).attr("crystal-value");

            crystalValue = parseInt(crystalValue);

            scoreCounter += crystalValue;

            $("#score-counter").html("Your score: " + scoreCounter);
        }

        // USER WINS
        if (scoreCounter === targetScore) {
            $("#win-lose-text").html("You win! Click a crystal to go for the next target score!");
            wins++;
            $("#win-counter").html("Wins: " + wins);
            scoreCounter = 0;
            $("#score-counter").html("Your score: " + scoreCounter);
            targetScore = randomizer(19, 120);
            $("#target-score").html("Target Score: " + targetScore);

            valuesAssigned = false;

        }

        // USER LOSES
        else if (scoreCounter > targetScore) {
            $("#win-lose-text").html("YOU LOSE! GOOD DAY SIR! (But seriously you can click a crystal to go for the next target score)")
            losses++;
            $("#loss-counter").html("Losses: " + losses);
            scoreCounter = 0
            $("#score-counter").html("Your score: " + scoreCounter);
            targetScore = randomizer(19, 120);
            $("#target-score").html("Target Score: " + targetScore);

            valuesAssigned = false;
        }

    })

});