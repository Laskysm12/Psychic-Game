


        //Creates an array that lists out all of the possible computer choices"
        var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        // Creating variables to hold the number of wins, losses, and ties. They start at 0.
        var wins = 0;
        var losses = 0;
        var guesses = 9;

        // This function is run whenever the user presses a key.
        document.onkeyup = function (event) {

        // Determines which key was pressed.
        var userGuess = event.key;

        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // Console log for reference
        console.log(computerChoices)

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
            else {
                guesses--;
            }
            
            if (guesses === 0) {
                losses++;
            }
            // This conditional prevents causes the "guesses left" counter to go back to 9 when the the number of guesses left goes below 1 (allowing only 9 guesses each round)
            if (guesses < 1) {
                guesses = 9;
            }
        


        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>Guess what letter I'm thinking of" + "</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guesses + "</p>" +
          "<p>Your Guesses so far: " + userGuess + "</p>";

          

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
           }    
      
    };
