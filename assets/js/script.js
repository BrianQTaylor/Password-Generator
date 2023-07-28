// Assignment Code
var generateBtn = document.querySelector("#generate");


// global arrray varibels

// Gather info 
function userGather () {
var length = parseInt(prompt("What is the length of your password?"))
if (length < 8 || length > 128) {
  alert("Please Answer Bewtween 6-128")
  return null;
}
if (Number.isNaN(length)) {
  alert("Please Enter A Number")
  return null;
}
// create my confirms

var lowercase = confirm("Does the password contain lowercase characters?")


var uppercase = confirm("Does the password contain uppercase characters?")


var numeric = confirm("Does the password contain numeric characters?")


var special = confirm("Does the password contain special characters?")
// if user choose false, create a conditional
if (lowercase === false && uppercase === false && numeric === false && special === false) {
alert("Please select one character type")
return null;
}

// Create object to store user answers 
var userinfo = {
  length: length,
  lowercase: lowercase,
  uppercase: uppercase,
  numeric: numeric,
  special: special
}
return userinfo
}

function randomChar(arr){
  var randomI = Math.floor(Math.random() * arr.length )
  var randomValue = arr[randomI]
  return randomValue
}

// Create the password from info given
function generatePassword() {
var userAnswer = userGather()
var lowercaseGen = ['a','b','c','d','e', "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseGen = ['A','B','C','D','E', "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var numericGen = [0,1,2,3,4,5,6,7,8,9]
var specialGen = ['!','@','#','$','%','^','*','-']
var userChoice = []
var remaining = ['a','b','c','d','e', "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",'A','B','C','D','E', "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",0,1,2,3,4,5,6,7,8,9,'!','@','#','$','%','^','*','-']
var results =[]

// When user selects true it will give lowercase
if (lowercaseGen) {
  remaining = remaining.concat(lowercaseGen)
  userChoice.push(randomChar(lowercaseGen))
}

// When user selects true it will give uppercase
if (uppercaseGen) {
  remaining = remaining.concat(uppercaseGen)
  userChoice.push(randomChar(uppercaseGen))
}

// When user selects true it will givenumeric
if (numericGen) {
  remaining = remaining.concat(numericGen)
  userChoice.push(randomChar(numericGen))
}

// When user selects true it will give special
if (specialGen) {
  remaining = remaining.concat(specialGen)
  userChoice.push(randomChar(specialGen))
}

// Iterating the length of all the arrays  
for (let i = 0; i < userAnswer.length; i++) {
  let leftOver = randomChar(remaining)
  results.push(leftOver)
  
}
// Iterating the length of all
for (let i = 0; i < userChoice.length; i++) {
  results [i] = userChoice [i]
}
return results.join('')

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
