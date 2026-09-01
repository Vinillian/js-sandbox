const letters = ['А', 'Б', 'В', 'Г', 'Д'];

// for (let i = 0; i < letters.length; i++) {
//     console.log('index', i);
//     console.log(letters[i]);    
// }

// ['А', 'Б', 'В', 'Г', 'Д'].forEach((element, index, array) => {
//     console.log(element);
// })

// letters.forEach((element, index, array) => {
//     console.log(element);
// })

console.log('Выводим буквы');
letters.forEach((letter, index, array) => {
    console.log(letter);
})

console.log('Выводим сообщения с индексами');
letters.forEach((letter, index, array) => {
    console.log(`По индексу [${index}] находится элемент "${letter}"`);
})

console.log('Выводим массив');
letters.forEach((letter, index, array) => {
    console.log('array:', array);
})
