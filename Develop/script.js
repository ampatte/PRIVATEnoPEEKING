// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwdLength = (">=8","<=128")

//create 4 arrays w characters 
//upperCase
//lowerCase
//numeric
//specialChar
// Write password to the #password input
function pwdOptions(){
//how long is pwd

let pwdLength = prompt("Choose a length between 8 and 128 characters.")
console.log(pwdLength)
return pwdLength
}
upperCase
//lowerCase
//numeric
specialChar
function generatePassword() {
  let options = pwdOptions( 
  
  )
  return Math.floor(Math.random()*upperCase.length)
  console.log (options)
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);