function getTextElementValueById(elementId) {
  const currentValue = document.getElementById(elementId).innerText;
  const currentString = parseInt(currentValue);
  return currentString;
}

function setTextElementValueById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}

function calculateSubTotal() {
  // calculate total
  const currentPhoneTotal = getTextElementValueById("phoneTotalPrice");
  const currentCaseTotal = getTextElementValueById("caseTotalPrice");

  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  setTextElementValueById("sub-total", currentSubTotal);
  console.log(currentSubTotal);

  // calculate tax
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementValueById("tax-amount", taxAmount);

  const finalAmount = currentSubTotal + taxAmount;
  setTextElementValueById("final-total", finalAmount);
}
