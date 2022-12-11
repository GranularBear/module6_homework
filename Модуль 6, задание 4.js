// Модуль 6.7, задание 4

function enumeration(initNum, endNum, cb) {
    let i = initNum;
    cb(i, endNum);
}

function enumerationInt (i, endNum) {
    let intervalId = setInterval(function() {
        if (i === endNum) {
            clearInterval(intervalId);
        }
        console.log(i);
        i++;
    }, 1000)
}

enumeration(5, 15, enumerationInt)