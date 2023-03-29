// // CALL METHODS

// const obj = { num: 2 };



// const addToThis = function (a, b, c) {
//     return this.num + a + b + c
// };

// console.log(addToThis.call(obj, 5, 1, 2));
// // function.call(obj,functionargumentes);

// // Apply methods

// const arr = [1, 2, 3];


// console.log(addToThis.apply(obj, arr));



// // BIND METHODS

// const obj2 = { num: 5 };

// const addToThis = function (a, b, c) {
//     return this.num + a + b + c
// };

// //
// const bound = addToThis.bind(obj2)
// console.log(bound(1, 2, 3));



// const objName = {
//     name: 'Georgi'
// }

// function addName(theOtherName) {
//     return this.name + ' ' + theOtherName;
// }

// const addNewName = addName.call(objName, 'Ivan')// in the brackets we can have more than one arguments, if we have them in the function arguments);
// console.log(addNewName);


// const objName = {
//     name: 'Georgi'
// }

// function addName(theOtherName) {
//     return this.name + ' ' + theOtherName;
// }

// const addNewName = addName.apply(objName, ['Ivan'])// in the brackets we can have more than one arguments, if we have them in the function arguments);
// console.log(addNewName);

// const objName = {
//     name: 'Georgi'
// }

// function addName(theOtherName) {
//     return this.name + ' ' + theOtherName;
// }

// const addNewName = addName.bind(objName)// now we had a function which is waiting for execute when we want
// console.log(addNewName('Ivan'));


// let person = {
//     name: 'Georgi'
// }

// function setProperties(age, country, phoneNumber) {
//     return this.name + ' is ' + age + ' old ' + ' and he is from ' + country + ' and his phone number is: ' + phoneNumber;
// }
// const addProperties = setProperties.call(person, '15', 'Bulgaria', '359123456789')
// console.log(addProperties);

// let person = {
//     name: 'Georgi'
// }

// function setProperties(age, country, phoneNumber) {
//     return this.name + ' is ' + age + ' old ' + ' and he is from ' + country + ' and his phone number is: ' + phoneNumber;
// }
// const addProperties = setProperties.apply(person, ['15', 'Bulgaria', '359123456789']);
// console.log(addProperties);

// let person = {
//     name: 'Georgi'
// }

// function setProperties(age, country, phoneNumber) {
//     return this.name + ' is ' + age + ' old ' + ' and he is from ' + country + ' and his phone number is: ' + phoneNumber;
// }
// const addProperties = setProperties.bind(person);
// console.log(addProperties('15', 'Bulgaria', '359123456789'));