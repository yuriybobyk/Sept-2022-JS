// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min (a, b, c){
    if (a>b && b<c){
        console.log(b)
    }else if (b>a && a<c){
        console.log(a)
    }else if (b>c && c<a){
        console.log(a)
    }else {
        console.log('Error')
    }
}

min(12,4,11)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function max (a, b, c){
    if (b>a && b>c){
        console.log(b)
    }else if (a>b && a>c){
        console.log(a)
    }else if (c>b && c>a){
        console.log(c)
    }
    else {
        console.log('error')
    }
}

max(12,4,11)
// - створити функцію яка повертає найбільше число з масиву
let arr1 = [11,45,23,4]

function maxnum (array){
    let max = array[0];
    for (const item of array) {
        if (item>max){
            max = item
        }

    }
    return max;
}
console.log(maxnum(arr1))


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function average (array){
    let sum = 0;
    for (const item of array) {
        sum += item;

    }
    return sum/array.length;
}

console.log(average(arr1))
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minmax (...arguments) {
    let min = arguments[0];
    let max = arguments[0];
    for (const argument of arguments) {
        if (argument < min){
            min = argument;
        }
        if (argument > max){
            max = argument;
        }

    }
    console.log(max);
    return min;
}

minmax(1,3,6,12,78)
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let randomarr1 = []

function random (array){
    for (let i = 0; i < 20; i++) {
        randomarr1[i] = Math.floor(Math.random()*100);
    }
    console.log(randomarr1)
}

random()
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomlimit = []

function randomlimitfun (limit){
    for (let i = 0; i < limit; i++) {
        randomlimit[i] = Math.floor(Math.random()*limit);

    }
    console.log(randomlimit)
}

randomlimitfun(7)




// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let array2 = [1,2,3]

function reversearray (array){
    let newarray = [];
    for (let i = array.length - 1, j = 0; i >= 0; i--) {
        newarray[j++] = array[i];
        
    }
    return newarray;

}

console.log(reversearray(array2));
//
//
//
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function argu (...arguments){
    if (arguments.length === 2){
        console.log(arguments[0] + arguments[1]);;
    }else {console.log(arguments[0])}

}

argu('argoment1')
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
