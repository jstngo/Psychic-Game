var letters = [];

var newletters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
var newletter = newletters[Math.floor(Math.random()*newletters.length)];

console.log(newletter);

var guessesLeft = 10;

var elGuessesLeft = document.querySelector("#guessesLeft");

elGuessesLeft.innerText = guessesLeft;

var userVal = document.querySelector("#currentGuesses");

userVal.innerText = letters;

var lettersMatch = 0;

var matchingLetters = document.querySelector("#winTracker");

matchingLetters.innerText = lettersMatch;

var lossScore = 0;

var lostOne = document.querySelector("#lossTracker");

lostOne.innerText = lossScore;

function increase(){
    
    guessesLeft--;
    elGuessesLeft.innerText = guessesLeft;
    // console.log(guessesLeft);
    letters.push(event.key);
    userVal.innerText = letters;
    // document.querySelector("#counter").innerText = 'Your guesses so far: ' + letters;
    return letters;
}

document.onkeyup = increase;

function match(event) {
    var x = event.key;

    if (x == newletter) { 
      lettersMatch++;
      matchingLetters.innerText = lettersMatch;
      alert ("You did it!");
    }
  }

document.onkeydown = match;

function loss(){
    
      if (guessesLeft == 0) {
        console.log(guessesLeft);
        lossScore++;
        lostOne.innerText = lossScore;
        alert ("You lost this round");
      }
}

document.onkeydown = loss;