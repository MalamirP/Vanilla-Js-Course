// ex.1
// function hoopCount(n) {
//     //your code goes here
//     if (n >= 10) {
//         console.log('Great,now move on to tricks')
//         // return ("Great, now move on to tricks");
//     } else {
//         console.log('Keep at it until you get it')
//         // return ("Keep at it until you get it");
//     }
// }
// hoopCount(12);

// ex.2
// function opposite(number) {
//     return number * (-1);
// }

// ex.3
// function positiveSum(arr) {
//     arr.reduce(function (acc, curvalue) {
//         if (curvalue >= 1)
//             return acc + curvalue;
//     }, 0)
// }
// console.log(positiveSum([1, 2, 3, 4, 5]));

//  ex.4
// function century(year) {
//     if (year <= 100) {
//         return year / 100;
//     }
// }

// century(100)


// еX.5
// function findSmallestInt(args) {
//     args.sort(function min(a, b) {
//         return a - b;
//     })
//     return args[0]
// }
// console.log(findSmallestInt([6, 2, 3, 4, 1]))


// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     args.sort(function min(a, b) {
//         return a - b;
//     })
//     return args[0]
// }
// }

// ex.6 WORK in wardCode
// function litres(time) {
//     let litters = 0;
//     if (time < Number.POSITIVE_INFINITY)
//         litters = time / 2
//     return  litters;
// }

// console.log(Math.floor(litres(2)))

// function litres(time) {
//     let litters = 0;
//     if (time < Number.POSITIVE_INFINITY)
//         litters = Math.floor(time / 2)
//     return litters;
// }

// console.log(litres(10))


// ex.7
// function reversing(str) {
//     return str.split("").reverse().join("");
// }

// ex.8
// function addFive(num) {
//     var total = num + 5
//     return total;
// }
// addFive(5)

// ex.9
// function greet() {
//     return 'hello world!'
// }

// ex.10

// function lovefunc(flower1, flower2) {
//     // moment of tsruth
//     if (flower1 % 2 === 0 && flower2 % 2 === 0) {
//         return false
//     } else {
//         return true
//     }
// }
// lovefunc(967, 847)