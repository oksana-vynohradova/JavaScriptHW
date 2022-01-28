/*Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, 
а возвращает массив только в обратном порядке.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив

```javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
```
*/

function reverse(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('parameter type should be an array');
    } else if (arr.length == 0) {
        throw new Error('empty array');
    }

    let array = [];
    for (let i = 0; i < arr.length; i++) {
       array[arr.length - i - 1] = arr[i];
    }

    return array;
}
