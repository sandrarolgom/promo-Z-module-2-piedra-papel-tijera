'use strict';
//variables
const select = document.querySelector('.js-select');
const button = document.querySelector('.js-button');
const result = document.querySelector('.js-result');
const userPoints = document.querySelector('.js-userpoints');
const pcPoints = document.querySelector('.js-pcpoints');

userPoints.innerHTML = `Jugador: 0`
pcPoints.innerHTML = `Jugador: 0`

let userCounter = 0;
let pcCounter = 0;

//funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }
const pcOption= ()=>{
    const numberRandom = getRandomNumber(9);
    if (numberRandom <= 3){
        return 'piedra'
    } else if (numberRandom >= 7){
        return 'papel'
    } else {
        return 'tijera'
    }
}
const compare = ()=>{
    const userOption = select.value;
    const pcValue = pcOption();
    if (userOption === pcValue){
        result.innerHTML = 'EMPATE';
    } else if (
    (userOption ==='rock' && pcValue ==='seasor') || 
    (userOption ==='seasor' && pcValue ==='paper') || 
    (userOption ==='paper' && pcValue ==='rock')
    ) {
        result.innerHTML = '¡HAS GANADO!';
        userCounter += 1;
        userPoints.innerHTML = `Jugador: ${userCounter}`;

    } else if (
    (userOption ==='seasor' && pcValue ==='rock') || 
    (userOption ==='paper' && pcValue ==='seasor') || 
    (userOption ==='rock' && pcValue ==='paper')
    ){
        result.innerHTML = '¡HAS PERDIDO!';
        pcCounter ++;       
        pcPoints.innerHTML = `Computadora: ${pcCounter}`;
    }
}
//SE PUEDE HACER CON FUNCTION ANONIMA O FUNCION FLECHA
const handleClickPlayGame= (event)=>{
    event.preventDefault();
    compare();
}
//eventos
button.addEventListener ('click', handleClickPlayGame); //AÑADIRLE ALGO MÁS PARA DIFERENCIAR ENVENTOS


