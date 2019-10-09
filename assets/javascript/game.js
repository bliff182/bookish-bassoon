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
    var crystalColors = ["blue", "green", "purple", "white"];
    // variable to check if crystals have been given number values yet
    var valuesAssigned = false;

    
    // function to return a random number between the specified range
    function randomizer(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // variables to hold random numbers assigned to target score and crystals for each game
    var targetScore = randomizer(19, 120);
    // var crystalValue = randomizer(1, 12);

    // html elements that will change
    var targetTracker = $("#target-score").text("Target: " + targetScore);
    var winTracker = $("#win-tracker").text("Wins: " + wins);
    var lossTracker = $("#loss-tracker").text("Losses: " + losses);
    var scoreTracker = $("#score-counter").text(scoreCounter);



});
