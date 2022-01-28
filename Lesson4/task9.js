/*Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. 
Первым параметром функция принимает значение, которым заполнять массив, 
а вторым — сколько элементов должно быть в массиве.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

```javascript
arrayFill('x',5); // [x,x,x,x,x]
```
*/

function arrayFill(value, amt) {
    if (!['number', 'string', 'object'].includes(typeof value) 
    && !Array.isArray(value)) {
        throw new TypeError('first parameter type should be a number/a string/an object/an array');
    } else if (typeof amt !== 'number') {
        throw new TypeError('second parameter type should be a number');
    }

    let arr = [];
    for (let i = 0; i < amt; i++) {
        arr.push(value);
    }
    
    return arr;
}