function sortByHeight(a) {
    //coding and coding..

    for (let i = 0; i < a.length; i++) {
        a.sort(function (b, v) {
            if (b == -1) {
                return b
            }
            return b - v
        })
    }
    return a
}

// https://www.codewars.com/kata/589577f0d1b93ae32a000001/train/javascript