// Get Elements

const loanAmount = document.getElementById("loanAmount");
const interestRate = document.getElementById("interestRate");
const loanTenure = document.getElementById("loanTenure");

const calculateBtn = document.getElementById("calculateBtn");

const emiOutput = document.getElementById("emi");
const interestOutput = document.getElementById("interest");
const totalOutput = document.getElementById("total");

const errorMessage = document.getElementById("error");
const resultCard = document.getElementById("result");


// Calculate EMI

calculateBtn.addEventListener("click", () => {

    const principal = parseFloat(loanAmount.value);
    const annualRate = parseFloat(interestRate.value);
    const years = parseFloat(loanTenure.value);

    // Validation

    if (
        isNaN(principal) ||
        isNaN(annualRate) ||
        isNaN(years)
    ) {
        showError("Please fill all fields.");
        return;
    }

    if (
        principal <= 0 ||
        annualRate <= 0 ||
        years <= 0
    ) {
        showError("Values must be greater than zero.");
        return;
    }

    errorMessage.textContent = "";

    // EMI Formula

    const monthlyRate = annualRate / 12 / 100;

    const months = years * 12;

    const emi =
        principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months) /
        (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emi * months;

    const totalInterest =
        totalPayment - principal;

    // Display Results

    emiOutput.textContent =
        "₹" + emi.toFixed(2);

    interestOutput.textContent =
        "₹" + totalInterest.toFixed(2);

    totalOutput.textContent =
        "₹" + totalPayment.toFixed(2);

    resultCard.style.display = "block";
});


// Error Function

function showError(message) {

    errorMessage.textContent = message;

    resultCard.style.display = "none";
}