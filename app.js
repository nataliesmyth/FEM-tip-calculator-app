const inputBillTotal = document.getElementById('billInput');
const inputPeopleTotal = document.getElementById('inputNumberOfPeople');
const buttons = document.querySelectorAll('.tip-percentage-btn');
const customTip = document.getElementById('custom-tip');
console.log(buttons);
let currBillTotal = 0;
let tipPercentage = 0;

let tipResult = document.getElementById('tipResult');
let billResult = document.getElementById('billResult');
console.log(tipResult)

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
let tip;
const handleAddingZero = () => {
    console.log('handle adding zero function says hi!!!');
    let regex = /\.+/g;
    let resultAmt = tip.toString();
    console.log('resultAmt', resultAmt);
    console.log(resultAmt.match(regex));

    if (resultAmt.match(regex) !== null) {
        resultAmt.split(' ');
        resultAmt = Array.from(resultAmt);
        console.log(resultAmt);
        let sliceStart = resultAmt.indexOf('.')
        console.log(sliceStart)
        resultAmt = resultAmt.slice(sliceStart)
        console.log(resultAmt)
        if (resultAmt.length < 3) {
            tip = tip + '0';
            console.log(tip);
            tipResult.innerText = '$' + tip;
        }
    }
}

const checkCalculator = () => {
    tip = (parseFloat(currBillTotal) * parseFloat(tipPercentage) / 100);
    tipResult.innerText = '$' + tip;

    handleAddingZero();
    // if (currBillTotal !== inputBillTotal.value) {
    //     console.log('calculator needs to be updated!')
    // } else {
    //     console.log('calculator is updated!')
    // }
}

checkCalculator();

// TIP CALCULATOR

// 

function handleTipBtnClick() {
    inputTipActive = true;
    console.log('tip btn clicked!');
    checkCalculator();
}

// buttons.forEach((button) => {
    //     button.addEventListener('click', handleTipBtnClick);
    // });
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.dataset.percent);
            tipPercentage = button.dataset.percent;
            console.log('typeof tipPercentage: ',typeof tipPercentage)
            handleTipBtnClick();
    });
});

inputBillTotal.addEventListener('input', () => {
    currBillTotal = inputBillTotal.value;
    billResult.innerText = '$' + currBillTotal;
    console.log(currBillTotal);
    if (inputBillTotal !== '') {
        inputBillActive = true;
    } else {
        checkCalculator();
    }
})

// customTip.addEventListener('input', handleTipBtnClick);