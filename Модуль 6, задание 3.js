// Модуль 6.5, задание 3

function getSum (num1) {
    return function (num2) {
        return num1 + num2;
    }
}

console.log(getSum(2)(6));