// PRIMITIVEV VALUES
// They are stored in stack if we change one variables which is equal to other that's not effected the other variables


// let score0ne = 50;
// let scoreTwo = score0ne;

// console.log(`scoreOne: ${score0ne}`, ` scoreTwo: ${scoreTwo}`);

// score0ne = 100
// console.log(`scoreOne: ${score0ne}`, ` scoreTwo: ${scoreTwo}`);




// reference values
// obj , array , math.methods
// If we change one reference values which is eqaul to the other they are both changed

// let userOne = { name: 'Ivan', age: 30 };
// let userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.age = 40;
// console.log(userOne, userTwo);

// const fib = n => {
//     if (n <= 1) return 1
//     console.log(fib(n - 1) + fib(n - 2))

// }
// console.log(fib(5));

// let arr = [1, 2, 3, 1];
// let arr1 = arr;
// arr = [5, 6, 7, 8];
// console.log(arr, arr1);

// let a = 5;
// let b = a;
// a = 10;
// console.log(a, b);

const myName = ['Oluwatobi Sofela'];

console.log([...myName]);