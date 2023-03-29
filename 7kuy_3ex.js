// const arr = [1, 2, 3, 4, 6, 8, 9]

function sortItOut(arr) {
    //Write your own code!
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            console.log(arr[i]);
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] % 2 == 0) {
            console.log(arr[j]);
        }
    }


}
return (sortItOut([11, 22, 33, 44, 55, 55, 90.4, 4, 78]));


