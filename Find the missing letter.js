function findMissingLetter(array) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    alphabet.split('');
    array = array.join('')

    for (let i = 0; i < array.length; i++) {
        if (array[i] != alphabet[i]) {
            return alphabet[i]
        }
    }

}
