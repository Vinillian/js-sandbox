function summaring(a, b) {
    return a + b;
}

function minusing(a, b) {
    return a - b;
}

const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const buttonSum = document.getElementById('sumBtn');
const buttonMin = document.getElementById('minBtn');
const resultSpan = document.getElementById('result');

buttonSum.onclick = function() {
    const val1 = parseFloat(input1.value);
    const val2 = parseFloat(input2.value);
    resultSpan.textContent = summaring(val1, val2);
}

buttonMin.onclick = function() {
    const val1 = parseFloat(input1.value);
    const val2 = parseFloat(input2.value);
    resultSpan.textContent = minusing(val1, val2);
}