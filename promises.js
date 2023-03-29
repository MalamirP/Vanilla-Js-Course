

// let promiseEror = new Promise(function name(resolve, reject) {
//     // Do to fail

//     reject(new Error('Eror')); ``
// });

// Promise States:
// - Pending: When execution starts;
// fulfilled: When resolves successfully;
// rejected: When promise rejects;

// If promise is fulfilled or rejected = Settled (everything is done,promises is working)

// Result which can be expect:

// -undefined: Initial phase when state is pending;
// -value: when promises resolves successfully
// -erorr: When promise rejects

// Methods which promise is working with
//  .then() - usually is using for fulfilled successfully
//  .catch() using for fulfilled failed(Eror caseE)
//  .finally()

// let promise = new Promise(function name(resolve, reject) {
//     // Do something here

//     let value = 'water';
//     resolve(value);
// });

// const cooking = () => {
//     promise.then(function (result) {
//         console.log(result);
//     })
// };

// cooking();


let promise = new Promise(function name(resolve, reject) {
    //    Rejected
    setTimeout(function () {
        reject(new Error('Failed'))
    }, 2000);
});

const cooking = () => {
    promise.catch(function (erorr) {
        // console.log(erorr);
        console.log(`OMG ${erorr.message}`);
    })
};

cooking();