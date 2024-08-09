let n = prompt("Введіть число:");
let isPrime = true;

if (n <= 1) {
    isPrime = false; 
} else if (n <= 3) {
    isPrime = true;  
} else if (n % 2 === 0 || n % 3 === 0) {
    isPrime = false; 
} else {
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            isPrime = false;
            break;
        }
    }
}


if (isPrime) {
    console.log(`Число ${n} є простим числом`);
} else {
    console.log(`Число ${n} не є простим числом`);
}




let N = prompt("Задайте число тут")

for (let num = 1; num <= N; num++) {
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


