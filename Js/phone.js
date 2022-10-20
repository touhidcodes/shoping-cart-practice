function updatePhoneNumber(isIncreased) {
  const previousPhoneValue =
    document.getElementById("phone-number-field").value;
  previousValueString = parseInt(previousPhoneValue);

  let newPhoneNumber;

  if (isIncreased == true) {
    newPhoneNumber = previousValueString + 1;
  } else {
    newPhoneNumber = previousValueString - 1;
  }
  document.getElementById("phone-number-field").value = newPhoneNumber;
  return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
  const phoneTotalPrice = newPhoneNumber * 1219;
  document.getElementById("totalPhonePrice").innerText = phoneTotalPrice;
}
// Phone Count Increase
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);
  });
// Phone Count decrease
document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);
  });
