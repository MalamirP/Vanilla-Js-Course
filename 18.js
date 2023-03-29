function removeSmallest(numbers) {
    // throw "TODO: removeSmallest";

    let min = Math.min(...numbers);
    console.log(min);
    return numbers.filter((e) => e !== min);
}
console.log(removeSmallest([1, 2, 3, 4, 5]));
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b