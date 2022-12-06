function setRussian() {
    let name = document.getElementById('student');
    name.innerHTML = 'Екатерина Щетникова, Дарья Гордиенко';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Факультет бизнеса, ФБИ-02, 3 курс, 2022';

    document.getElementById('your-name').innerHTML = 'Ваше имя';
    document.getElementById('input-name').placeholder = 'введите имя';
}

function setEnglish(){
    let name = document.getElementById('student');
    name.innerHTML = 'Shchetnikova Ekaterina, Gordienko Daria';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Faculty of Business, FBI-02, 3rd year, 2022';

    document.getElementById('your-name').innerHTML = 'Your name';
    document.getElementById('input-name').placeholder = 'enter your name';
}