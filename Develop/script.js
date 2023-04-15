// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Ask which criteria to include
  var capNeed = confirm("Should your password contain capital letters?");
  var lcNeed = confirm("Should your password contain lowercase letters?");
  var numNeed = confirm("Should your password contain numbers?");
  var specNeed = confirm("Should your password contain special characters?");
  var lengthNeed = prompt("How long should you password be? (8-128 characters)");

  console.log(capNeed, lcNeed, numNeed, specNeed, lengthNeed);
  console.log('U+0021');

// Generate password of x length
  function generatePassword(lengthNeed, specNeed, numNeed, lcNeed, capNeed) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    // var specials = [U+0021, ]

  }
  function checkPassword(){
// Multiple if statements to run different function checks based on what criteria is needed

// Function to check capital letters 

// Function to check lowercase letters

// Function to check numbers

// Function to check special characters

// If any of these do not pass, generate a new password and check again

  }
// This will output the value of password to HTML:
  passwordText.value = password;
  
}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
