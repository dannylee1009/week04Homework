# things in code

*   Start Time / Total Seconds
        var startTime= 75;

*   Elapsed time
        var elaapsedTime= 0;

*   Current time left 

*   Current time html element

*   Questions - Lists/Array

        * Question
        
        * List of possible answers

        * Correct Answers



# Potential HTML elements

*   Start Button
        var startButton = document.getElementId ('start-button');

*   Form / Input to allow us to add our initials

*   Buttons for each answer

# What kind of actions does my code need to perform

* When the user click the start button we need to start the timer and prompt the first question

* When the user clicks an answer button, we need
    
    * Validate if their answer is correct
        
        * If it not correct, we need to remove additional time from the clock
    
    * Then we need to move to the next question

* We need to use an interval to create a countdown - setInterval ( callback, 1000 );

    * Increment elapsedTime

    * Calc current time left by doing ( totalTime - elapsedTime )

    * Check If the timer has reached zero

        * End the game
    
    * Update the time left number in the html

* Game end functionality

    * Display Score

    * Provide an input to enter our intials

* When the user sumbits their Initials

    * Add their high score to the local storage




