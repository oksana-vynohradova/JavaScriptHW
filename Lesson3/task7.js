/*Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей 
(чисел, на которое делится данное число начиная от 1 и заканчивая самим собой). 
Данная функция должна обязательно содержать проверку входного параметра, 
потому что принимать она может только число больше 0.

```js
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0
```
*/

function getDivisors(n) {
    if (typeof n != 'number') {
        throw new Error('parameter type is not a Number');
    } else if (n == 0) {
        throw new Error('parameter can\'t be a 0');
    } else if (n < 0) throw new Error('parameter can\'t be lower than 0');

    var array = [1];
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            array.push(i);
        }
    }
    array.push(n);
    return array;
}