//! Start by creating the variables for the data recorded

const day1TempF = 32
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC = 26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29

//* Convert Celsius temperatures to Fahrenheit

const day2TempF = (day2TempC * 9 / 5) + 32
const day4TempF = (day4TempC * 9 / 5) + 32
const day6TempF = (day6TempC * 9 / 5) + 32
const day8TempF = (day8TempC * 9 / 5) + 32
const day10TempF = (day10TempC * 9 / 5) + 32
const day12TempF = (day12TempC * 9 / 5) + 32
const day14TempF = (day14TempC * 9 / 5) + 32
const day16TempF = (day16TempC * 9 / 5) + 32
const day18TempF = (day18TempC * 9 / 5) + 32
const day20TempF = (day20TempC * 9 / 5) + 32
const day22TempF = (day22TempC * 9 / 5) + 32
const day24TempF = (day24TempC * 9 / 5) + 32
const day26TempF = (day26TempC * 9 / 5) + 32
const day28TempF = (day28TempC * 9 / 5) + 32
const day30TempF = (day30TempC * 9 / 5) + 32


//! Start the calculation of the total temperatures

const tot_temperature_in_fahrenheit =
day1TempF + day2TempF + day3TempF + day4TempF + day5TempF +
day6TempF + day7TempF + day8TempF + day9TempF + day10TempF +
day11TempF + day12TempF + day13TempF + day14TempF + day15TempF +
day16TempF + day17TempF + day18TempF + day19TempF + day20TempF +
day21TempF + day22TempF + day23TempF + day24TempF + day25TempF +
day26TempF + day27TempF + day28TempF + day29TempF + day30TempF

//* Convert the total Fahrenheit temperature to Celsius

const tot_temperature_in_celsius = (tot_temperature_in_fahrenheit - (32 * 30)) * 5 / 9


//! Start the calculation of the average temperatures

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30


//! Console.log the results for your own inspection if you'd like

console.log(tot_temperature_in_fahrenheit)
console.log(tot_temperature_in_celsius)
console.log(avg_temperature_in_fahrenheit)
console.log(avg_temperature_in_celsius)


//! Export variables for testing

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};