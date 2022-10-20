document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    getTextElementValueById("btn-phone-plus");
    updatePhoneNumber(true);
  });

function getTextElementValueById(elementId) {
  const currentPhoneValue = document.getElementById(elementId).value;
  const currentPhoneString = parseInt(currentPhoneValue);
  return currentPhoneString;
}
