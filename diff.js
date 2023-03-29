function findDeletedNumber(arr, mixArr) {
    if (arr.length == mixArr.length) {
        return 0
    } else {
        mixArr.sort((a, b) => a - b);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != mixArr[i]) {
                return arr[i]
            }
        }
    }
}

console.log(findDeletedNumber([1, 2, 3, 4, 5, 6], [5, 9, 8, 7, 1, 10, 11]));


