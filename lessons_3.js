

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
