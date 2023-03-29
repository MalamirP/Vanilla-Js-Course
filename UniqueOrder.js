var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    const unique = [];

    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] != iterable[i + 1]) {
            unique.push(iterable[i])
        }

    }
    return unique.sort((a, b) =>
        a - b);
}
https://www.codewars.com/kata/54e6533c92449cc251001667/solutions/javascript