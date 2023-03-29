function spinWords(string) {
    //TODO Have fun :)

    let splited = string.split(' ');

    for (let i = 0; i < splited.length; i++) {
        if (splited[i].length >= 5) {
            splited[i] = splited[i].split('').reverse().join('');
        }
    }
    return splited.join('');
}

https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript