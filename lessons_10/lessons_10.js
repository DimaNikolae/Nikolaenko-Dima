// 10.1
function groupNotificationsBySource(notifications) {
    const grouped = notifications.reduce((acc, notification) => {
        const { source, text, date } = notification;

        if (!acc[source]) {
            acc[source] = [];
        }

        acc[source].push({ text, date });
        return acc;
    }, {});

    // Додаємо ітератор до об'єкта grouped
    grouped[Symbol.iterator] = function* () {
        for (const source in this) {
            if (this.hasOwnProperty(source)) {
                for (const notification of this[source]) {
                    yield notification;
                }
            }
        }
    };

    return grouped;
}

// Приклад використання
const notifications = [
    { source: 'email', text: 'New email received', date: '2024-08-31' },
    { source: 'sms', text: 'New SMS received', date: '2024-08-30' },
    { source: 'email', text: 'Meeting reminder', date: '2024-09-01' },
    { source: 'app', text: 'App notification', date: '2024-08-29' },
    { source: 'sms', text: 'SMS from bank', date: '2024-08-29' }
];

const groupedNotifications = groupNotificationsBySource(notifications);

// Тепер можна перебирати всі сповіщення, як плоский масив
for (const notification of groupedNotifications) {
    console.log(notification);
}

// 10.2
function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        // Створюємо унікальний ключ для кожного набору аргументів
        const key = JSON.stringify(args);

        // Перевіряємо, чи є результат у кеші
        if (cache.has(key)) {
            return cache.get(key);
        }

        // Виконуємо функцію та зберігаємо результат у кеші
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Приклад використання
const slowFunction = (x, y) => {
    // Симулюємо повільну функцію
    for (let i = 0; i < 1e9; i++) {}
    return x + y;
};

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(1, 2)); // Обчислює і кешує результат
console.log(memoizedFunction(1, 2)); // Використовує кешований результат
console.log(memoizedFunction(2, 3)); // Обчислює новий результат


// 10.3
function memoize1(fn, maxCacheSize) {
    const cache = new Map();

    return function(...args) {
        // Створюємо унікальний ключ для кожного набору аргументів
        const key = JSON.stringify(args);

        // Перевіряємо, чи є результат у кеші
        if (cache.has(key)) {
            return cache.get(key);
        }

        // Виконуємо функцію та зберігаємо результат у кеші
        const result = fn(...args);

        // Додаємо результат у кеш
        cache.set(key, result);

        // Якщо кеш перевищує максимальний розмір, видаляємо найстаріший запис
        if (cache.size > maxCacheSize1) {
            // `cache.keys().next().value` отримує перший (найстаріший) ключ
            cache.delete(cache.keys().next().value);
        }

        return result;
    };
}

// Приклад використання
const slowFunction1 = (x, y) => {
    // Симулюємо повільну функцію
    for (let i = 0; i < 1e8; i++) {}
    return x + y;
};

const maxCacheSize1 = 3;
const memoizedFunction1 = memoize1(slowFunction1, maxCacheSize1);

console.log(memoizedFunction1(1, 2)); // Обчислює і кешує результат
console.log(memoizedFunction1(2, 3)); // Обчислює і кешує результат
console.log(memoizedFunction1(3, 4)); // Обчислює і кешує результат
console.log(memoizedFunction1(1, 2)); // Використовує кешований результат
console.log(memoizedFunction1(4, 5)); // Обчислює і кешує результат, видаляє найстаріший
console.log(memoizedFunction1(2, 3)); // Використовує кешований результат
console.log(memoizedFunction1(3, 4)); // Використовує кешований результат
console.log(memoizedFunction1(4, 5)); // Використовує кешований результат


function memoize2(fn, maxCacheSize) {
    const cache = new Map();
    const resultToKey = new Map();

    return function(...args) {
        // Створюємо унікальний ключ для кожного набору аргументів
        const key = JSON.stringify(args);

        // Перевіряємо, чи є результат у кеші
        if (cache.has(key)) {
            return cache.get(key);
        }

        // Виконуємо функцію та зберігаємо результат у кеші
        const result = fn(...args);
        const resultKey = JSON.stringify(result);

        // Додаємо результат у кеш
        cache.set(key, result);
        resultToKey.set(resultKey, key);

        // Якщо кеш перевищує максимальний розмір, видаляємо найстаріший запис
        if (cache.size > maxCacheSize) {
            // Видаляємо найстаріший запис
            const oldestKey = cache.keys().next().value;
            cache.delete(oldestKey);
            resultToKey.delete(JSON.stringify(cache.get(oldestKey)));
        }

        // Видаляємо дублікати результатів
        for (const [existingResultKey, originalKey] of resultToKey) {
            if (existingResultKey === resultKey && originalKey !== key) {
                cache.delete(originalKey);
                resultToKey.delete(existingResultKey);
                break;
            }
        }

        return result;
    };
}

// Приклад використання
const slowFunction2 = (x, y) => {
    // Симулюємо повільну функцію
    for (let i = 0; i < 1e8; i++) {}
    return x + y;
};

const maxCacheSize2 = 7;
const memoizedFunction2 = memoize2(slowFunction2, maxCacheSize2);

console.log(memoizedFunction2(1, 2)); // Обчислює і кешує результат
console.log(memoizedFunction2(2, 3)); // Обчислює і кешує результат
console.log(memoizedFunction2(3, 4)); // Обчислює і кешує результат
console.log(memoizedFunction2(1, 2)); // Використовує кешований результат
console.log(memoizedFunction2(4, 5)); // Обчислює і кешує результат, видаляє найстаріший
console.log(memoizedFunction2(2, 3)); // Використовує кешований результат
console.log(memoizedFunction2(3, 4)); // Використовує кешований результат
console.log(memoizedFunction2(4, 5)); // Використовує кешований результат