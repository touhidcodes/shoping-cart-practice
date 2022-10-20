function updatePhoneNumber(isIncreased) {
  const previousPhoneValue =
    document.getElementById("phone-number-field").value;
  const previousPhoneString = parseInt(previousPhoneValue);

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

document.getElementById("remove-phone").addEventListener("click", function () {
  const resetUniversal = 0;
  const closePhone = 59;

  document.getElementById("phone-number-field").value = resetUniversal;
  document.getElementById("phoneTotalPrice").innerText = resetUniversal;

  document.getElementById("sub-total").innerText = closePhone;
  document.getElementById("final-total").innerText = closePhone;
});
