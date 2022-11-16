// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square1 (a , b) {
    let result = a*b;
    console.log(result)
}
square1(10, 20)
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function square2 (PI, r){
    let result = PI*r**2
    console.log(result)
}
square2(3.14, 5)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function square3(PI, r, h) {
    let result = 2 * PI * r*(h + r);
    console.log(result)
}
square3(3.14,5,10)
// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayout(array) {
    for (const arrayElement of array) {
        console.log(arrayElement)
        
    }
}
arrayout([11,22,33])
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textwriter(text){
    document.write(`<p>${text}</p>`)
}
textwriter(`hello`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function writer1(text){
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
}
writer1(`some text`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function writer2(text, number ){
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`)

    }
    document.write(`</ul>`)

}
writer2(`world`, 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let elements1 = [11,22,33, `hello`, `world`, true, false]
function params(array){
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`<ul>`)
}
params(elements1)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let elements2 = [
    {
      id: 1,
      name: `Yurii`,
      age: 22
    },
    {
        id:2,
        name: `Maryna`,
        age: 22
    }
]
function users(array){
    for (const elements2Element of elements2) {
        document.write(`<div>${elements2Element.id}, ${elements2Element.name}, ${elements2Element.age}</div>`)

    }
}
users(elements2)
// - створити функцію яка повертає найменьше число з масиву
let numbers = [11, 14, 20]
function minimum(array){
    let min = array[0];
    for (const number of numbers) {
        if (number<min){
            min = number;
        }
    }
    return min;
}
console.log(minimum(numbers))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let numbers3 = [11,22,33]
function calc(array){

}