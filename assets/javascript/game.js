var userLetters = [];
//Letters added by user

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//Possible letters

var newLetter = randomLetter();
//New letter variable will equal random letter function
console.log(newLetter); 

var guessRemain = 10;
//Remaining guesses value

var guessLeft = document.querySelector("#guessesLeft");

guessLeft.innerText = guessRemain;
//Updates guesses left to HTML

var userVal = document.querySelector("#currentGuesses");

userVal.innerText = userLetters;
//Updates user's current guesses to HTML

var winScore = 0;
//Starting Win score

var matchingLetters = document.querySelector("#winTracker");

matchingLetters.innerText = winScore;
//Updates Win score

var lossScore = 0;
//Starting Loss score

var lostOne = document.querySelector("#lossTracker");

lostOne.innerText = lossScore;
//Updates Loss score

function randomLetter(){
//Creates random letter 
    return newLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
//Returns random letter from alphabet to newLetter variable
  }

document.onloadstart = randomLetter;
//Turns on randomLetter function when body of HTML loads

function increase(){
//Increase function keeps track of remaining guesses, and user input
    guessRemain--;
    //Remaining guesses variable counts down when increase function runs
    
    guessLeft.innerText = guessRemain;
    //Takes current remaining guesses from function to HTML

    if (!userLetters.includes(alphabet)){
      //User's input must include letters in alphabet variable

      userLetters.push(event.key);
      //Logging user letters into function

      userVal.innerText = userLetters;
      //Translate user's input into HTML
      return;
    }
}

document.onkeypress = increase;
//Increase function activates when key is pressed

function match(event) {
//Function keeps track of user's correct input

    var x = event.key;
    //User's input when pressing a key

    if (x == newLetter) { 
      //If user's input matches random generated letter from newLetter variable

      winScore++;
      //Adds one point to Wins score

      matchingLetters.innerText = winScore;
      //Writes updated score to HTML

      guessRemain = 10;
      //Puts back remaining guesses to 10

      guessLeft.innerText = guessRemain;
      //Updates remining guesses to HTML

      userLetters = [];
      //Records user input

      userVal.innerText = userLetters;
      //Writes user's input onto HTML

      alert ("You did it!");
      //Pop up letting user know they've got a correct answer

      randomLetter();
      //Runs random letter function
    }
  }
document.onkeyup = match;
//Activates match function when key is released

function loss(){
//Tracks user's losses and remaining guesses

      if (guessRemain == 1) {
        //When user's guesses reaches zero

        lossScore++;
        //Updates loss score by one

        lostOne.innerText = lossScore;
        //Updates loss score to HTML

        guessRemain = 10;
        //Guesses remaining value

        guessLeft.innerText = guessRemain;
        //Updates remaining guesses value to HTML

        userLetters = [];
        //Records user input

        userVal.innerText = userLetters;
        //Writes user input to HTML

        alert ("You lost this round");
        //Pop up letting user know they answered incorrectly this round
    }
}

document.onkeydown = loss;
//Activates loss function when key is pressed down