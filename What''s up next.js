function nextItem(xs, item) {
    // TODO: Implement me
    for (let i = 0; i < xs.length; i++) {
        if (xs[i] == item) {
            return xs[i + 1]
        }
    }
    return undefined;
}
console.log(nextItem(("testing"), "t"));