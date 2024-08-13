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




let namber = prompt("Задайте висоту ялинки тут")
let tree = '';

for (let i = 1; i <= namber; i++) {
    tree += ' '.repeat(namber - i) + '*'.repeat(2 * i - 1) + '\n';
}


console.log(`${tree}`)


