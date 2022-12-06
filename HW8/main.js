// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

let array = []

let user1 = new User(1, 'Vasya', 'Biba', 'vasylbiba@gmail.com', 380999467705)
let user2 = new User(2, 'Petya', 'Boba', 'petroboba@gmail.com', 380999467706)
let user3 = new User(3, 'Olya', 'Biba', 'olhabiba@gmail.com', 380999467707)
let user4 = new User(4, 'Ira', 'Boba', 'irynaboba@gmail.com', 380639467708)
let user5 = new User(5, 'Dima', 'Baba', 'dmytrobaba@gmail.com', 380639467709)
let user6 = new User(6, 'Lena', 'Bobo', 'olenabobo@gmail.com', 380639467710)
let user7 = new User(7, 'Vasya', 'Bobo', 'vasylbobo@gmail.com', 380739467711)
let user8 = new User(8, 'Yura', 'Bibo', 'yuriibibo@gmail.com', 380739467712)
let user9 = new User(9, 'Marta', 'Biba', 'martabiba@gmail.com', 380739467713)
let user10 = new User(10, 'Kolya', 'Biba', 'mykolabiba@gmail.com', 3806694677014)

array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
console.log(array)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let fil = array.filter((User)=>User.id%2 === 0)
console.log(fil)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sor = array.sort((a, b) => {
    return b.id - a.id
})
console.log(sor)

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку