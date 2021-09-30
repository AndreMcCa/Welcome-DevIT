// ================================ Задание 2 ================================>

/**
 * Напишите функцию генератор chunkArray которая возвращает итератор возвращающий части массива указанной длинны.
 */

function* chunkArray(array, count) {
  let begin = 0;
  let end = count;

  for (let i = 0; i < Math.ceil(array.length / count); i += 1) {
    if (i > 0) {
      begin += count;
      end += count;
    }

    yield array.slice(begin, end);
  }
}

const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(iterator.next()); // { value: [1,2,3], done: false }
console.log(iterator.next()); // { value: [4,5,6], done: false }
console.log(iterator.next()); // { value: [7,8], done: false }
console.log(iterator.next()); // { value: undefined, done: true }
