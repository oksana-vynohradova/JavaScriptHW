/*Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc);
```
*/

function reduce(arr, func, acc) {
    if (!Array.isArray(arr)) {
        throw new TypeError('first parameter type should be an array');
    } else if (typeof func !== 'function') {
        throw new TypeError('second parameter type should be a function');
    } else if (typeof acc !== 'number' && typeof acc !== 'string') {
        throw new TypeError('third parameter type should be a number or a string')
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) continue;
        
        acc = func(acc, arr[i], i, arr);
    }

    return acc;
}

