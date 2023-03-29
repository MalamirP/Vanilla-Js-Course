function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let result = 0;

    for (let i = 0; i < arrayOfSheep.length; i++)
        if (arrayOfSheep[i] == true)
            result++;

    return result;
}
// https://www.codewars.com/kata/54edbc7200b811e956000556/solutions