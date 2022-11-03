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
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача