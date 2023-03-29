function sortByLength(array) {
    // Return an array containing the same strings, ordered from shortest to longest
    return array.sort(function (a, b) {
        return a.length - b.length;
    })
};
console.log(sortByLength(['zdr', 'kpradasd', 'ndpvds']));