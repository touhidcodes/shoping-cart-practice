function updateCaseNumber(isIncreased) {
  const previousCaseValue = document.getElementById("case-number-field").value;
  const previousCaseString = parseInt(previousCaseValue);

  let newCaseNumber;

  if (isIncreased == true) {
    newCaseNumber = previousCaseString + 1;
  } else {
    newCaseNumber = previousCaseString - 1;
  }
  document.getElementById("case-number-field").value = newCaseNumber;
  return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
  const caseTotalPrice = newCaseNumber * 59;
  document.getElementById("caseTotalPrice").innerText = caseTotalPrice;
}

// Case Count Increase
document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);

  updateCaseTotalPrice(newCaseNumber);
  calculateSubTotal();
});

// case Count decrease
document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
  });

document.getElementById("remove-case").addEventListener("click", function () {
  const resetUniversal = 0;
  const closeCase = 1219;

  document.getElementById("case-number-field").value = resetUniversal;
  document.getElementById("caseTotalPrice").innerText = resetUniversal;

  document.getElementById("sub-total").innerText = closeCase;
  document.getElementById("final-total").innerText = closeCase;
});
