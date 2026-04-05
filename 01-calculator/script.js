function calculator(arg1, arg2, operator) {
    
    if (typeof arg1 != 'number' || typeof arg2 != 'number') {
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

let x = +prompt("Enter first number:");
let y = +prompt("Enter second number:");
let operator = prompt("Enter operator:");

alert(calculator(x, y, operator));