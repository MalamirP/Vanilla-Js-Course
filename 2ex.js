

function zero_fuel(distance_to_pump, mpg, fuel_left) {
    return mpg * fuel_left >= distance_to_pump;
}
console.log(zero_fuel(60.000000, 30.000000, 3.000000));

