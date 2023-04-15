// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Ask which criteria to include

// Generate password of x length

// Multiple if statements to run different function checks based on what criteria is needed

// Function to check capital letters 

// Function to check lowercase letters

// Function to check numbers

// Function to check special characters

// If any of these do not pass, generate a new password and check again


// This will output the value of password to HTML:
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
