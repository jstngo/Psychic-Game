var userLetters = [];

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// var newLetter = alphabet[Math.floor(Math.random()*alphabet.length)];

var newLetter = randomLetter();

console.log(newLetter); 

var guessRemain = 10;

var elGuessesLeft = document.querySelector("#guessesLeft");

elGuessesLeft.innerText = guessRemain;

var userVal = document.querySelector("#currentGuesses");

userVal.innerText = userLetters;

var winScore = 0;

var matchingLetters = document.querySelector("#winTracker");

matchingLetters.innerText = winScore;

var lossScore = 0;

var lostOne = document.querySelector("#lossTracker");

lostOne.innerText = lossScore;

function randomLetter(){

    return newLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
    
  }

document.onloadstart = randomLetter;

function increase(){
  
    guessRemain--;
    elGuessesLeft.innerText = guessRemain;
    // console.log(guessRemain);
    if (!userLetters.includes(alphabet)){
      userLetters.push(event.key);
    // return letters;
      userVal.innerText = userLetters;
      return;
    }
}
document.onkeypress = increase;


function match(event) {
    var x = event.key;

    if (x == newLetter) { 
      winScore++;
      matchingLetters.innerText = winScore;
      guessRemain = 11;
      elGuessesLeft.innerText = guessRemain;
      userLetters = [];
      userVal.innerText = userLetters;
      alert ("You did it!");
      newLetter;
      randomLetter();
    }
  }

document.onkeydown = match;

function loss(){
    
      if (guessRemain == 0) {
        console.log(guessRemain);
        lossScore++;
        lostOne.innerText = lossScore;
        guessRemain = 10;
        elGuessesLeft.innerText = guessRemain;
        userLetters = [];
        userVal.innerText = userLetters;
        alert ("You lost this round");
    }
}

document.onkeyup = loss;