function getTextElementValueById(elementId) {
  const currentValue = document.getElementById(elementId).innerText;
  const currentString = parseInt(currentValue);
  return currentString;
}

// document.getElementById("remove").addEventListener("click", function () {
//   const constValuePhone = document.getElementById("totalPhonePrice");

// });
