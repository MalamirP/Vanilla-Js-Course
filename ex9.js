// function switchItUp(number) {
//     // wtf, is this finished?
//     // use switch-case insteade, this usage of else if is worse
//     if (number == 0) {
//         return 'Zero';
//     }
//     else if (number == 1) {
//         return 'One';
//     }
//     else if (number == 2) {
//         return 'Two';
//     }
//     else if (number == 3) {
//         return 'Three';
//     }
//     else if (number == 4) {
//         return 'Four';
//     }
//     else if (number == 5) {
//         return 'Five';
//     }
//     else if (number == 6) {
//         return 'Six';
//     }
//     else if (number == 7) {
//         return 'Seven';
//     }
//     else if (number == 8) {
//         return 'Eight';
//     }
//     else if (number == 9) {
//         return 'Nine'
//     }
//     // there is no default case and for < 9 throws undefined????

// }
// console.log(switchItUp(10));

function switchItUp(number) {
    switch (number) {
        case 0:
            number = 'Zero';
            break;

        case 1:
            number = 'One';
            break;
        case 2:
            number = 'Two';
            break;

        case 3:
            number = 'Three';
            break;
        case 4:
            number = 'Four';
            break;

        case 5:
            number = 'Five';
            break;
        case 6:
            number = 'Six';
            break;
        case 7:
            number = 'Seven';
            break;

        case 8:
            number = 'Eight';
            break;

        case 9:
            number = 'Nine';
            break;

        case 10:
            number = 'Ten';
            break;

        default:
            return 'numbers cant  be > 10 ';
    }
    return number;
}
console.log(switchItUp(1));