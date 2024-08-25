function reverseString(str) {
    return str.split('').reverse().join('');
}

// Приклад використання:
console.log(reverseString("Привіт")); // "тівирП"




function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-zа-я0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    if (cleanedStr === reversedStr) {
        console.log("Речення є паліндромом.");
    } else {
        console.log("Речення не є паліндромом.");
    }
}

isPalindrome("А роза упала на лапу Азорі"); // ВВЕДІТЬ ДЛЯ ПЕРЕВІРКИ
