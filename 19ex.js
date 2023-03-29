function gooseFilter(birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    return birds.filter(e => !geese.includes(e));

};
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));

// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7