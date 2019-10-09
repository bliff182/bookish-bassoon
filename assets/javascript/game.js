/* 1. Create variables to store the following:
    * target score - the score that the user will try to reach
        * must be between 19 - 120
    * score counter - the number that will increase with each clicked crystal based on the crystal's value; the goal is for this to match the target score
        * starts at 0
    * crystal value - the number value of each crystal
        * four of these
        * must be between 1 - 12
    * wins - the number of times the user matched the target score exactly
    * losses - the number of times the user went over the target score
    * the html elements that will change based on whether the user wins or loses
    
2. Create an on-click event that begins when one of the crystals is clicked and will run until the score counter equals or is greater than the target score
    * target score is given a random number between 19 - 120
    * score counter is set to 0
    * each crystal value is set to a random number between 1 - 12
    * WHILE score counter is less than target score:
        - when crystal is clicked, the value of the clicked crystal is added to the score counter

3. If score counter is greater than target score (user loses):
    * the html will inform the user that they lose
    * losses will increase by 1
    * target score will change to a different random number between 19 - 120
    * each crystal value will change to a different random number between 1 - 12
    * score counter will be set to 0

4. If score counter equals target score (user wins):
    * html will inform the user that they win
    * wins will increase by 1
    * target score will change to a different random number between 19 - 120
    * each crystal value will change to a different random number between 1 - 12
    * score counter will be set to 0 */


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
    $("#win-tracker").html("Wins: " + wins);
    $("#loss-tracker").html("Losses: " + losses);
    $("#score-counter").html("Your score: " + scoreCounter);


    // GAMEPLAY
    // game starts on first button click
    $("button").on("click", function () {
        // code to run if crystals have not been given values (main gameplay)
        if (!valuesAssigned) {
            
            // crystal buttons given crystalvalue attribute equal to a random number between 1-12
            // also, this is repetitive. How can this be cleaned up?
            $("#blue").attr("crystalvalue", randomizer(1, 12));
            $("#green").attr("crystalvalue", randomizer(1, 12));
            $("#purple").attr("crystalvalue", randomizer(1, 12));
            $("#white").attr("crystalvalue", randomizer(1, 12));

            // crystalValue is assigned the value of the specific crystal that was clicked (THIS crystal)
            var crystalValue = $(this).attr("crystalvalue");

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
            crystalValue = $(this).attr("crystalvalue");

            crystalValue = parseInt(crystalValue);

            scoreCounter += crystalValue;

            $("#score-counter").html("Your score: " + scoreCounter);
        }

        // USER WINS
        if (scoreCounter === targetScore) {
            $("#win-lose-text").html("You win! Click a crystal to go for the next target score!");
            wins++;
            $("#win-tracker").html("Wins: " + wins);
            scoreCounter = 0;
            $("#score-counter").html("Your score: " + scoreCounter);
            targetScore = randomizer(19, 120);
            $("#target-score").html("Target Score: " + targetScore);

            valuesAssigned = false;

        }
        // USER LOSES
        else if (scoreCounter > targetScore) {
            $("#win-lose-text").html(":( You lose. Click a crystal to go for the next target score.")
            losses++;
            $("#loss-tracker").html("Losses: " + losses);
            scoreCounter = 0
            $("#score-counter").html("Your score: " + scoreCounter);
            targetScore = randomizer(19, 120);
            $("#target-score").html("Target Score: " + targetScore);

            valuesAssigned = false;
        }

    })

});
