// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = generatePassword();

}

// Add event listener to generate button



function generatePassword(){
  var charArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '-', '?', '_', '@', '#', '%', '$', '^', '&', '*', '+', '=', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ]
  var criteriaArray = []; 
  var password = [];
  var passwordGenerator = window.prompt("How many characters would you like in the password")
  if (parseInt(passwordGenerator) > 128){
    window.alert("Too many characters, please try again");
  }
  else if (parseInt(passwordGenerator) < 8){
    window.alert("Not enough characters, please try again");
  }
  else{
    for (i = 0; i < parseInt(passwordGenerator); i++){
      password.push(" ");
    }
    var lowChar = window.prompt("Should the password include lowercase characters?(Enter y for Yes and n for No)");
    if (lowChar.toLowerCase() === "n"){
      charArray.remove('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    }
    var upChar = window.prompt("Should the password include uppercase characters?(Enter y for Yes and n for No)");
    if (upChar.toLowerCase() === "n"){
      charArray.remove('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    }
    var specChar = window.prompt("Should the password include special characters?(Enter y for Yes and n for No)");
    if (specChar.toLowerCase() === "n"){
      charArray.remove('!', '-', '?', '_', '@', '#', '%', '$', '^', '&', '*', '+', '=');
    }
    var numChar = window.prompt("Should the password include numeric characters?(Enter y for Yes and n for No)");
    if (numChar.toLowerCase() === "n"){
      charArray.remove('1', '2', '3', '4', '5', '6', '7', '8', '9', '0');
    }
    for (k = 0; k<criteriaArray.length; k++){

    }
    for (j=0; j <password.length ; j++){
      password[j] = charArray[getRandomInt(charArray.length)];
    }
    password = password.join('');
  }

  return password;
  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

generateBtn.addEventListener("click", writePassword);


// declare initial array for each criteria
// use a for loop to .prompt for each criteria asking yes or no
//    modify array based on which are determined to be used
//    use a for loop to iterate through the modified array and each selected criteria
//      for each criteria, use if-else statements to manipulate the password
//
//
//
// generateBtn will be whats used to display the completed, randomized password
