function printerError(s) {
    // your code
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] > "m") {
            count++;
        }
    }
    return count + "/" + s.length;
}

// https://www.codewars.com/kata/56541980fa08ab47a0000040