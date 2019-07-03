function randomString() {
    var chars =["a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var string_length = 1;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = chars[Math.floor(Math.random() * chars.length)];
        randomstring += chars.substring(rnum,rnum+1);
        console.log(chars)
	}
	document.onekeydown = randomString;
}


var counter = 0;

function writeCounter(){
    console.log("executingwritecounterfunction")
    //this event object available to us
    var userGuesses = ['a', 'b', 'c'];

    if (userGuesses.includes(event.key)){
        counter++;
        document.getElementById("counter").innerHTML = 'Your guesses so far: ' + counter;
        //when you use document.write it overrides the entire html page and gets rid of all the javascript and css
        // document.write(counter);
        console.log(counter);
    }

}
document.onkeyup = writeCounter;



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