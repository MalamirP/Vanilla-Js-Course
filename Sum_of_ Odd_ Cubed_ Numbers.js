function cubeOdd(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            total = undefined;
            return total;
        }
    }
    arr.map(function (value) {
        if (value % 2 !== 0) {
            value = value * value * value;
            return total = total + value
        }
    });
    return total;
}
console.log(cubeOdd([1, 2, 3, 4]))
// if ((typeof arr[i] != 'number'))
// https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript