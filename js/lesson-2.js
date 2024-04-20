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
// const fruits = [
//   { name: "Яблуко", price: 45, quantity: 7 },
//   { name: "Апельсин", price: 60, quantity: 4 },
//   { name: "Банан", price: 125, quantity: 8 },
//   { name: "Груша", price: 350, quantity: 2 },
//   { name: "Виноград", price: 440, quantity: 3 },
//   { name: "Яблуко", price: 45, quantity: 7 },
// ];
// function calcTotalPrice(fruits, fruitName) {
//   let totalPrice = 0;
//   for (const fruit of fruits) {
//     if (fruit.name === fruitName) {
//       totalPrice += fruit.price * fruit.quantity;
//     }
//   }
//   if (totalPrice === 0) {
//     return `${fruitName} not found`;
//   }
//   return totalPrice;
// }
// console.log(calcTotalPrice(fruits, "Яблуко"));
// console.log(calcTotalPrice(fruits, "Яблук"));

//5. Напишіть скрипт керування особистим кабінетом інтернет банка
//Є об'єкт account в якому необхідно реалізувати
//методи для работи з балансом та історією транзакцій
//Типів транзакцій всього два.
//Можна покласти або зняти гроші з рахунка
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
//Кожна транзакція це об'єкт з властивостями id, type, amount
const account = {
  //поточний баланс рахунка
  balance: 0,
  //Історія транзакцій
  transactions: [],
  //Метод створює і повертає об'єкт транзакцій
  //Приймає сумму і тип транзакцій
  createTransaction(type, amount) {
    return {
      type,
      amount,
    };
  },

  //Метод відповідає за додавання сумми к балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає його в історію транзакцій
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
    transaction.id = Math.random();
    this.transactions.push(transaction);
  },
  //Метод відповідає за зняття сумми з балансу.
  //Приймає сумму транзакціи.
  //Визиває createTransaction для створення об'єкта транзакціи
  //після чого додає його в історю транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("недостатньо коштів на рахунку");
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
    this.transactions.push({ ...transaction, id: 111 });
  },
  //Метод повертає поточний баланс
  getBalance() {
    return `on the balance ist ${this.balance}`;
  },
  //Метод шукає і повертає об'єкт транзакціи по id
  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (id === item.id) {
        return item;
      }
    }
    return "transaction is not found!";
  },
  //Метод повертає кількіств коштів вказаного типу
  //транзакціи зі всієї історії транзакцій
  getTransactionType(type) {
    let total = 0;
    for (const item of this.transactions) {
      if (item.type === type) {
        total += item.amount;
      }
    }
    return total;
  },
};

account.deposit(345);
account.deposit(1260);
account.deposit(3);

account.withdraw(50);
account.withdraw(5000);

console.log(account);

console.log(account.getBalance());
console.log(account.getTransactionDetails(111));
console.log(account.getTransactionType(Transaction.DEPOSIT));

// ---------Home Work-----------

// 6. Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де зберігається
// name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// list() - повертає список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.)
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - зиінює ім'я контакта;
// const phonebook = {
//   contacts: [],
//   add(data) {},
//   list() {},
//   filtered(category) {},
//   delete(name) {},
//   updateName(oldName, newName) {},
//   generateId() {
//     return "#" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };
