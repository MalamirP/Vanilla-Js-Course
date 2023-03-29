function minSum(arr) {

    // your code here
    // return arr.sort((a, b) => a - b).reduce((prev, curr) => prev + curr * arr.pop(), 0);
    return arr.reduce((prev, curr) => prev + curr * arr.pop());
}
console.log(minSum([5, 4, 3, 2]))
// 5 * 2 + 3 * 4