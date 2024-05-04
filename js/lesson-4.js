// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

// const list = document.createElement("ol");
// const btnAdd = document.createElement("button");
// const btnRemove = document.createElement("button");
// const input = document.createElement("input");
// btnAdd.textContent = "Add";
// btnRemove.textContent = "Remove";
// document.body.append(input, btnAdd, btnRemove, list);

// btnAdd.addEventListener("click", createItem);
// btnRemove.addEventListener("click", removeItem);

// function createItem() {
//   const inputValue = input.value.trim();
//   if (!inputValue) return;
//   const li = document.createElement("li");
//   li.textContent = inputValue;
//   list.append(li);
//   input.value = "";
//   btnRemove.disabled = false;

//   //   if (list.children.length % 2 === 0) {
//   //     li.style.backgroundColor = "yellow";
//   //   } else {
//   //     li.style.backgroundColor = "blue";
//   //   }

//   li.style.backgroundColor = list.children.length % 2 === 0 ? "yellow" : "blue";
// }

// function removeItem() {
//   if (!list.lastChild) {
//     btnRemove.disabled = true;
//     return;
//   }
//   list.lastChild.remove();
// }

// Створити невелику гру
// Спочатку на екрані з'являється якась фігура рандомного коліру в рандомному місті
// Натискаючі на фігуру, вона змінює свою форму, колір, місце розташування
// const forms = [
//   "width: 100px; height: 100px; border-width: 1px;",
//   "width: 100px; height: 100px; border-radius: 50%;",
//   "width: 150px; height: 100px; border-width: 1px;",
//   "width: 200px; height: 100px; border-radius: 100px / 50px; ",
//   "width: 150px; height: 100px; transform: skew(20deg)",
// ];
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// function randomither(max) {
//   return Math.floor(Math.random() * max);
// }
// const element = document.createElement("div");
// change();
// document.body.append(element);

// element.addEventListener("click", change);
// function change() {
//   element.style.cssText = forms[randomither(forms.length)];
//   element.style.backgroundColor = getRandomHexColor();
//   element.style.position = "absolute";
//   element.style.top = `${randomither(100)}%`;
//   element.style.left = `${randomither(100)}%`;
// }

// Створити червоний квадрат розміром 50 на 50 рх
// Додати кнопку "Зменшити", яка робить квадрат менше на 10 пікселів
// Додати кнопку "Збільшити", яка робить його більше на 10 пікселів.

// let size = 50;
// const markUp = `<button class="decr">Зменшити</button><button class="incr">Збільшити</button><div class="box" style="background-color: red; width: ${size}px; height: ${size}px"></div>`;
// document.body.insertAdjacentHTML("afterbegin", markUp);
// const buttonDecr = document.querySelector(".decr");
// const buttonIncr = document.querySelector(".incr");
// const boxElement = document.querySelector(".box");
// buttonDecr.addEventListener("click", funcDecr);
// buttonIncr.addEventListener("click", funcIncr);
// function funcDecr() {
//   size -= 10;
//   boxElement.style.width = `${size}px`;
//   boxElement.style.height = `${size}px`;
// }
// function funcIncr() {
//   size += 10;
//   boxElement.style.width = `${size}px`;
//   boxElement.style.height = `${size}px`;
// }


//  При натисканні на будь-який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.
//  "Ви вибрали <product> за <price>".

// const productTable = document.querySelector("#productTable");
// const productDetails = document.querySelector("#productDetails");

// productTable.addEventListener("click", showDetails);

// function showDetails(event) {
//   if (event.target.nodeName !== "TD") return;
//   const parent = event.target.parentNode;
//   const product = parent.firstElementChild.textContent;
//   const price = parent.lastElementChild.textContent;

//   productDetails.textContent = `Ви вибрали ${product} за ${price}`
// }


/*
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

const statList = document.querySelector(".statList");
let total = 0;

statList.addEventListener("click", foo);

function foo(event) {
    if (event.target.nodeName !== "BUTTON") return;

    const value = Number(event.target.dataset.number);
    total+=value;
    console.log(total);

}
