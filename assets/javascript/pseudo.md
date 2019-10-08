1. Create variables to store the following:
    * target score - the score that the user will try to reach
        * must be between 19 - 120
    * score counter - the number that will increase with each clicked crystal based on the crystal's value; the goal is for this to match the target score
        * starts at 0
    * crystal value - the number value of each crystal
        * four of these
        * must be between 1 - 12
    * wins - the number of times the user matched the target score exactly
    * losses - the number of times the user went over the target score
    * the html element that will change based on whether the user wins or loses
    
2. Create an on-click event that begins when one of the crystals is clicked and will run until the score counter equals or is greater than the target score
    * target score is given a random number between 19 - 120
    * score counter is set to 0
    * each crystal value is set to a random number between 1 - 12
    * when clicked, the value of the clicked crystal is added to the score counter

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
    * score counter will be set to 0
