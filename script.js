// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwdLength = (length >=8 <=128);
//var charTypes = [uppercaseChar, lowercaseChar, numericChar, specialChar];
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var numericChar = "0123456789".split('');
var specialChar = ("!","@","#","$","%","^","&");
//create 4 arrays w characters //arrayvar uppercaseChar = ;
//upperCase,lowerCase,numeric,special

function pwdOptions(){ 
    //how long is pwd
    let pwdLength = prompt("Choose a length between 8 and 128 characters.");
      console.log(pwdLength);
        return pwdLength;}
    
    var lowercase = confirm ("Would you like to include lowercase characters?");
      
    var uppercase = confirm("Would you like to include uppercase characters?");

    var numeric= confirm("Would you like to include numbers?"); 

    var special = confirm("Would you like to include special characters?");    
    
     // if (lowercase===true) {
      
/*function name(params) {
    return param; 
}*/

function generatePassword() {
  let options = pwdOptions( 
  
  )
  return Math.floor(Math.random()*uppercaseChar.length)
  //console.log (generatePassword)
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var pwdArray= Array(length);
  passwordText.value = password;
for (i = 8; i< length; i++){
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);