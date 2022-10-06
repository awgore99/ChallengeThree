// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = generatePassword();

}


// function to generate the password
function generatePassword(){
  //Array of all potential characters to be used
  var charArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '-', '?', '_', '@', '#', '%', '$', '^', '&', '*', '+', '=', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
  // Array of characters to actually be used
  var newCharArray = [];
  // array to store characters for password
  var password = [];
  // initial window prompt to ask for number of needed characters
  var passwordGenerator = window.prompt("How many characters would you like in the password")
  //checking number of characters
  if (parseInt(passwordGenerator) > 128){
    window.alert("Too many characters, please try again");
  }
  else if (parseInt(passwordGenerator) < 8){
    window.alert("Not enough characters, please try again");
  }
  else{
    // add elements to password array as placeholders
    for (i = 0; i < parseInt(passwordGenerator); i++){
      password.push(" ");
    }
    //Checking for each criteria, and removing undesired characters
    var lowChar = window.prompt("Should the password include lowercase characters?(Enter y for Yes and n for No)");
    if (lowChar.toLowerCase() === "n"){
      newCharArray = charArray.splice(0, 25) + charArray.splice(51, charArray.length);
    }
    var upChar = window.prompt("Should the password include uppercase characters?(Enter y for Yes and n for No)");
    if (upChar.toLowerCase() === "n"){
      newCharArray = charArray.splice(26, charArray.length);
    }
    var specChar = window.prompt("Should the password include special characters?(Enter y for Yes and n for No)");
    if (specChar.toLowerCase() === "n"){
      newCharArray = charArray.splice(0, 50) + charArray.splice(65, charArray.length);
    }
    var numChar = window.prompt("Should the password include numeric characters?(Enter y for Yes and n for No)");
    if (numChar.toLowerCase() === "n"){
      newCharArray = charArray.splice(0, 64);
    }
    // assign desired characters to the password array
    for (j=0; j <password.length ; j++){
      password[j] = newCharArray[getRandomInt(newCharArray.length)];
    }
    // joining characters to make one password string
    password = password.join('');
  }

  return password;
  
}
// Random number generator
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// Event listener to initialize button and call the writePassword function
generateBtn.addEventListener("click", writePassword);

