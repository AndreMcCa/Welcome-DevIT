// ================================ Задание 6 ================================>

/**
 * Дана матрица (двумерный массив), нужно написать функцию,
 * которая будет находить наименьшее значение,
 * после чего все нечетные значения в матрице будет умножать на это число.
 *
 * Исходная матрица:
 * [
 *  [5, 3, 6],
 *  [7, 11, 2],
 *  [15, 9, 4]
 * ]
 *
 * Результат выполнения функции:
 * [
 *  [10, 6, 6],
 *  [14, 22, 2],
 *  [30, 18, 4]
 * ]
 */

const matrix = [
  [5, 3, 6],
  [7, 11, 2],
  [15, 9, 4],
];

// ========= Basic =========>

{
  const transformationArray = function (array) {
    const min = Math.min(...array.flat(1));

    return array.map((arr) => {
      return arr.map((el) => el * min);
    });
  };

  console.table(transformationArray(matrix));
}

// ========= Итеративный подход =========>

{
  const transformationArray = function (array) {
    const resultArray = [];
    const min = Math.min(...array.flat(1));

    for (const arr of array) {
      const insertedArray = [];

      for (const el of arr) {
        insertedArray.push(el * min);
      }

      resultArray.push(insertedArray);
    }

    return resultArray;
  };

  console.table(transformationArray(matrix));
}
