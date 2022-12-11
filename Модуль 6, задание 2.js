// Модуль 6.4, задание 2

function checkPrimeNumber (num) {
    if (typeof(num) === 'number' && num <= 1000 && num > 2) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                console.log(`Число ${num} является составным`);
                return;
            }
        }
        console.log(`Число ${num} является простым`);
    }
    else if (typeof(num) === 'number' && num === 2 || num === 1) {
        console.log(`Число ${num} является простым`);
    } else {
        console.log('Введённые данные неверны')
    }
}

checkPrimeNumber()