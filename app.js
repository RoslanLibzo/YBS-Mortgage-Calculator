console.log('JS Connected')
//Stuff for Opening and Closing window
const openCalcButton = document.querySelector('.openCalculator');
const calculatorBody = document.querySelector('.calculator-body');

//Stuff for Slider Input
const sliderInput = document.getElementById('mortgageTerm');
const sliderValueText = document.getElementById('sliderValue');

//Update Value according to Slider
sliderInput.oninput = (()=>{
    let value = sliderInput.value
    sliderValueText.innerText = value;
})

