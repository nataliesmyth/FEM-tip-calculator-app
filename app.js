const inputFields = document.querySelector('.input');
const end = inputFields.value.length;

// move focus to end of input field
inputFields.setSelectionRange(end, end);
inputFields.focus();

// user data
const inputBillTotal = document.getElementById('billInput');
const inputPeopleTotal = document.getElementById('peopleInput');

const buttons = document.querySelectorAll('.tip-percentage-btn');
const customTip = document.getElementById('custom-tip');

let currBillTotal = 0;
let currPeopleTotal;
let tipPercentage = 0;
let tip;

// Update user interface
let tipResult = document.getElementById('tipResult');
let billResult = document.getElementById('billResult');

let inputBillActive = false;
let inputPeopleActive = false;
let btnActive = false;
let inputTipActive = false;

console.log(typeof parseInt(inputPeopleTotal.value));

const handleBillResultLength = () => {
    let regex = /\.+/g;
    let resultAmt = tip.toString();

    if (resultAmt.match(regex) !== null) {
        // resultAmt.split(' ');
        resultAmt = Array.from(resultAmt);
        console.log('resultAmt', resultAmt);
        let decimalPoint = resultAmt.indexOf('.');
        let afterDecimal = resultAmt.slice(decimalPoint);
        console.log('tip', tip)
        console.log('afterDecimal', afterDecimal)
        
        if (afterDecimal.length < 3) {
            tip = tip + '0';
            tipResult.innerText = '$' + tip;
        } 
        
        if (resultAmt.length > 5) {
            const beforeDecimal = resultAmt.slice(0, decimalPoint).join('');
            afterDecimal = afterDecimal.slice(0, 5).join('');
            tip = beforeDecimal + afterDecimal;
            tipResult.innerText = '$' + tip;
        }
    }
}

const checkCalculator = () => {
    tip = (parseFloat(currBillTotal) * parseFloat(tipPercentage) / 100);

    if (inputPeopleTotal.value > 1) {
        tip = tip / parseFloat(inputPeopleTotal.value);
    }
    tipResult.innerText = '$' + tip;

    handleBillResultLength();
}

checkCalculator();

function handleTipInput() {
    inputTipActive = true;
    checkCalculator();
}
    
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        tipPercentage = button.dataset.percent;
        handleTipInput();
    });
});


const handleBillInput = () => {
    currBillTotal = inputBillTotal.value;
    console.log('currBillTotal: ', currBillTotal)
    billResult.innerText = '$' + currBillTotal;
    if (inputBillTotal !== '') {
        inputBillActive = true;
        inputPeopleActive = true;
    } else {
        checkCalculator();
    }
}

const handlePeopleInput = () => {

    console.log(inputPeopleTotal.value);
    currPeopleTotal = inputPeopleTotal.value;
    console.log('currPeopleTotal: ', currPeopleTotal);

    if (inputPeopleTotal !== '') {

        inputPeopleTotal.innerText = '$' + currPeopleTotal;
        inputPeopleActive = true;

        if (parseInt(currPeopleTotal) === 0) {
            inputPeopleTotal.style.borderColor = 'red';
            inputPeopleTotal.style.outline = 'none';
            inputPeopleTotal.style.borderRadius = '5px';
        } else if (parseInt(currPeopleTotal) > 0) {
            inputPeopleTotal.style.borderColor = 'green';
            inputPeopleTotal.style.outline = 'none';
            inputPeopleTotal.style.borderRadius = '5px';
        }
    } else {
        checkCalculator();
    }
}


handlePeopleInput();


window.addEventListener('load', handleBillInput);
inputBillTotal.addEventListener('input', handleBillInput);
inputPeopleTotal.addEventListener('input', handlePeopleInput);


// customTip.addEventListener('input', handleTipInput);