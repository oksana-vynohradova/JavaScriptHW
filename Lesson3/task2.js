/*Напишите функцию `f` которая возвращает сумму всех параметров. 
Количество параметров может быть любым. Данная функция должна обязательно содержать 
проверку входных параметров, потому что принимать она может только числа.

```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
```
*/

function f(...params) {
    var sum = 0;
    for (var i = 0; i < params.length; i++) {
        if (typeof params[i] != 'number') {
            throw new Error('all parameters type should be a Number');
        }
        sum += params[i];
    }
    return sum;
}