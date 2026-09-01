console.log(`имена свойств из нескольких слов 
    заключеются в квадратные скобки []`);

let user = {};

console.log(`user properties is`); 
console.log( user );

// присваивание значения свойству
console.log( ` присваиваем значение свойству 
    user["likes birds"] = true;` )
user["likes birds"] = true;

console.log(`now user properties is `); 
console.log( user );

// получение значения свойства
console.log(` получаем значение свойства
     user["likes birds"]` );
console.log(user["likes birds"]); // true

// удаление свойства
console.log(` удаляем значение свойства
    delete user["likes birds"]; ` );
delete user["likes birds"];

console.log(` now user properties is `); 
console.log( user );
