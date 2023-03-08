// Assignment code here
function generatePassword() {
  const length = parseInt(prompt("Length of password (between 8 and 128)?"));
  if (length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128.");
    return "";
  }

  const hasNumbers = confirm("Would you like to use numbers?");
  const hasSymbols = confirm("Would you like to use symbols?");
  const hasLowercase = confirm("Would you like to use lowercase letters?");
  const hasUppercase = confirm("Would you like to use uppercase letters?");

  const characters = [];
  if (hasNumbers) characters.push("0123456789");
  if (hasSymbols) characters.push("!?'^%$#@&*()");
  if (hasLowercase) characters.push("abcdefghijklmnopqrstuvwxyz");
  if (hasUppercase) characters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  if (characters.length === 0) {
    alert("Please choose at least one character type.");
    return "";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const chars = characters[Math.floor(Math.random() * characters.length)];
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}

const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
});