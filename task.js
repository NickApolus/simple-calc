// Создаю переменные и подключаюсь к эл. верстки
let varible1 = document.querySelector('#x'); //переменная №1
let varible2 = document.querySelector('#y'); //переменная №2
// для знака + - / *
let signMath = document.querySelector('#sign');
// кнопка
let btn = document.querySelector('.btn');
let fieldAnswer = document.querySelector('#answer');
// Создаю неинициализированную переменную
async function newMethodName () {
    
}
let answer;
// Событие клика кнопки "отправить" в калькуляторе
btn.addEventListener('click', function(){
    let a = +(varible1.value); //функ. "вэлъю" уже считывает зн. из "инпут(-а)"
    let b = +(varible2.value);
    let sign = signMath.value;
    // Проверка знак арифметической операции "есть - нет"
    if(sign !== '+' && sign !== '-' && sign !== '*' && sign !== '/'){
        signMath.value = null;
        varible2.value = null;
        varible1.value = null;
    }
    
   
    // функция калькулятора ,которая запускается при клике
    function calcResult ( varible1,varible2,sign){
    switch(sign){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
        
}
// заносится результат функ. в переменную "ансвэр"
answer = calcResult(varible1,varible2,sign);
// Проверка ответа на неопределенную переменную
if (answer == undefined){
    fieldAnswer.classList.remove("possitive");
    fieldAnswer.innerHTML = 'Mistake!'
    // обнуление полей для дальнейшего счет. К сожалению без функции памяти пака что))
    signMath.value = null;
    varible2.value = null;
    varible1.value = null;
}
if (answer == Infinity){
    fieldAnswer.classList.remove("possitive");
    fieldAnswer.innerHTML = 'На ноль делить нельзя'
    // обнуление полей для дальнейшего счет. К сожалению без функции памяти пака что))
    signMath.value = null;
    varible2.value = null;
    varible1.value = null;
}
// Если "ансвэр" проверен , то выводится ответ
else{
    // Постановка класса "позитив" окраски в зеленный цвет тега 
    fieldAnswer.classList.add("possitive");
    fieldAnswer.innerHTML = calcResult(varible1,varible2,sign);
    // обнуление полей для дальнейшего счет. К сожалению без функции памяти пака что))
    signMath.value = null;
    varible2.value = null;
    varible1.value = null;
}

});
