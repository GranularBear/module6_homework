// Модуль 6.2, задание 1

let arrRandom = [3, 14, 15, 92, 65, 35, 0, 0, 'närsomhelst', null, true];

function checkArrayItems(arr) {
    let oddNumbers = 0;
    let evenNumbers = 0;
    let nullElements = 0;
    let zeroes = 0;
    let everythingElse = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === 'number' && arr [i] === 0) {
            ++zeroes;
            ++evenNumbers;
        } else if (typeof(arr[i]) === 'number' && arr[i] % 2 === 0) {
            ++evenNumbers;
        } else if (typeof(arr[i]) === 'number' && arr[i] % 2 !== 0) {
            ++oddNumbers;
        } else if (arr[i] === null) {
            ++nullElements;
        } else {
            ++everythingElse
        }
    }
    console.log(`There are ${oddNumbers} odd numbers, ${evenNumbers} even numbers, ${nullElements} null elements, ${zeroes} zeroes, and ${everythingElse} other items in the array`);
}

checkArrayItems(arrRandom)
