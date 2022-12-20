function clickMe(button){
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок';
}

function clickHere(button){
    if(button.innerHTML == 'Катя')
        button.innerHTML = 'Щетникова';
    else
        button.innerHTML = 'Катя';
}

function click1(button){
    if(button.innerHTML == 'Даша')
        button.innerHTML = 'Гордиенко';
    else
        button.innerHTML = 'Даша';
}

function clickMe2(button){
    if(button.innerHTML == 'Нажми меня')
    button.innerHTML = 'Ещё раз нажми';
    else 
    if(button.innerHTML == 'Ещё раз нажми')
    button.innerHTML = 'Ещё';
    else 
    if(button.innerHTML == 'Ещё')
    button.innerHTML = 'Начать сначала';
    else
    if(button.innerHTML == 'Начать сначала')
    button.innerHTML = 'Нажми меня';
}
