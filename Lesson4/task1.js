/*Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});
```
*/

function forEach(arr, func) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter type should be an array');
    } else if (typeof func !== 'function') {
        throw new Error('second parameter type should be a function');
    }

    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
}


