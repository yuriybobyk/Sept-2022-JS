//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [100, 200, 300, 'book', 'author', 'genre', true, false, 'skills', 'object']
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Harry Potter',
    pageCount: 420,
    genre: 'fantasy'

}
console.log(book1)
let book2 = {
    title: 'Kobzar',
    pageCount: 600,
    genre: 'poetry'
}
console.log(book2)
let book3 = {
    title: 'Medallion of 3 snakes',
    pageCount: 450,
    genre: 'fantasy'
}
console.log(book3)
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book4 = {
    title: 'Harry Potter',
    pageCount: 420,
    genre: 'fantasy',
    authors:[{
        name: 'Joanne Rowling',
        age: 57,
    }]
}
console.log(book4)
let book5 = {
    title: 'Kobzar',
    pageCount: 600,
    genre: 'poetry',
    authors: [{
        name: 'Taras Schevchenko',
        age: 47,
    }]
}
console.log(book5)

let book6 = {
    title: 'Medallion of 3 snakes',
    pageCount: 450,
    genre: 'fantasy',
    authors: [{
        name: 'Andrii Novik',
        age: 32,
    }]
}
console.log(book6)
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Andrii', username: 'Andrew', password: 'qwerty'},
    {name: 'Olya', username: 'Olyiia', password: 111111},
    {name: 'Taras', username: 'Tarik', password: 'zxccxz'},
    {name: 'Yurii', username: 'Yuriy', password: 'zxcqwe'},
    {name: 'Vitalii', username: 'Vetal', password: 204060},
    {name: 'Sergiy', username: 'Sergo', password: 'index'},
    {name: 'Vasyl', username: 'Vasya', password: 501502},
    {name: 'Oksana', username: 'Oks', password: 123456},
    {name: 'Svitlana', username: 'Lana', password: 'lanos'},
    {name: 'Maryna', username: 'Maryna', password: 'zxctyu'},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);