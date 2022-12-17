function setRussian() {
    let name = document.getElementById('student');
    name.innerHTML = 'Екатерина Щетникова, Дарья Гордиенко';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Факультет бизнеса, ФБИ-02, 3 курс, 2022';

    document.getElementById('your-name').innerHTML = 'Ваше имя';
    document.getElementById('input-name').placeholder = 'введите имя';
    document.getElementById('your-surname').innerHTML = 'Ваша фамилия';
    document.getElementById('input-surname').placeholder = 'введите фамилию';
    document.getElementById('your-age').innerHTML = 'Ваш возраст';
    document.getElementById('input-age').placeholder = 'введите возраст';
    document.getElementById('ok-button').value = 'ок';
    document.getElementById('reset-button').value = 'сброс';
}

function setEnglish(){
    let name = document.getElementById('student');
    name.innerHTML = 'Shchetnikova Ekaterina, Gordienko Daria';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Faculty of Business, FBI-02, 3rd year, 2022';

    document.getElementById('your-name').innerHTML = 'Your name';
    document.getElementById('input-name').placeholder = 'enter your name';
    document.getElementById('your-surname').innerHTML = 'Your surname';
    document.getElementById('input-surname').placeholder = 'enter your surname';
    document.getElementById('your-age').innerHTML = 'Your age';
    document.getElementById('input-age').placeholder = 'enter your age';
    document.getElementById('ok-button').value = 'ok';
    document.getElementById('reset-button').value = 'reset';
}

function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    let userSex = document.getElementById('sex').value;

    let greeting;
    if(userAge<= 17) {
        greeting ='Здравствуй, ';
        if(userSex == 'female') {
            greeting += 'девочка ';
        }
        else{
            greeting += 'мальчик ';
        }
    }
    else{
        greeting ='Здравствуйте, ';
        if(userSex == 'female') {
            greeting += 'госпожа ';
        }
        else{
            greeting += 'господин ';
        }
    }
    alert(greeting + userName + ' ' + userSurname + '\n' 
        + 'Ваш возраст:' + userAge);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
}

function makeStairs(){
    let stairs = document.querySelector('#stairs');
    let stepCount = 20;
    for(let i = 0; i<stepCount; i++) {
        stairs.innerHTML += '<div class="step"></div>';
    }

    let steps = document.querySelectorAll('.step');
    for (let i = 0; i<steps.length; i++){
        steps[i].style.left = (30+10*i) + 'px';
        steps[i].style.top = (300 + 80*i) + 'px';
        steps[i].innerHTML = 'Блок номер' + i;
    }
}
function makeSnezhki () {
    let snezki = document.querySelector(' #snezki');
    let stepCount = 40;
    for (let i = 0; i<stepCount; i++){
        snezki.innerHTML += '<img class="snezhinki" src="snezhinki.png">';
    }
    let snezhinkis = document.querySelectorAll('.snezhinki');
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;

    for (let i = 0; i<snezhinkis.length; i++) 
    {
        snezhinkis[i].style.left = Math.random() * (screenWidth-100) + 'px';
        snezhinkis[i].style.top = Math.random() *(screenHeight-100) + 'px';
        snezhinkis[i].style.width= Math.random() * 45 + 'px';
    }
}

function Table() {
    let stepCount = 9;

    for (let i = 0; i<stepCount; i++){
        document.write ((i+1) + '*27=' + ((i+1)*27) + "<br>");
    }
    for (let i = 0; i<stepCount; i++){
        document.write ((i+1) + '*30=' + ((i+1)*30) + "<br>");
    }
}

function Stikh() {
    let steps = document.querySelectorAll('.Zima');
    for (let i =0; i<steps.length; i++) {
        
        let r = Math.round(Math.random()*255);
        let g = Math.round(Math.random()*255);
        let b = Math.round(Math.random()*255);
        steps[i].style.color = 'rgb(' +  r + ',' + g + ',' + b + ')';
        r = Math.round(Math.random()*255);
        g = Math.round(Math.random()*255);
        b = Math.round(Math.random()*255);
        steps[i].style.backgroundColor = 'rgb(' +  r + ',' + g + ',' + b + ')';
        steps[i].style.fontSize = (i +10)  + 'px';
        steps[i].style.width = (i*10 + 100) + 'px';

    }
}

function Load() {
    makeStairs () ;
    makeSnezhki ();
    Stikh();
}