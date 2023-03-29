function rowWeights(array) {
    let team1_Weights = [];
    let team2_Weights = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            array[i]++
        }
        team2_Weights.push(array[i]);
    }
}
console.log(rowWeights([14, 27, 49]));