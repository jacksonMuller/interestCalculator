const principal = document.querySelector("#principal");
const interestRate = document.querySelector("#interestRate");
const compoundNum = document.querySelector("#timesCompounded");
const totalYears = document.querySelector("#years");

//Output values:
const compoundTotal = document.querySelector("#compoundTotal");

//Add all event listeners:
principal.addEventListener("input", calculateCompoundInterest);
interestRate.addEventListener("input", handleInterestRateChange);
compoundNum.addEventListener("input", calculateCompoundInterest);
totalYears.addEventListener("input", calculateCompoundInterest);

//Add function to calculate compound interest:

function calculateCompoundInterest() {
  const P = parseFloat(principal.value);
  const r = parseFloat(interestRate.value) / 100;
  const n = parseFloat(compoundNum.value);
  const t = parseFloat(totalYears.value);

  if (P && r && n && t) {
    const A = P * Math.pow(1 + r / n, n * t);
    compoundTotal.textContent = `Future Value: $${A.toFixed(2)}`;
  } else {
    compoundTotal.textContent = "Future Value: -";
  }
}

// Function to handle interest rate slider changes
function handleInterestRateChange() {
  const currentRate = parseFloat(interestRate.value).toFixed(2);
  aprText.textContent = `${currentRate}%`;
  calculateCompoundInterest();
}
