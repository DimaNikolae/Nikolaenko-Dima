function doubleLetter(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }
    
    return result;
}

// Приклад використання:
console.log(doubleLetter("hello")); // "hheelllloo"
console.log(doubleLetter("abc")); // "aabbcc"