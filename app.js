console.log('JS Connected')
//Stuff for Opening and Closing window
const openCalcButton = document.querySelector('.openCalculator');
const calculatorBody = document.querySelector('.calculator-body');
const xCross = document.querySelector('.xCross');
const greyOverlay = document.querySelector('.grey-overlay')
//Button Opens Calculator
openCalcButton.addEventListener('click',()=>{
    calculatorBody.style.display = "block";
    greyOverlay.style.display="block";
});
//Cross Closes Calculator
xCross.addEventListener('click',()=>{
    calculatorBody.style.display = "none";
    greyOverlay.style.display = "none";
})

//Stuff for Slider Input
const sliderInput = document.getElementById('mortgageTerm');
const sliderValueText = document.getElementById('sliderValue');

//Update Value according to Slider
sliderInput.oninput = (()=>{
    let value = sliderInput.value
    sliderValueText.innerText = value;
})


//Selecting all Inputs for Validation
const deposit = document.getElementById('deposit');
const propertyPrice = document.getElementById('propertyPrice');
const interestRate = document.getElementById('interestRate');

//Selecting Form
const calcForm = document.querySelector('.calculator-form');

//Prevent Form submit, Validate, then Calculate
calcForm.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
    calculateMonthlyPayments();
});




//Form-validation
const validateInputs = () => {
    const depositVal = deposit.value.trim();
    const propertyPriceVal = propertyPrice.value.trim();
    const interestRateVal = interestRate.value.trim();

    //Deposit Validation
    if(depositVal > propertyPriceVal){
        setError(deposit, "Property Price must be higher than deposit!");
    } else if(depositVal === "") {
        setError(deposit, "This field is Required");
    } else {
        setSuccess(deposit)
    }
    //Property Price Validation
    if(propertyPriceVal < depositVal){
        setError(propertyPrice, "Property Price has to be higher than deposit");
    } else if(propertyPriceVal === ""){
        setError(propertyPrice, "This field is Required");
    } else {
        setSuccess(propertyPrice);
    }
    //Interest Validation
    if(interestRateVal > 100){
        setError(interestRate, "Interest Can't be above 100%");
    } else if(interestRateVal < 0){
        setError(interestRate, "Interest Can't be Negative!");
    } else {
        setSuccess(interestRate);
    }


    
}


//Set error
const setError = (element, message) => {
      const inputControl = element.parentElement.parentElement;
      const error = inputControl.querySelector('.error');
      error.innerText = message;

      inputControl.classList.add('error');
      inputControl.classList.remove('success');
};

//Set Success
const setSuccess = (element)=>{
    const inputControl = element.parentElement.parentElement;
    const error = inputControl.querySelector('.error');
    
    error.innerText = "";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}


//Select Value for Monthly payments
const monthlyPaymentsVal = document.getElementById('monthlyVal')
// Calculate Monthly Repayments
const calculateMonthlyPayments = ()=>{
    const loan = propertyPrice.value - deposit.value;
    const sliderValue = sliderInput.value.trim();
    const monthlyPayments = (interestRate.value/100/12)/(1 - Math.pow((1 + interestRate.value/100/12),(-sliderValue*12)) )*loan;
    monthlyPaymentsVal.innerText = monthlyPayments.toFixed(2);
}