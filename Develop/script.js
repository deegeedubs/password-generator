// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // Ask which criteria to include
  var capNeed = confirm("Should your password contain capital letters? OK for yes, Cancel for no.");
  var lcNeed = confirm("Should your password contain lowercase letters? OK for yes, Cancel for no.");
  var numNeed = confirm("Should your password contain numbers? OK for yes, Cancel for no.");
  var specNeed = confirm("Should your password contain special characters? OK for yes, Cancel for no.");
  var lengthNeed = prompt(
    "How long should you password be? (8-128 characters)",
    "8"
    );
    
    var passString = "";
    var checkCap = false;
    var checkLow = false;
    var checkNum = false;
    var checkSpec = false;

  generatePassword();

  // Generate password of x length
  function generatePassword() {
    // Define the characters used for each stipulation
    const letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const capitals = [];
    for (var i = 0; i < letters.length; i++) {
      capitals.push(letters[i].toUpperCase());
    }
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const specials = [
      "`",
      "!",
      '"',
      "#",
      "$",
      "%",
      "&",
      "'",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "?",
      "@",
      "[",
      "\\",
      "]",
      "^",
      "_",
      "{",
      "|",
      "}",
      "~",
    ];

    // Determine the character pool to generate the password from
    const charPool0 = [];
    var charPool = [];

    if (lcNeed === true) {
      charPool = charPool0.concat(letters);
    }
    if (capNeed == true) {
      charPool = charPool.concat(capitals);
    }
    if (numNeed == true) {
      charPool = charPool.concat(numbers);
    }
    if (specNeed == true) {
      charPool = charPool.concat(specials);
    }

    // Create a new array of randomly chosen characters from the character pool
    const passArray = [];
    for (var i = 0; i < lengthNeed; i++) {
      passArray.push(charPool[Math.floor(Math.random() * charPool.length)]);
    }
    // convert to string and check
    passString = passArray.join("");

    checkPassword();

    function checkPassword() {
      // Multiple if statements to run different function checks based on what criteria is needed
      // Check capital letters
      for (var i = 0; i < capitals.length; i++) {
        if (passArray.includes(capitals[i])) {
          checkCap = true;
          break;
        }
      }

      // Function to check lowercase letters
      for (var i = 0; i < letters.length; i++) {
        if (passArray.includes(letters[i])) {
          checkLow = true;
          break;
        }
      }
      
      // Function to check numbers
      for (var i = 0; i < numbers.length; i++) {
        if (passArray.includes(numbers[i])) {
          checkNum = true;
          break;
        }
      }

      // Function to check special characters
      for (var i = 0; i < specials.length; i++) {
        if (passArray.includes(specials[i])) {
          checkSpec = true;
          break;
        }
      }
    }

    // If any of these do not pass, generate a new password and check again
    if ((capNeed&&(!checkCap))||(lcNeed&&(!checkLow))||(numNeed&&(!checkNum))||(specNeed&&(!checkSpec))){
      generatePassword();
    } 
  }
  
  password = passString;
  

  // This will output the value of password to HTML:
  passwordText.value = password;
}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
