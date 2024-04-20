// 2. Яким буде результат виклику функції?
// function f() {
//   console.log(this.name);
// }
// const foo = f.bind({ name: "Іван" }).bind({ name: "Петро" });
// foo();
// 3. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// function callAction(action) {
//   action();
// }
// callAction(product.showPrice.bind(product));
// callAction(() => console.log(this.price));

// 4. Функція askPassword приймає 2 колбека і викликає 1 із них в залежності від password
function askPassword(ok, fail) {
  let password = prompt("Password?");
  if (password === "admin") ok();
  else fail();
}
// Створи об 'єкт user з властивостю name і двома методами
// loginOk() і loginFail()
// ці методи виводять в консоль повідомлення у форматі
// "<name> logged in" та "<name> failed to log in" відповідно
// зроби виклик функції askPassword, прив'язавши в якості аргументів методи об'єкта
const user = {
  name: "Alice",
  loginOk() {
    console.log(`${this.name} logged in`);
  },
  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
