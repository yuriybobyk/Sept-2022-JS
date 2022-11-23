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
let deck = [
    {cardSuit:'Spade', value: 6, color:'Black'},
    {cardSuit:'Clubs', value: 6, color:'Black'},
    {cardSuit:'Hearts', value: 6, color:'Red'},
    {cardSuit:'Diamonds', value: 6, color:'Red'},
    {cardSuit:'Spade', value: 7, color:'Black'},
    {cardSuit:'Clubs', value: 7, color:'Black'},
    {cardSuit:'Hearts', value: 7, color:'Red'},
    {cardSuit:'Diamonds', value: 7, color:'Red'},
    {cardSuit:'Spade', value: 8, color:'Black'},
    {cardSuit:'Clubs', value: 8, color:'Black'},
    {cardSuit:'Hearts', value: 8, color:'Red'},
    {cardSuit:'Diamonds', value: 8, color:'Red'},
    {cardSuit:'Spade', value: 9, color:'Black'},
    {cardSuit:'Clubs', value: 9, color:'Black'},
    {cardSuit:'Hearts', value: 9, color:'Red'},
    {cardSuit:'Diamonds', value: 9, color:'Red'},
    {cardSuit:'Spade', value: 10, color:'Black'},
    {cardSuit:'Clubs', value: 10, color:'Black'},
    {cardSuit:'Hearts', value: 10, color:'Red'},
    {cardSuit:'Diamonds', value: 10, color:'Red'},
    {cardSuit:'Spade', value: 'Jack', color:'Black'},
    {cardSuit:'Clubs', value: 'Jack', color:'Black'},
    {cardSuit:'Hearts', value: 'Jack', color:'Red'},
    {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
    {cardSuit:'Spade', value: 'Queen', color:'Black'},
    {cardSuit:'Clubs', value: 'Queen', color:'Black'},
    {cardSuit:'Hearts', value: 'Queen', color:'Red'},
    {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
    {cardSuit:'Spade', value: 'King', color:'Black'},
    {cardSuit:'Clubs', value: 'King', color:'Black'},
    {cardSuit:'Hearts', value: 'King', color:'Red'},
    {cardSuit:'Diamonds', value: 'King', color:'Red'},
    {cardSuit:'Spade', value: 'Ace', color:'Black'},
    {cardSuit:'Clubs', value: 'Ace', color:'Black'},
    {cardSuit:'Hearts', value: 'Ace', color:'Red'},
    {cardSuit:'Diamonds', value: 'Ace', color:'Red'},
    {cardSuit: 'Joker', color: 'Red'},
    {cardSuit: 'Joker', color: 'Black'},

];
console.log(deck)
// - знайти піковий туз

let filter1 = deck.filter(value => value.cardSuit === 'Spade' && value.value === 'Ace')
console.log(filter1)

// - всі шістки

let filter2 = deck.filter(value => value.value === 6)
console.log(filter2)
// - всі червоні карти

let filter3 = deck.filter(value => value.color === 'Red')
console.log(filter3)
// - всі буби
let filter4 = deck.filter(value => value.cardSuit === 'Diamonds')
console.log(filter4)
// - всі трефи від 9 та більше

let filter5 = deck.filter(value => (value.value >= 9 && value.cardSuit === 'Clubs')  || (value.cardSuit === 'Clubs' &&  typeof value.value === 'string'))
console.log(filter5)
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

let reduce = deck.reduce((previousValue, currentValue) => {
    if (currentValue.cardSuit === 'Spade'){
        previousValue.spades.push(currentValue);
    }else if (currentValue.cardSuit === 'Diamonds'){
        previousValue.diamonds.push(currentValue);
    }else if (currentValue.cardSuit === 'Hearts'){
        previousValue.hearts.push(currentValue)
    }else if (currentValue.cardSuit === 'Clubs'){
        previousValue.clubs.push(currentValue)
    }
    return previousValue;
},{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});

console.log(reduce)