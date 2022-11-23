// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1len = `hello world`
console.log(str1len.length)

let str2len = `lorem ipsum`
console.log(str2len.length)

let str3len = `javascript is cool`
console.log(str3len.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1up = 'hello world'
console.log(str1up.toUpperCase())

let str2up = 'Lorem ipsum'
console.log(str2up.toUpperCase())

let str3up = 'javascript is cool'
console.log(str3up.toUpperCase())
// - Перевести до нижнього регістру настипні стрінгові значення
let str1low = 'HELLO WORLD'
console.log(str1low.toLowerCase())

let str2low = 'LOREM IPSUM'
console.log(str2low.toLowerCase())

let str3low = 'JAVASCRIPT IS COOL'
console.log(str3low.toLowerCase())
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirty = ' dirty string   '
console.log(dirty.length)
let substring = dirty.substring(1, 13);
console.log(substring)

//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
function stringToarray (str){
    let split = str.split(' ');
    console.log(split)
}
stringToarray(str)

//
//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let num = [10,8,-7,55,987,-1011,0,1050,0];

let stringNum = num.map(value => value.toString())
console.log(stringNum)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

function sortNums(arr, direction){
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b);
    } else if (direction === 'descending'){
        arr.sort((a, b) => b - a);
    }
    return arr;
}

console.log(sortNums(nums, 'ascending'))
console.log(sortNums(nums, 'descending'))
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

let sort = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
})
console.log(sort)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filteredcourses = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filteredcourses)
//
// описати колоду карт

let cardsuits = [
    {cardSuit: 'spade', color: 'black'},
    {cardSuit: 'diamond', color: 'red'},
    {cardSuit: 'heart', color: 'red'},
    {cardSuit: 'clubs', color: 'black'}
]

let cardvalues = [6,7,8,9,10, 'ace', 'jack', 'queen', 'king']
let carddeck = [];

for (const suits of cardsuits) {
    for (const values of cardvalues) {
        let cards = {
            cardSuit: suits.cardSuit,
            values: cardvalues,
            color: suits.color
        }
        carddeck.push(cards);
        
    }

}

console.log(carddeck)
// - знайти піковий туз

// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }