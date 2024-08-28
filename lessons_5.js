function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

// Виклик функції з виведенням результату
console.log(reverseString("Привіт світ"));


function isPalindrome(str) {
    // Перетворюємо рядок на нижній регістр і видаляємо всі неалфавітні символи
    let cleanedStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (char.match(/[a-zа-я0-9]/i)) {
            cleanedStr += char;
        }
    }

    // Перевіряємо, чи є очищений рядок паліндромом
    let len = cleanedStr.length;
    for (let i = 0; i < len / 2; i++) {
        if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
            console.log("Речення не є паліндромом.");
            return false;
        }
    }

    console.log("Речення є паліндромом.");
    return true;
}

// Приклад речення
isPalindrome("оппо");



function findGCD(a, b) {
    // Використовуємо рекурсію для знаходження НСД
    if (b === 0) {
        return a;
    }
    return findGCD(b, a % b);
}

console.log(findGCD(48, 18)); // Введіть числа
