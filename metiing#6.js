function isSameLanguage(list) {
    for (let i = 1; i < list.length; i++) {
        if (list[i].language !== list[0].language) {
            return false;
        }
    }
    return true;
}