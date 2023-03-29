function preFizz(n) {
    let outputInArray = 0
    let array = [];
    for (let i = 0; i < n; i++) {
        outputInArray += n + 1 - n;

        array[i] = outputInArray;
    }

    return array;
}
console.log(preFizz(2));
