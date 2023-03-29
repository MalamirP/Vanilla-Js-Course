function pairs(arr) {
    //..
    let result = [];

    //     arr.sort((a, b) => b-a)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 === arr[i + 1] || arr[i] === arr[i + 1] + 1) {
            result++
        }
    }
    return result;

};
console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]));