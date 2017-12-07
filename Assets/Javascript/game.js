var wordList = [
    "eggos",
    "eleven",
    "demogorgon",
    "arcade",
    "winona",
    "hawkins",
]

var guessesRemaining = 15;
var chosenWord = " ";
var lettersInChosenWord = [];
var numBlanks = 0;
var wrongGuesses = [];
var blanksAndSuccesses = [];
var winCount = 0;
var lossCount = 1;
var numGuesses = 15;
var letterGuessed = [];
var letterInWord = false;


function startGame() {
	wrongGuesses = [];
	numGuesses = 15;
	blanksAndSuccesses = [];

	// Here we pick a word from our wordList at random. And display it in the consle.
	chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
	console.log("Chosen Word: " + chosenWord);
	// Here we take the chosenWord and put the letters into an array and display that in the console.
	lettersInChosenWord = chosenWord.split("");
	console.log(lettersInChosenWord);
	// Here we are defining how many blanks to display on screen by counting how many letters are in the chosenWord.
	numBlanks = lettersInChosenWord.length;

	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_ ");
	}

	// Here we are pushing text into our HTML for the 
	document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join("");
	document.getElementById("guesses-remaining").innerHTML = "Guesses Remaining: " + numGuesses;
	document.getElementById("wrong-guesses").innerHTML = "Wrong Guesses: " + wrongGuesses.join("");
}

function checkLetters() {
	var letterInWord = false;
	// I'm so so so close but I feel like my code is breaking up a bit in this particular loop, but I've run out of time. Kinda mad about it.
	for (var i = 0; i < numBlanks; i++) {
		console.log(lettersInChosenWord[i]);
		console.log(letterGuessed);
		if(lettersInChosenWord[i] === letterGuessed) {
			console.log(lettersInChosenWord[i]);
			letterInWord = true;
		} 
	};
	console.log(letterInWord);

	if (letterInWord) {
		for (var i = 0; i < numBlanks; i++) {
			if(lettersInChosenWord[i] === letterGuessed) {
				blanksAndSuccesses.push(letterGuessed);
			}
		}
	}
	else {
		numGuesses--;
		wrongGuesses.push(letterGuessed);
	}	
}

function roundComplete() {
	document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join("");
	document.getElementById("guesses-remaining").innerHTML = "Guesses Remaining: " + numGuesses;
	document.getElementById("wrong-guesses").innerHTML = "Wrong Guesses: " + wrongGuesses.join("");

	if(lettersInChosenWord.join("") === blanksAndSuccesses.join("")) {
        winCounter++;
        alert("You win!!");
        document.getElementById("win-count").innerHTML ="Player Wins: " + winCounter;
        startGame();
    }
    else if(numGuesses === 0) {
        document.getElementById("loss-count").innerHTML  ="Player Losses: " + lossCount ++;
        document.getElementById("wrong-guesses").innerHTML ="Wrong Guesses: " + wrongGuesses;
        alert("You don't have any more guesses.");        
        startGame();
    }
}

startGame();

document.onkeypress = function(x) {
	var input = String.fromCharCode(x.keyCode).toLowerCase();
	letterGuessed.push(String.fromCharCode(x.keyCode));
	checkLetters();
	roundComplete();
	//console.log("Letter guessed: " + letterGuessed);
}