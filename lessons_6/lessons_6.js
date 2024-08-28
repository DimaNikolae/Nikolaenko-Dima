function doubleLetter(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }
    
    return result;
}

console.log(doubleLetter("hello"));



function padString(str, length, symbol, toLeft = false) {
    // Перевіряємо, чи довжина рядка вже більша або дорівнює заданій довжині
    if (str.length >= length) {
        return str;
    }

    // Обчислюємо, скільки символів потрібно додати
    const paddingLength = length - str.length;
    const padding = symbol.repeat(paddingLength);

    // Додаємо символи або зліва, або справа, залежно від прапора toLeft
    return toLeft ? padding + str : str + padding;
}

// Виклик функції
console.log(padString('Ivan', 7, '@', true));    
console.log(padString('Ivan', 15, '@'));   



function camelCase(str, separator) {
    // Розділяємо рядок на слова за заданим роздільником
    const words = str.split(separator);

    // Перетворюємо перше слово в нижній регістр, а всі наступні слова в camelCase
    const camelCased = words.map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    });

    // Об'єднуємо всі слова в один рядок
    return camelCased.join('');
}

console.log(camelCase('hello_world', '_'));  
console.log(camelCase('make-javascript-great', '-')); 
console.log(camelCase('convert this string', ' ')); 