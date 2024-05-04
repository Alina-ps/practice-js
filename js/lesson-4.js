// Створити список
// Створити кнопки Add, Remove, які будуть змінювати склад списку
// Створити input, з якого отримаємо значення, що буде передано в li
// Парним лі вказати жовтий фон, непарним синій
// Використовуй createElement


const list = document.createElement("ol");
const btnAdd = document.createElement("button");
const btnRemove = document.createElement("button");
const input = document.createElement("input");
btnAdd.textContent = "Add"
btnRemove.textContent = "Remove"
document.body.append(input, btnAdd, btnRemove, list);

btnAdd.addEventListener("click", createItem);
function createItem() {
    const inputValue = input.value.trim();
    if (!inputValue)
        return;
    const li = document.createElement("li");
    li.textContent = inputValue;
    list.append(li);
    input.value = "";
};