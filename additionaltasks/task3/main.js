//
// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends  = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]
if (friends.length >=3) {
    console.log('Array is big, which have 3 more elements')
} else if (friends.length <3) {
    console.log('array is small, which have less then 3 elements')
}
//
//
//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

let num1 = 2
let num2 = 11
let num3 = 6

if (num2 < num3 && num1 < num2){
    console.log('друге число - середнє')
}else if (num1 > num3 && num2 < num1){
    console.log('перше число - середнє')
}else if (num3 <num2 && num3 > num1){
    console.log('третє число - середнє')
}




//
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//
//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//
//
//
//
//
//
//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test1 = false
// if (test1 === true){
//     console.log('Вірно')
// }else {
//     console.log('Неправильно')
// }

let test2 = true
let result = (test2) ? 'Вірно' : `Неправильно`;
console.log(result)

//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let question = prompt('Яка офіційна назва JavaScript?')
if (question === 'ECMAScript') {
    console.log('Правильно!')
}else {
    console.log('Не знаєте? ECMAScript!')
}
//
//
//
//
//
//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let apart = prompt('Яка у вас квартира???')
if (apart >=1 && apart <=20){
    console.log(`Ваша квартира знаходиться в 1 під'їзді`)
}else if (apart >= 21 && apart <=48){
    console.log(`Ваша квартира знаходиться в 2 під'їзді`)
}else if (apart>=49 && apart <=90){
    console.log(`Ваша квартира знаходиться в 3 під'їзді`)
}

//
//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let number = +prompt('Введіть своє число')
if (number === 10){
    console.log('ВІРНО')
}else{
    console.log('НЕВІРНО')
}
//
//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temperature = prompt('яка температура повітря на дворі?')
if (temperature >=10 && temperature <=22){
    console.log('Йдемо вчитися')
}else {
    console.log('Сидимо вдома і вчимося ОНЛАЙН')
}
//
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let nums = +prompt('Введіть число')

switch (nums){
    case 1:
        console.log('Ваш приз - Авто');
        break;
    case 2:
        console.log('Ваш приз - Мото');
        break;
    case 3:
        console.log('Ваш приз - Телефон');
        break;
    case 4:
        console.log('Ваш приз - навушники');
        break;
    case 5:
        console.log('Ваш приз - Павербанк');
        break;
    default:
        console.log('Ваше число не вірне')


}