// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1
// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// // styles[1] = 'Класика';
// const index = styles.indexOf('Блюз')
// if (index !== -1) {
//     styles[index] = 'Класика'
// }
// function logItems(array) {
//     for (let i = 0; i < array.length; i++){
//         console.log(`${i+1} - ${array[i]}`);
//     }

// };

// logItems(styles);

// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"

// const logins = ["Peter", "John", "Igor", "Sasha"];
// function checkLogins(array) {
// const login = prompt("enter you login")

// // for (const element of array){
// //     if(element === login){
// //         return "Доступ дозволено";
// //     }
// // }
// // return "Користувач не знайден";

// if(array.includes(login)){
//     return "Доступ дозволено";
// };
// return "Користувач не знайден";
// }

// console.log(checkLogins(logins));

//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//'<ключ>:<значення>' використовуя Object.keys() та for...of
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const userKeys = Object.keys(user);
// for (const key of userKeys) {
//     console.log(`${key}:${user[key]}`);
// }

//3. Напишіть ф-цію calcTotalPrice(fruits, fruitName),
//яка приймає массив об'єктів і
//рядок з назвою фрукта.
//Функція рахує і повертає загальну вартість фрукта
//з таким ім'ям, ціною та кількістю з об'єкта
const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
  { name: "Яблуко", price: 45, quantity: 7 },
];
function calcTotalPrice(fruits, fruitName) {
  let totalPrice = 0;
  for (const fruit of fruits) {
    if (fruit.name === fruitName) {
      totalPrice += fruit.price * fruit.quantity;
    }
  }
  if (totalPrice === 0) {
    return `${fruitName} not found`;
  }
  return totalPrice;
}
console.log(calcTotalPrice(fruits, "Яблуко"));
console.log(calcTotalPrice(fruits, "Яблук"));
