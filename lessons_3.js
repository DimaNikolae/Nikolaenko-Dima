let number = 15

if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz"); 
} else if (number % 3 === 0) {
    console.log("Fizz");
} else if (number % 5 === 0) {
        console.log("Buzz")
}

let year = 2023

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " є високосним роком.")
} else {
    console.log(year + " не є високосним роком.")
}

let years = 31

if (years % 10 === 1 && years % 100 !== 11) {
    console.log("Вам " + years + " рік");
} else if (
    years % 10 >= 2 &&
    years % 10 <= 4 &&
   !(years % 100 >= 12 && years % 100 <= 14)
) {
    console.log("Вам " + years + " роки");
} else {
    console.log("Вам " + years + " років");
}
