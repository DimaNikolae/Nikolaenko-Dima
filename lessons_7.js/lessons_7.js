function reverseArray(array) {
    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1]



function uniqueValues(array1, array2) {
    const combinedArray = array1.concat(array2);
    const uniqueArray = [];

    for (let i = 0; i < combinedArray.length; i++) {
        if (!uniqueArray.includes(combinedArray[i])) {
            uniqueArray.push(combinedArray[i]);
        }
    }

    return uniqueArray;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]


function calculateAverageGrade(students) {
    let totalGrade = 0;

    for (let i = 0; i < students.length; i++) {
        totalGrade += students[i].grade;
    }

    const averageGrade = totalGrade / students.length;
    return averageGrade.toFixed(1);
}

const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students)); // 4.4