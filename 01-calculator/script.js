function calculator(arg1, arg2, proposition) {
    switch(proposition){
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
            result = arg1 / arg2;
            break;
        case '%':
            const result = arg1 % arg2;
    }

    return result
}

let x = 4;
let y = 3;

console.log(calculator(x, y, "+"));
console.log(calculator(x, y, "-"));
console.log(calculator(x, y, "*"));
console.log(calculator(x, y, "/"));
console.log(calculator(x, y, "%"));