function weatherInfo(temp) {
    // again always  use brackets if it's too long
    // it will break the code after it if is not formatted properly
    if (temp >= 0) { // always start with the positive case
        return (temp + " is above freezing temperature");
    }
    return (temp + " is freezing temperature");
}
console.log(weatherInfo(50))