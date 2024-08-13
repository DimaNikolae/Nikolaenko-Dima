let = prompt("Ведіть данні");
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log();  


function isPalindrome(str) {
    // Видалення всіх нерозділових символів та приведення до нижнього регістру для порівняння
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Приклади використання:
console.log(isPalindrome("racecar"));  // виведе true
console.log(isPalindrome("hello"));    // виведе false
console.log(isPalindrome("A man, a plan, a canal, Panama"));  // виведе true



function findGCD(a, b) {
    while (b) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Приклади використання:
console.log(findGCD(48, 18));  // виведе 6
console.log(findGCD(56, 98));  // виведе 14
console.log(findGCD(101, 103));  // виведе 1