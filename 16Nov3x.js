// // a, e, i, o, u,


// function disemvowel(str) {
//     let withoutVowels = [];
//     // let withoutVowels = '';

//     let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] != vowels[i]) {
//             withoutVowels.push(str[i]);
//         }
//     }
//     return withoutVowels.join('');
//     // return withoutVowels;
// }
// console.log(disemvowel(" "));

function disemvowel(str) {
    let withoutVowels = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u') {
            withoutVowels.push(str[i]);
        }
    }
    return withoutVowels.join('');
}
console.log(disemvowel("This website is for losers LoL!"));