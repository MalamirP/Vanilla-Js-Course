

function sumOfString(str, str1) {
    if (typeof str === 'number' || typeof str1 === 'number') {
        // console.log('String cant be the number') 
        return `${str} and ${str1} can't be numbers , and must be together `;
    }
    return `${str} ${str1}`;
}

console.log(sumOfString('One day I will be ', 'good dev'));