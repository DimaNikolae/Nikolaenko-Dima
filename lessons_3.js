let number = 120

if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz"); 
} else if (number % 3 === 0) {
    console.log("Fizz");
} else if (number % 5 === 0) {
        console.log("Buzz")
}

let year = 2025

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " є високосним роком.")
} else {
    console.log(year + " не є високосним роком.")
}