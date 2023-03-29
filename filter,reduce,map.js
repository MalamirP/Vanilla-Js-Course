



// const sum = arr.map(function (value) {
//     return value + value;
// })
// console.log(sum);

//  ex 1
// const input = [1, 2, 3, 4, 5];

// const double = input.map(doubleIt)

// function doubleIt(value) {
//     return value * value
// }
// console.log(input);
// console.log(double);

// ex 2

// const input = [1, -4, 12, 0, -3, 29, -150];

// const sumPossitive = input
//     .filter(function (value) {
//         return value > 0;
//     }).reduce(function (acc, currtValue) {
//         return acc + currtValue;
//     }, 0);
// console.log(sumPossitive);

// ex.4
// const input = 'George Raymond Richard Martin';

// const abbreviate = input
//     .split(' ')
//     .map(function (word) {
//         return word[0];
//     })
//     .join('');
// console.log(abbreviate);

// const input = [
//     ['a', 'b', 'c'],
//     ['c', 'd', 'f'],
//     ['d', 'f', 'g'],
// ];

// const counting = input.flat().reduce((acc, currVal) => {
//     if (acc[currVal]) {
//         acc[currVal]++
//     } else {
//         acc[currVal] = 1;
//     }
//     return acc;
// }, []);
// console.log(counting);

// function factoriel(num) {
//     if (num < 0) {
//         return -1
//     } else if (num === 0) {
//         return 1;
//     } else {
//         return (num * factoriel(num - 1))
//     }
// }

// console.log(factoriel(5))

// function factoriel(n) {
//     for (let i = n - 1; i >= 1; i--) {
//         n *= i;
//     }
//     return n
// }
// console.log(factoriel(6))

// const input = 'George Raymond Richard Martin';

// const shord = input.split(' ')
//     .map(function (word) {
//         return word[0];
//     })
// // .join('');
// console.log(shord);


// const input = 'Every developer likes to mix kubernetes and javascript';

// const short = input.split(' ').map(function (char) {
//     if (char.length > 4) {
//         for (let i = 0; i < char.length; i++) {
//             return char[0] + (char.length - 2) + char[char.length - 1];
//         }
//     } else {
//         return char
//     }
// })
// console.log(short);



// const input = [
//     {
//         name: 'John',
//         age: 13
//     },
//     {
//         name: 'Mark',
//         age: 56,
//     },
//     {
//         name: 'Rachel',
//         age: 45,
//     },
//     {
//         name: 'Nate',
//         age: 67,
//     },
//     {
//         name: 'Jeniffer',
//         age: 65,
//     }
// ];
// const ageOfYoungestAndOldest = input.map(function (person) {
//     return person.age <= 13;
// }
// )



// const difInAge = input.map(function (person) {
//     if (person.age >= 67 || person.age <= 13) {
//         return person.age
//     }
// }).sort((a, b) => (b - a)).fill(0, 2).reduce(function (acc, value) {
//     return acc - value
// });

// console.log(difInAge)
// console.log(ageOfYoungestAndOldest.concat(difInAge))
