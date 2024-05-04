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
const forms = [
  "width: 100px; height: 100px; border-width: 1px;",
  "width: 100px; height: 100px; border-radius: 50%;",
  "width: 150px; height: 100px; border-width: 1px;",
  "width: 200px; height: 100px; border-radius: 100px / 50px; ",
  "width: 150px; height: 100px; transform: skew(20deg)",
];
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function randomither(max) {
  return Math.floor(Math.random() * max);
}
const element = document.createElement("div");
change();
document.body.append(element);

element.addEventListener("click", change);
function change() {
  element.style.cssText = forms[randomither(forms.length)];
  element.style.backgroundColor = getRandomHexColor();
  element.style.position = "absolute";
  element.style.top = `${randomither(100)}%`;
  element.style.left = `${randomither(100)}%`;
}
