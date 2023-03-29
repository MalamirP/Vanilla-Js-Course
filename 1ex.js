function repeatStr(times, string) {
    let multiString = '';
    for (let i = 0; i < times; i++) {
        multiString += string;
    }
    return multiString
}

console.log(repeatStr(3, '*'));
