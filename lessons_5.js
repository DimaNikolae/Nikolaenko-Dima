function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Привіт")); // Ведіть слово




function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-zа-я0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    if (cleanedStr === reversedStr) {
        console.log("Речення є паліндромом.");
    } else {
        console.log("Речення не є паліндромом.");
    }
}

isPalindrome("А роза упала на лапу Азора"); // ВВЕДІТЬ ДЛЯ ПЕРЕВІРКИ


function findGCD(a, b) {
    // Використовуємо рекурсію для знаходження НСД
    if (b === 0) {
        return a;
    }
    return findGCD(b, a % b);
}

console.log(findGCD(48, 18)); // Введіть числа
