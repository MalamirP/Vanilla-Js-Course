function createPhoneNumber(numbers) {

    let firstThree = '(';
    firstThree += numbers.splice(0, 3).join('') + ') ';
    let theOther = numbers.splice(0, 3).join('');
    let result = firstThree + theOther + '-' + numbers.splice(0).join('');
    return result

}

// https://www.codewars.com/kata/525f50e3b73515a6db000b83