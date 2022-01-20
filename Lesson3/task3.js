/*Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. 
Данная функция должна обязательно содержать проверку входных параметров, 
потому что принимать она может только числа.

```js
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number
*/

function f(n1, n2, n3) {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != 'number') {
            throw new Error('all parameters type should be a Number');
        }
       
        return (n1 - n2)/n3;
    }
}