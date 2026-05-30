const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const buttonSum = document.getElementById('sumBtn');
const buttonMin = document.getElementById('minBtn');
const resultSpan = document.getElementById('result');


function calculate(operation) {
    const val1 = parseFloat(input1.value);
    const val2 = parseFloat(input2.value);
    let result;
    switch(operation) {
        case 'sum': result = val1 + val2; break;
        case 'min': result = val1 - val2; break;
        default: result = 'error';
    }

   resultSpan.textContent = result;
}

buttonSum.onclick = () => calculate('sum');
buttonMin.onclick = () => calculate('min');
