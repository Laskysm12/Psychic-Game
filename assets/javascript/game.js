


        //Creates an array that lists out all of the possible computer choices"
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        // Creating variables to hold the number of wins, losses, and ties. They start at 0.
        var wins = 0;
        var losses = 0;
        var ties = 0;

        // This function is run whenever the user presses a key.
        document.onkeyup = function (event) {

        // Determines which key was pressed.
        var userGuess = event.key;

        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
        if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") ||
           (userGuess === "d") || (userGuess === "e") || (userGuess === "f") ||
           (userGuess === "g") || (userGuess === "h") || (userGuess === "i") ||
           (userGuess === "j") || (userGuess === "k") || (userGuess === "l") ||
           (userGuess === "m") || (userGuess === "n") || (userGuess === "o") ||
           (userGuess === "p") || (userGuess === "q") || (userGuess === "r") ||
           (userGuess === "s") || (userGuess === "t") || (userGuess === "u") ||
           (userGuess === "v") || (userGuess === "w") || (userGuess === "x") ||
           (userGuess === "y") || (userGuess === "z")) {

            if ((userGuess === computerGuess)) {
                wins++;
            } 
            else if ((userGuess !== computerGuess)) {
                losses++;
            }
        

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
           }    
      
    };
