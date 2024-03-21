const passwordBox = document.getElementById("password");
const lenght = 20;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "012356789";
const symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value); // document.execCommand("copy");  is deprecated
}
