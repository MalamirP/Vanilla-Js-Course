function pairs(arr) {
    //..
    let result = [];

    // arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 === arr[i + 1] || arr[i] === arr[i + 1] + 1) {
            result++
        }
    }
    return result;
}

console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]));
https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript
??