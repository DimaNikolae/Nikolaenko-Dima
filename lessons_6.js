function findGCD(a, b) {
    // Використовуємо рекурсію для знаходження НСД
    if (b === 0) {
        return a;
    }
    return findGCD(b, a % b);
}

console.log(findGCD(48, 18)); // Введіть числа