function showDate(params) {
    let out = document.getElementById('today');
    let today = new Date();
    out.innerHTML = today.toLocaleDateString("ru-RU");
}
window.addEventListener('load', showDate);

function showDaysCount (params) {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    let result = document.getElementById('result');
    daysCount = Math.floor(daysCount);
    result.innerHTML = 'С даты рождения прошло дней: ' + daysCount;
}

function showTime() {
    let outTime = document.getElementById('time');
    let currentTime = new Date();
    outTime.innerHTML = currentTime.toLocaleTimeString('ru');
}

window.addEventListener('load', showTime);
setInterval(showTime, 1000);

function showDni (){

    let dnii = document.querySelector('input[type=date]');
    let birthday = new Date (dnii.value);
    let inputDatee = document.querySelector('input[type=number]');
    let days = document.getElementById('input-days');
    let daysRound = (birthday.getTime()/1000/60/60/24)+ days.value*1;
    let result2 = document.getElementById('result2');
    daysRound = new Date(daysRound*1000*60*60*24);
    result2.innerHTML = 'Будущая дата:'+ daysRound.toLocaleDateString("ru-RU");
}
window.addEventListener('load', showDate);