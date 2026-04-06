function calculator(a, b, operator) {
    
        const arg1 = Number(a);
        const arg2 = Number(b);

        if (isNaN(arg1) || isNaN(arg2)) {
    return 'Error: enter a number';
    }
        
    let result;
    
    switch(operator){
        case '+':
            result = arg1 + arg2;
            break;
        case '-':
            result = arg1 - arg2;
            break;
        case '*':
            result = arg1 * arg2;
            break;
        case '/':
            if (arg2 === 0) {
                return 'Error: division by zero';
            }
            result = arg1 / arg2;
            break;
        case '%':
            if (arg2 === 0) {
                return 'Error: modulo by zero';
            }
            result = arg1 % arg2;
            break;
        default:
           return `Error: unknown operator "${operator}"`;
    }

    return result;
        
}

while (true) {
    let x = prompt("Enter first number:");
    if (x === null) break;
    

    let y = prompt("Enter second number:");
    if (y === null) break;
        
    
    let operator = prompt("Enter operator:");
    if (operator === null) break;

    let result = calculator(x, y, operator);
    alert("Result: " + result);
}


alert("Calculator stopped.");