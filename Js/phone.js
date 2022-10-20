function updatePhoneNumber(isIncreased) {
  const previousPhoneValue =
    document.getElementById("phone-number-field").value;
  const previousPhoneString = parseInt(previousPhoneValue);
  console.log(previousPhoneValue);
  let newPhoneNumber;

  if (isIncreased == true) {
    newPhoneNumber = previousPhoneString + 1;
  } else {
    newPhoneNumber = previousPhoneString - 1;
  }
  document.getElementById("phone-number-field").value = newPhoneNumber;
  return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
  const phoneTotalPrice = newPhoneNumber * 1219;
  document.getElementById("phoneTotalPrice").innerText = phoneTotalPrice;
}

// Phone Count Increase
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
  });

// Phone Count decrease
document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
  });
