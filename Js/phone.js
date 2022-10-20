function updatePhoneNumber(isIncreased) {
  const previousPhoneValue =
    document.getElementById("phone-number-field").value;
  previousValueString = parseInt(previousPhoneValue);

  let newPhoneNumber;

  if (isIncreased) {
    newPhoneNumber = previousValueString + 1;
  } else {
    newPhoneNumber = previousValueString - 1;
  }
  document.getElementById("phone-number-field").value = newPhoneNumber;
  return newPhoneNumber;
}
