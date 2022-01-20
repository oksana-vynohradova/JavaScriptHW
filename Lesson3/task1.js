/*
Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. 
Данная функция должна обязательно содержать проверку входного параметра, 
потому что принимать она может только число.

```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
```
*/

function f(n) {
    if (typeof n === 'number') {
       return n ** 3;
    } else {
        throw new Error('parameter type is not a Number');
    }
}