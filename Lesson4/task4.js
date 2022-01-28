/*Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
```
*/

function some(arr, func) {
    if (!Array.isArray(arr)) {
        throw new TypeError('first parameter type should be an array');
    } else if (typeof func !== 'function') {
        throw new TypeError('second parameter type should be a function');
    }

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            return true;
        }
    }

    return false;
}