function summaring(a, b) {
    return a + b;
}

const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const button = document.getElementById('sumBtn');
const resultSpan = document.getElementById('result');

button.onclick = function() {
    const val1 = parseFloat(input1.value);
    const val2 = parseFloat(input2.value);
    resultSpan.textContent = summaring(val1, val2);
}