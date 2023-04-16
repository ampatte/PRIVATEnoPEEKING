// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","W","X","Y","Z"];
var numeric = [0,1,2,3,4,5,6,7,8,9];
var special = ["!","@","#","$","%","^","&"];


function generatePassword() {
  
  var pwdLength = prompt("Choose a length between 8 and 128 characters.");

  if (pwdLength < 8 ) {
    alert("password must be greater than 8 characters");
      return;
  } else if (pwdLength > 128) {
      alert("password must be less than 128 characters");
        return;
    } 

  var passwordText = "";

//var confirm = true;
  var includeLowLetters = confirm ("Would you like to include lowercase letters?");
  if (includeLowLetters === true) {
    passwordText += lowLetters.join(''); 
  }
  var includeUpLetters = confirm ("Would you like to include uppercase letters?");
  if (includeUpLetters === true) {
      passwordText += upLetters.join('');
    }
  var includeNumeric = confirm("Would you like to include numbers?"); 
  if (includeNumeric === true) {
      passwordText += numeric.join('');
    }
  var includeSpecial = confirm("Would you like to include special characters?");  
  if (includeSpecial === true) {
        passwordText += special.join('');
      }

  var password = "";
  
  for (var i = 0; i < pwdLength; i++) {
    var randomChar = Math.floor(Math.random() * passwordText.length)
    password += passwordText[randomChar];
  
}
  return password;
}
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //var pwdArray = Array(pwdLength);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

