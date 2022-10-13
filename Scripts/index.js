let hours = 0;
let seconds = 0;
let time = 0;

while (true) {
    hours = Number(prompt('Введіть кількість годин: '));
    if((!isNaN(hours)) || time === 4) {
        break;
    }
    time++;
}

if((!isNaN(hours)) && time < 5) {
    seconds = hours * 3600;
    alert(`Кількість годин в секундах: ${seconds}.`);
} else {
    alert('Введені некоректні данні.');
}