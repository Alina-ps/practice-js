// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement

const list = document.createElement("ol");
const btnAdd = document.createElement("button");
const btnRemove = document.createElement("button");
const input = document.createElement("input");
btnAdd.textContent = "Add";
btnRemove.textContent = "Remove";
document.body.append(input, btnAdd, btnRemove, list);

btnAdd.addEventListener("click", createItem);
btnRemove.addEventListener("click", removeItem);

function createItem() {
  const inputValue = input.value.trim();
  if (!inputValue) return;
  const li = document.createElement("li");
  li.textContent = inputValue;
  list.append(li);
  input.value = "";
  btnRemove.disabled = false;

  //   if (list.children.length % 2 === 0) {
  //     li.style.backgroundColor = "yellow";
  //   } else {
  //     li.style.backgroundColor = "blue";
  //   }

  li.style.backgroundColor = list.children.length % 2 === 0 ? "yellow" : "blue";
}

function removeItem() {
  if (!list.lastChild) {
    btnRemove.disabled = true;
    return;
  }
  list.lastChild.remove();
}
