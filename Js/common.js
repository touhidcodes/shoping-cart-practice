function getTextElementValueById(elementId) {
  const currentPhoneValue = document.getElementById(elementId).innerText;
  const currentPhoneString = parseInt(currentPhoneValue);
  return currentPhoneString;
}

document.getElementById("remove").addEventListener("click", function () {
  const constValuePhone = document.getElementById("totalPhonePrice");
  constValuePhone = 1219;
});
