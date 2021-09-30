// ================================ Задание 1 ================================>

/**
 * Напишите функцию nodeChildCount которая получает на вход объект типа Node и возвращает число всех вложенных нодов,
 * аргумент deep указывать глубину подсчета если не указан то бесконечно.
 */

const div = document.createElement("div");
const p = document.createElement("p");
const span = document.createElement("span");

p.appendChild(span);
div.appendChild(p);

function nodeChildCount(node, depth = -1) {
  if (!node) {
    return 0;
  }

  let localDepth = depth;
  let quantityDescendant = -1;

  function walkTree(node) {
    quantityDescendant++;

    if (localDepth === 0) {
      return quantityDescendant;
    }

    localDepth--;

    if (node.children.length === 0) {
      return;
    } else {
      [...node.children].forEach((child) => {
        walkTree(child);
      });

      return quantityDescendant;
    }
  }

  return walkTree(node);
}

console.log(nodeChildCount(div)); // 2
console.log(nodeChildCount(div, 1)); // 1
console.log(nodeChildCount(div, 2)); // 2
