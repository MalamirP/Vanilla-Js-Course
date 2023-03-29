
function findShort(s) {
    let words = s.split(' ');
    let shortWord = words[0].length;
    let next

    for (let i = 0; i < words.length; i++) {
        next = words[i].length
        if (shortWord > next) {
            shortWord = next
        }
    }
    return shortWord;
}
console.log(findShort('Ripple Lisk Dash Monero Factom DarkCoin ProofOfWork BTC Lisk Steem ProofOfWork Factom Ripple BTC Waves Bitcoin Ethereum ProofOfStake DarkCoin'));

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript