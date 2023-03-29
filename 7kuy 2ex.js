
function sumTriangularNumbers(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += (i * (i + 1)) / 2;
    }
    return sum;
}
console.log(sumTriangularNumbers(6));
