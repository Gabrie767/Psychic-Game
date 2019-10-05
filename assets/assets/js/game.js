var alphabet = "abcdefghijklmnopqrstuvwxyz";
var lettersGuessed = [];
var guessesRemaining = 9;
var wins = 0;
var loses = 0;
var computerGuessed;

// ==================================================

computerGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuessed);
