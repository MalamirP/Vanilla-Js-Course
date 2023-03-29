function pigIt(str) {
    //Code here

    let splited = str.split(' ');

    let pig = splited.map(function (letter) {
        return letter.slice(1) + letter.slice(0, 1) + 'ay'
    });

    return pig.join(' ');
}    
