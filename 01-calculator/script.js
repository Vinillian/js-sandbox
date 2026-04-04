function calculator(arg1, arg2, operator) {
    
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    
    let result;
    
    switch(operator) {
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
                throw new Error('Division by zero');
            }
            result = arg1 / arg2;
            break;
        case '%':
            if (arg2 === 0) {
                throw new Error('Modulo by zero');
            }
            result = arg1 % arg2;
            break;
        default:
            throw new Error(`Unknown operator: ${operator}`);
    }
    
    return result;
}

const x = 4;
const y = 3;

console.log(calculator(x, y, '+'));
console.log(calculator(x, y, '-'));
console.log(calculator(x, y, '*'));
console.log(calculator(x, y, '/'));
console.log(calculator(x, y, '%'));

