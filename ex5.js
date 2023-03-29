function enough(capital, on_board, waiting) {

    if (capital >= on_board + waiting) {
        return 0
    }
    return on_board + waiting - capital;
}
console.log(enough(20, 35, 5))