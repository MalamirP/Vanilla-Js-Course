// Dog.prototype.bark = function bark() {
//     return 'Woof!';
// }

// https://www.codewars.com/kata/5535572c1de94ba2db0000f6/solutions/javascript

const fib = n => {
    if (n <= 1) return 1
    return fib(n - 1) + fib(n - 2)
}
console.log(fib(5));