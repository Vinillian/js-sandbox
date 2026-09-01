const users = [
    {
        name: 'Александр',
        age: 28
    },
    {
        name: 'Михаил',
        age: 30
    },
    {
        name: 'Василий',
        age: 40
    },
]

console.log('Объект это ссылочный тип данных,');
console.log('javascript просто так не может проверить эквивалентность объектов и выдает -1');
console.log(
    users.indexOf({name: 'Василий', age: 40}) // -1
);

console.log('Поэтому применяется функция findIndex');
console.log('Эл-т Василий находится под индексом 2');
// console.log(
//     users.findIndex((element, index, array) => {
//       if (element.name === 'Василий') {
//         return true // 2
//       } 
//     })
// );

console.log(
    users.findIndex((user) => {
      if (user.name === 'Василий') {
        return true // 2
      } 
    })
);