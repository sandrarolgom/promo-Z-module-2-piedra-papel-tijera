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
    // console.log(numberRandom);
    let pcResult = '';
    if (numberRandom <= 3){
        pcResult = 'rock';
    } else if (numberRandom >= 7){
        pcResult = 'paper';
    } else {
        pcResult = 'seasor';
    }
    console.log(pcResult);
    return pcResult;
}
const compare = ()=>{
    const userOption = select.value;
    console.log(userOption);
    const pcValue = pcOption();
    if (userOption === pcValue){
        result.innerHTML = 'EMPATE';
    } else if 
    (userOption==='rock' && pcValue==='seasor' || 
    userOption==='seasor' && pcValue==='paper' || 
    userOption==='paper' && pcValue==='rock') {
        result.innerHTML = '¡HAS GANADO!';
        userCounter += 1;
        userPoints.innerHTML = `Jugador: ${userCounter}`;

    } else if 
    (userOption==='seasor' && pcValue==='rock' || 
    userOption==='paper' && pcValue==='seasor' || 
    userOption==='rock' && pcValue==='paper'){
        result.innerHTML = '¡HAS PERDIDO!';
        pcCounter += 1;       
        pcPoints.innerHTML = `Computadora: ${pcCounter}`;
    }
}
function handleClick(event){
    event.preventDefault();
    compare();
}
//eventos
button.addEventListener ('click', handleClick);


