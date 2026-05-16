console.log("6"/"2"); //строки преобразуются в числа

//Number(value) явно преобразует к числу

let str = "123";
console.log(`Тип str: ${typeof str}`);

let num = Number(str);
console.log(`Тип num: ${typeof num}`);

//Если строка не приводится к числу то получится NaN
let age = Number("anything");
console.log(`Тип age с typeof: ${typeof age}`);
console.log(`Тип age без typeof: ${age}`);

/*
undefined - NaN
null - 0
tue/false - 1/0
string - пустая строка "" в 0, из непустой строки число, при ошибке NaN
*/
console.log();
console.log("При явном преобразовании Number(value)");
console.log( `"   123   " становится: ${Number("   123   ")}` ); // 123
console.log( `"123z" становится: ${Number("123z")}, строка не приводится к числу` );      // NaN (ошибка чтения числа на месте символа "z")
console.log( `true становится: ${Number(true)}` );        // 1
console.log( `false становится: ${Number(false)}` );       // 0
console.log( `null становится: ${ Number(null) }`);  
console.log( `undefined становится: ${ Number(undefined) }`);  