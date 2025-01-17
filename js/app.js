const horoscopes = {  
    "Овен": "Сегодня вы сможете достичь успеха в своих начинаниях.",  
    "Телец": "Не бойтесь проявлять свои чувства, это принесёт вам счастье.",  
    "Близнецы": "Общение с друзьями поможет вам разгрузить мысли.",  
    "Рак": "Сосредоточьтесь на семье, они подарят вам тепло.",  
    "Лев": "Ваши лидерские качества выведут вас на новый уровень.",  
    "Дева": "День подходит для рутинных дел и организации.",  
    "Весы": "Ваше обаяние привлечёт новых интересных людей.",  
    "Скорпион": "Интуиция подскажет правильный путь.",  
    "Стрелец": "Не упустите возможность путешествовать!",  
    "Козерог": "Трудолюбие сегодня будет вознаграждено.",  
    "Водолей": "Новые идеи вдохновят вас на свершения.",  
    "Рыбы": "Творчеству будет способствовать ваша чувствительность."  
};  

function getHoroscope(zodiacSign) {  
    const resultDiv = document.getElementById('result');  
    resultDiv.textContent = horoscopes[zodiacSign] || "Гороскоп не доступен.";