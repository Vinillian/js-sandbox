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
            result = arg1 % arg2;
    }

    return result
}

x = 4;
y = 3;

console.log(calculator(x, y, "+"));
console.log(calculator(x, y, "-"));
console.log(calculator(x, y, "*"));
console.log(calculator(x, y, "/"));
console.log(calculator(x, y, "%"));