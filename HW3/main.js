//- Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('Введіть число')
if (x !== 0){
    console.log ('Вірно')
}
else {
    console.log('Невірно')
}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Введіть числове значення')
if (time > 0 && time <=15) {
    console.log('Перша чверть')
}
else if (time > 15 && time<=30){
    console.log('Друга Чверть')
}
else if (time > 30 && time<=45){
    console.log('Третя Чверть')
}
else if (time > 45 && time <=59){
    console.log('Четверта чверть')
}
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Введіть день')
if (day >= 1 && day <= 10){
    console.log('Перша декада місяця')
}
else if (day>= 11 && day <= 21){
    console.log('Друга декада місяця')
}
else if (day >= 21 && day <= 31){
    console.log('Третя декада місяця')
}

// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekday = +prompt('Введіть номер дня')
    switch (weekday){
        case 1:
            console.log('Monday')
            break;
        case 2:
            console.log('Tuesday')
            break;
        case 3:
            console.log('Wednesday')
            break;
        case 4:
            console.log('Thursday')
            break;
        case 5:
            console.log('Friday')
            break;
        case 6:
            console.log('Saturday')
            break;
        case 7:
            console.log('Sunday')
            break;
        default:
            console.log('??????')
    }
//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let a = +prompt('Введіть перше число')
let b = +prompt('Введіть друге число')
if (a>b){
    console.log(a)
}
else if (a<b){
    console.log(b)
}
else if (a===b){
    console.log('Числа рівні')
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let xxx = '' || 'default';
console.log(xxx)
if (xxx === null){
console.log('default')
}
else if (xxx === undefined){
    console.log('default')
}
else if (xxx === !!0 ){
    console.log('default')
}
else if (xxx === NaN){
    console.log('default')
}
