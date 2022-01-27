/*Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
filter(arr, function(item, i, arr) {});
```
*/

function filter(arr, func) {
    if (!Array.isArray(arr)) {
        throw new Error('first parameter type should be an array');
    } else if (typeof func !== 'function') {
        throw new Error('second parameter type should be a function');
    }

    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            array.push(arr[i]);
        }
    }

    return array;
}