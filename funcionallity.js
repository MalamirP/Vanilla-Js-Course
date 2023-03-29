const container = document.getElementsByClassName('container')
const firstName = document.getElementById('fname');
const secondName = document.getElementById('sname');
const button = document.getElementById('submit');


let onameName = '';
let familyName = '';
let fullName = [];

button.addEventListener('click', setNamesToLs);




function setNamesToLs() {
    if (firstName.value === '' || secondName.value === '') {
        return alert('Please write your names :) !');
    }
    fullName.push(firstName.value + ' ' + secondName.value)
    localStorage.setItem('names', JSON.stringify(fullName));
    // alert('You have been submitted your data :)');
}



// first we take first and second name
// check if we have name pass  and add to ls, if we dont alert you should write names
// on click to save first and second name to ls


// function checkingForPass() {
//     if (firstName.length === 0 && secondName.length === 0) {
//         return alert('Should write your name');
//     } else {
//         onameName += firstName.textContent;
//         familyName += secondName.textContent;
//     }
//     localStorage.setItem('Names', "onameName");
// }


