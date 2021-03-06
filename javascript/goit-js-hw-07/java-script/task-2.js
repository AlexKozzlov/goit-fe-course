"use strict";
// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li после чего вставит все li за одну операцию в
// список ul.ingredients. Для создания DOM - узлов используй
// document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulIngredients = document.getElementById("ingredients");

const list = ingredients.map((el) => {
  const textLi = document.createElement("li");
  textLi.textContent = el;
  return textLi;
});
ulIngredients.append(...list);
