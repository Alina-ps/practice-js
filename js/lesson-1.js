// //Використовуя функцію if...else,
// //напишіть код, який буде питати:
// //"Яка офіційна назва JavaScript?"
// //Якщо користувач вводить "ECMAScript",
// //то показати через alert: "Вірно!"
// //в противному випадку відобразити:"Не знаєте? ECMAScript!"

// // const answer = prompt("Яка офіційна назва JavaScript?");
// // if (answer === "ECMAScript") {
// //   alert("Вірно!");
// // } else {
// //   alert("Не знаєте? ECMAScript!");
// // }

// //Напишіть программу, яка отримує від користувача
// //число (кількість хвилин) и виводить у консоль
// //рядок у форматі годин та хвилин
// // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// // 70 === 01:10

// // const answer = prompt("Введіть кількість хвилин");
// // let hours = Math.floor(answer / 60);
// // let minutes = answer % 60;

// // hours = String(hours).padStart(2, "0");
// // minutes = String(minutes).padStart(2, "0");

// // console.log(`${hours}:${minutes}`);

// //Напишіть цикл, який виводить в консоль
// //числа от max до min по зменьшенню
// //Виведіть в консоль суму усіх парних чисел

// // function counter (max, min) {
// //     let sum = 0;
// //     for (let i = max; i >= min; i--) {
// //         console.log(i);
// //         if (i % 2 === 0) {
// //             sum += i;
// //         }
// //     }
// //     return sum;
// // }

// // console.log(counter (10, 1));

// // const max = 10;
// // const min = 1;
// // let counter = max;
// // let sum = 0;
// // while (counter >= min) {
// //     console.log(counter);
// //     if (counter % 2 === 0) {
// //         sum += counter;
// //     }
// //     counter -= 1;
// // }

// // console.log(sum);

// // Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// // значення '1', то у змінну result запишемо 'зима', якщо має значення
// // '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = prompt("Enter number from 1 to 4");
// function whichSeason(num) {
//   let result = "";
//   const numNumber = Number(num);
//   switch (numNumber) {
//     case 1:
//       result = "winter";
//       break;
//     case 2:
//       result = "spring";
//       break;
//     case 3:
//       result = "summer";
//       break;
//     case 4:
//       result = "autumn";
//       break;
//     default:
//       result = "Enter number from 1 to 4";
//   }
//   return result;
// }

// console.log(whichSeason(num));


//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера
//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"
//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// const login = prompt("Enter your login");
// console.log(login);
// if (login === "Адмін") {
//   const password = prompt("Enter your password");
//   // if (password === "Я головний") {
//   //   alert("Вітаю!");
//   // }
//   // else {
//   //   alert("Невірний пароль!");
//   // }

//   alert(password === "Я головний" ? "Вітаю!" : "Невірний пароль!");

// } else if (login === "" || login === null) {
//   alert("Скасовано");
   
// }
// else {
//   alert("Я вас не знаю");

// }

// В змінній minuteValue є число від 0 до 59.
// Визначте до якої чверті години входить
// це число(в першу, другу, треттю чи четверту).

// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);
// if(minuteValue <= 15) {
//   console.log(`${minuteValue} входить в першу чверть`);

// } else if(minuteValue > 15 && minuteValue <= 30) {
//   console.log(`${minuteValue} входить в другу чверть`);

// } else if(minuteValue > 30 && minuteValue <= 45) {
//   console.log(`${minuteValue} входить в третю чверть`);

// } else  {
//   console.log(`${minuteValue} входить в четверту чверть`);

// }


// const minuteValue = Math.floor(Math.random() * (59 - 0) + 0);
// if(minuteValue <= 15) {
//   console.log(`${minuteValue} входить в першу чверть`);

// } else if(minuteValue <= 30) {
//   console.log(`${minuteValue} входить в другу чверть`);

// } else if(minuteValue <= 45) {
//   console.log(`${minuteValue} входить в третю чверть`);

// } else  {
//   console.log(`${minuteValue} входить в четверту чверть`);

// }


//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// function check(number) {
//   if (typeof number !== "number") {
//   return "NaN"
// }
//   if (number % 3 === 0 && number % 5 === 0) {
//     return "fizzbuzz";
//   }
//   if (number % 3 === 0) {
//     return "fizz";
//   }
//   if (number % 5 === 0) {
//     return "buzz";
//   }
//   return "false";
// }

// console.log(check(15));



// Є рядок, який складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є літера 'a'.
// Якщо це так - виведіть 'Так', в іншому випадку - 'Ні'.


// const message = "bcde";
// if (message.startsWith("a")) {
//   alert("Так");
// } else {
//   alert("No");
// }