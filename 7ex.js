function grow(x) {

    let sum = 1;

    for (let i = 0; i < x.length; ++i) {
        sum *= x[i];
    }
    return sum;
}
console.log(grow([1, 2, 3, 4]))
// Output:
// The product is: 25200 