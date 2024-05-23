const inputBillTotal = document.getElementById('billInput');
const inputPeopleTotal = document.getElementById('inputNumberOfPeople');
const buttons = document.querySelectorAll('.tip-percentage-btn');
console.log(buttons);
let currBillTotal = 0;
let tipPercentage = 0;

let inputBillActive = false;
let inputPeopleActive = false;
let btnActive = false;
let inputTipActive = false;

console.log(inputBillTotal.value);
console.log(inputPeopleTotal.value);

// update bill
// save inputBillTotal.value to variable currBillTotal
// check if inputBillTotal.value === currBillTotal
// if not equal
// set currBillTotal to inputBillTotal.value
// run update calculator fn


const checkCalculator = () => {
    console.log('updated!');
    let tip = parseFloat(currBillTotal) * parseFloat(tipPercentage);
    console.log('typeof tip:', typeof tip)
    console.log('tip:', tip)

    if (currBillTotal !== inputBillTotal.value) {
        console.log('calculator needs to be updated!')
    } else {
        console.log('calculator is updated!')
    }
}

checkCalculator();

// TIP CALCULATOR

// 

function handleTipBtnClick() {
    inputTipActive = true;
    console.log('clicked!');
}

buttons.forEach((button) => {
    button.addEventListener('click', handleTipBtnClick);
});

inputBillTotal.addEventListener('input', () => {
    currBillTotal = inputBillTotal.value;
    console.log(currBillTotal);
    if (inputBillTotal !== '') {
        inputBillActive = true;
    } else {
        checkCalculator();
    }
})