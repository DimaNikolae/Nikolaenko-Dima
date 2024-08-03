let num = 15

if (num / 3) {
    console.log("Fizz")
} else if (num / 5) {
    console.log("Buzz")
} else if (num / 3 || 5) {
    console.log("FizzBuzz")
}