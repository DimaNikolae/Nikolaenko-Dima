let nam = prompt("Задайте числое")

let isPrime = true;

if (nam <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(nam); i++) {
        if (nam % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`Число ${nam} є простим числом.`);
} else {
    console.log(`Число ${nam} не є простим числом.`);
}



let maxNumber = prompt("Задайте число тут")

console.log(`Досконалі числа в діапазоні від 1 до ${maxNumber}:`);

for (let num = 1; num <= maxNumber; num++) {
    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }


    if (sum === num) {
        console.log(`Число ${num} є досконалим числом.`);
    }
}



let namber = prompt("Задайте висоту ялинки тут")
let tree = '';

for (let i = 1; i <= namber; i++) {
    tree += ' '.repeat(namber - i) + '*'.repeat(2 * i - 1) + '\n';
}


console.log(`${tree}`)


