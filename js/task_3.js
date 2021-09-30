// ================================ Задание 3 ================================>

/**
 * Напишите функцию обертку которая на вход принимает массив функций и их параметров, а возвращает массив результатов их выполнения.
 *
 * !!!ВНИМАНИЕ!!! Количество аргументов исполняемой функции не ограничено!
 */

const f1 = (cb) => {
  cb(1);
};
const f2 = (a, cb) => {
  cb(a);
};
const f3 = (a, b, cb) => {
  setTimeout(() => cb([a, b]), 1000);
};

//===================================================================>

function bulkRun(array) {
  // регестрируем обещания
  const registrationPromise = array.map((arr) => {
    // возвращаем обещание
    return new Promise((resolve) => {
      // вызываем фунцию (arr[0]), которой передаем набор аргументов (...args[1]), и колбек который выполнится внутри вызываемой функции
      arr[0](...arr[1], (...args) => {
        // resolve вернёт во внешний код результат выполнения функции
        resolve(...args);
      });
    });
  });

  // ожидаем и возвращаем результат выполнения всех функций
  return Promise.all(registrationPromise);
}

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]],
]).then(console.log); // Output: [1, 2, [3, 4]]
