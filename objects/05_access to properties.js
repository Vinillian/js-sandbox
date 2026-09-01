const prompt = require('prompt-sync')();
let user = {
  name: "John",
  age: 30
};

let key = prompt("Осуществите ввод данных:");
console.log( user[key]);

key = "name";
console.log( user.key); // undefined