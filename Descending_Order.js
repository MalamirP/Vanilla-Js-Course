function descendingOrder(n) {
    let toStr = String(n);
    let strToarr = toStr.split('').sort((a, b) => b - a).join('');
    return parseInt(strToarr);
}
console.log(descendingOrder(15));
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/solutions/javascript