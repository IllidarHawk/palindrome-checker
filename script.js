const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const paragraph = document.querySelector("p#result");

//Clear input value from non alphanumerical chars
const clearInput = () => {
  const regex = /[!@#$%^&*()_=+\-.,\s\\\/]/g;
  const onlyChars = userInput.value.replace(regex, "");
  return onlyChars;
}

function isPalindrome(input) {
  const length = input.length;
  const lastChar = length - 1;
  const inputArray = [...input]; 
  let isItPalindrome;

  for (let i = 0; i < length; i++) {
    if (inputArray[i] === inputArray[lastChar - i]) {
      isItPalindrome = true;
    } else {
      return false;
    }
  }
  return isItPalindrome;
}

 //Output result
const paragraphResult = (initialValue, textResult) => {
  paragraph.classList.remove("hidden");
  paragraph.classList.add("visible");
  
  paragraph.innerHTML = `${initialValue} <strong>${textResult}</strong> a palindrome`;
}

//Main func
const outputResult = () => {
  const originalValue = userInput.value;
  userInput.value = clearInput();
  userInput.value = userInput.value.toLowerCase();
  if (userInput.value == "" ) {
    alert("Please input a value");
  } else {
    if (isPalindrome(userInput.value)) {
      paragraphResult(originalValue, "is");
    } else {
      paragraphResult(originalValue, "is not");
    }
  }
}

checkBtn.addEventListener("click", outputResult);