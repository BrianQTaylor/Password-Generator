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
// if user choose false xcreat a conditional
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
}


// Create the password from info given
function generatePassword() {
var userAnswer = userGather()
var lowercaseGen = "abcdefghijklmnopqrstuvwxyz"
var uppercaseGen = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericGen = "0123456789"
var special = "!@#$%^&*"

return lowercaseGen[math.floor(math.random() * length)]
} 

console.log(generatePassword)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
