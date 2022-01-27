/*Напишите функцию `f` . Данная функция принимает один параметр: одноуровневый или 
многоуровневый массив. Возвращает данная функция сумму всех элементов на всех уровнях.

Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней 
не было найдено ни одного числа.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если на каком то уровне было найдено не число и не массив

```javascript
const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
f(arr); // 12
const arr2 = [[[[[1,2]]]]];
f(arr2); // 3
const arr3 = [[[[[1,2]]],2],1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[],3]]]];
f(arr5); // 3
```
*/

function f(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('parameter type should be an array');
    }

    let new_arr = arr.flat(Infinity);

    return new_arr.reduce(function(prev, current) {
        if (typeof current !== 'number') {
            throw new TypeError('all parameter types should be an array or a number');
        }
        return current + prev;
    });
}