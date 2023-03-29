
function friend(friends) {

    const newarr = friends.filter(function (element) {
        return element.length == 4;
    })

    return newarr;
}
console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript