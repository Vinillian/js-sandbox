const prices = [100, 200, 444, 500, 444, 777];

console.log('Дан массив: [100, 200, 444, 500, 444, 777]');

console.log('Поиск с помощью indexof:');

console.log('Индекс элемента 444');
console.log(prices.indexOf(444)); // 2

console.log('Элемент 111 отсутствует, показываем -1');
console.log(prices.indexOf(111)); // -1 - элемент отсутствует

console.log(
    `Существует ли 111 в prices:`,
    prices.indexOf(111) !== -1 // false
);

// дополнительный аргумент в .indexOf()
console.log('Поиск эл-та 444 с индекса 3 от началаконца ');
console.log(prices.indexOf(444, 3)); // 4
//начинаем поиск с индекса 3 от начала


console.log('Поиск  с помощью lastIndexOf:');

console.log('Поиск эл-та 444 с конца');
console.log(prices.lastIndexOf(444)); // 4
// производит поиск с конца

console.log('Поиск эл-та 444 с индекса 3 в левую сторону');
console.log(prices.lastIndexOf(444, 3)); // 4
// производит поиск с индекса 3 в левую сторону

