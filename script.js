const inputRange = document.getElementById("inputRange");
const rangeValue = document.getElementById("rangeValue");
const passwordBox = document.getElementById("passwordBox");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const genBtn = document.getElementById("genBtn");
const copyIcon = document.getElementById("copyIcon");


// Showing input Range value 
rangeValue.textContent = inputRange.value;
inputRange.addEventListener('input', () => {
  rangeValue.textContent = inputRange.value;
});

genBtn.addEventListener('click', () => {
  passwordBox.value = generatePassword();
})

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allNumbers = "0123456789";
const allSymbols = "~!@#$%^&*";

// Function to generate Password
function generatePassword() {
  let genPassword = "";
  let allChars = "";

  allChars += lowercase.checked ? lowerChars : "";
  allChars += uppercase.checked ? upperChars : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allSymbols : "";


  if (allChars == "" || allChars.length == 0) {
    return genPassword;
  }


  let i = 1;
  while (i <= inputRange.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }

  return genPassword;
}

copyIcon.addEventListener('click', () => {
  if (passwordBox.value != "" || passwordBox.value.length >= 1) {
    navigator.clipboard.writeText(passwordBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied";

    setTimeout(() => {
      copyIcon.innerHTML = "content_copy";
      copyIcon.title = "";
    }, 3000)
  }
});
