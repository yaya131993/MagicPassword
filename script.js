
var passwordLength = 10;
var userChoice = [];

const lower = ["a", "b", "c", "d", "e", "f"];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const upper = ["A", "B", "C", "D", "E", "F"];
const special = ["@", "!", "~", "#", "$", "&"];


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", getPrompts);


function generatePassword() {
  var password = "";
  for(var i = 0; i < userChoice.length; i ++) {
    var randomIndex = Math.floor(Math.random() * userChoice.length);
    password = password + userChoice[randomIndex];
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


function getPrompts() {
  userChoice = [];

  passwordLength = parseInt(prompt("How long do you want your password to be?"));

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8-128 characters long.");
    return false;
  }

  if (confirm("Do you want Uppercase letters?")) {
    userChoice = userChoice.concat(upper);
  }
  if (confirm("Do you want lowercase letters?")) {
    userChoice = userChoice.concat(lower);
  }
  if (confirm("Do you want numbers?")) {
    userChoice = userChoice.concat(num);
  }
  if (confirm("Do you want special letters?")) {
    userChoice = userChoice.concat(special);
  }
  
  generatePassword();


}
