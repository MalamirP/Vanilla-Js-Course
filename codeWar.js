function find_difference([a, b, c], [d, e, f]) {
    return Math.abs(a * b * c - d * e * f)
}
console.log(find_difference([1, 2, 3], [4, 5, 6]));