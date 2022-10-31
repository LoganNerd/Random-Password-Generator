// Assignment code here
function randomInt(min, max){
  if(!max){
    max = min;
    min = 0;
  }
  var rand = Math.random();
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandom(list) {
  return list[randomInt(list.length)]
}


function generatePassword(){
 var anwser = window.prompt("length of password?");
var anwserLength = parseInt(anwser);

if (anwserLength < 8 || anwserLength > 128){
  window.alert("Choose a number between 8-128 please!");
  return;
}

var numbersQ = window.confirm("Would you like to use numbers?");
var symbolsQ = window.confirm("Would you like to use symbols?");
var lcaseQ = window.confirm("Would you like to use lowercase letters?");
var ucaseQ = window.confirm("Would you like to use uppercase letters?");

var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolList = ["!", "?", "'", "^", "%", "$", "#", "@", "&", "*", "(", ")"];
var lcaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ucaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var anwsers = [];

if (anwsers.length === 0){
  anwsers.push(numList);
}

if (numbersQ === true) {
anwsers.push(numList);
}
if (symbolsQ === true) {
  anwsers.push(symbolList);
}
if (lcaseQ === true) {
  anwsers.push(lcaseList);
}
if (ucaseQ === true) {
  anwsers.push(ucaseList);
}

var generatePassword = ""

for (var i = 0; i < anwserLength; i++){
  var item = getRandom(anwsers);
  var item2 = getRandom(item);
  generatePassword += item2;
}
 
return generatePassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);