var storage = 10;

var letters = [];

var pTag = document.querySelector('p');

var newletters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
var newletter = newletters[Math.floor(Math.random()*newletters.length)];

console.log(newletter);

pTag.innerText = storage;



function increase(){
    storage--;

    pTag.innerText = storage;
    letters.push(event.key);
    document.querySelector("#counter").innerText = 'Your guesses so far: ' + letters;
    return letters;

    }
    

document.onkeyup = increase;

function match(event) {
    var x = event.key;
  
    // If the pressed keyboard button is "a" or "A" (using caps lock or shift), alert some text.
    if (x == newletter) { 
      alert ("You did it!");
    }
  }



document.onkeydown = match;

// function randomLetter( ) {


//     console.log(newletter);

//     }

//     randomLetter();


//     document.onkeydown = randomLetter;


// function randomString() {
//     var chars =["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//     //chars letters string
//     var string_length = 1;
// 	var randomString = '';
// 	for (var i=0; i<string_length; i++) {
// 		var rnum = chars[Math.floor(Math.random() * chars.length)];
//         randomString += chars.substring(rnum,rnum+1);
//         alert(rnum);
//         console.log(randomString);
// 	}
//     document.onkeydown = randomString;

// }

// randomString();

// var counter = 0;

// function writeCounter(){
//     console.log("executingwritecounterfunction")
//     //this event object available to us
//     var userGuesses = ['a', 'b', 'c'];

//     if (userGuesses.includes(randomString)){
//         counter++;
//         document.getElementById("counter").innerHTML = 'Your guesses so far: ' + counter;
//         //when you use document.write it overrides the entire html page and gets rid of all the javascript and css
//         // document.write(counter);
//         console.log(counter);
//     }

// }
// document.onkeyup = writeCounter;



// var userLetter;
// var randomLetter = ["a","b","c"];

// var losses = 0;
// var guessesRemaining = 10;
// var guessedSoFar = 0;




// var wins = 0;

// function writeWins(){
//     //this event object available to us
//     var randomLetter = ['a', 'b', 'c'];
//     var pTags = document.querySelectorAll('p');
//     if (randomLetter.includes(event.key)){
//         wins++;
//         pTags[2].innerText = '';

//         //when you use document.write it overrides the entire html page and gets rid of all the javascript and css
//         // document.write(counter);
//     }
// }

// function userLetter(a){
//     console.log(a)
// }

// function randomLetter(b){
//     console.log(b)
// }

// if (userLetter.includes(event.key)){
//     wins++;
//     alert(wins)
// }

// else {
//     console.log(event.key + " wrong");
// }

// function wins(a,b){
//     console.log(a==b)
// }