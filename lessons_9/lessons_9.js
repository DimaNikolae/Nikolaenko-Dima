// 9.1
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterPrimes(arr) {
    return arr.filter(isPrime);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primes = filterPrimes(numbers);
console.log(primes);



// 9.2
function groupNotificationsBySource(notifications) {
    return notifications.reduce((acc, notification) => {
        const { source, text, date } = notification;

        if (!acc[source]) {
            acc[source] = [];
        }

        acc[source].push({ text, date });

        return acc;
    }, {});
}

const notifications = [
    { source: 'email', text: 'New email received', date: '2024-08-31' },
    { source: 'sms', text: 'New SMS received', date: '2024-08-30' },
    { source: 'email', text: 'Meeting reminder', date: '2024-09-01' },
    { source: 'app', text: 'App notification', date: '2024-08-29' },
    { source: 'sms', text: 'SMS from bank', date: '2024-08-29' }
];



// 9.3
const groupedNotifications = groupNotificationsBySource(notifications);
console.log(groupedNotifications);

function groupBy(arr, callback) {
    return arr.reduce((acc, item) => {
        const key = callback(item);

        if (!acc[key]) {
            acc[key] = [];
        }

        acc[key].push(item);

        return acc;
    }, {});
}

const data = [6.1, 4.2, 6.3];
const grouped = groupBy(data, Math.floor);
console.log(grouped);

const words = ['one', 'two', 'three'];
const groupedWords = groupBy(words, word => word.length);
console.log(groupedWords);