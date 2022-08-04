// Assignment Code
var generateBtn = document.querySelector("#generate");
// length of password should be 8 - 128
var getPasswordLength = () => {
  var passwordLength = parseInt(prompt("length of the password"));
  if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("pick a number between 8-128");
    return;
  }
  return passwordLength;
};
// criteria {lowercase, uppercase, number, and special characters}

var getPasswordCriteria = () => {
  var passwordLength = getPasswordLength();
  var totalString = "";
  if (confirm("lowercase letter!")) {
    totalString += "abcdefghijklmnopqrstuvwxyz";
  }
  if (confirm("uppercase letter!")) {
    totalString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (confirm("numbers!")) {
    totalString += "0123456789";
  }
  if (confirm("special characters!")) {
    totalString += "!/\#$%^&**():;@'<>/?=+_-`¬";
  }
  return { passwordLength, totalString};

}
// random choice
var generatePassword = () => {
  var passwordCriteria = getPasswordCriteria();
  var passwordArray = passwordCriteria.totalString.split("");
  console.log(passwordArray);
  var result = [];
  for (let i = 0; i < passwordCriteria.passwordLength; i++) {
    var key = Math.floor(Math.random() * passwordArray.length);
    var digit = passwordArray[key];
    result.push(digit);
  }
  console.log(password);
  return result.join("");
};
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector(`#password`);

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);


