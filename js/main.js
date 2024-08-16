'use strict';
//variables
const select = document.querySelector('.js-select');
const button = document.querySelector('.js-button');
const result = document.querySelector('.js-result');
const userPoints = document.querySelector('.js-userpoints');
const pcPoints = document.querySelector('.js-pcpoints');
const reloadBtn = document.querySelector('.js-reset')

userPoints.innerHTML = `Jugador: 0`
pcPoints.innerHTML = `Jugador: 0`

let userCounter = 0;
let pcCounter = 0;
let moves = 0;

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
    // console.log(pcResult);
    return pcResult;
}
const compare = ()=>{
    const userOption = select.value;
    // console.log(userOption);
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
const reloadGame =()=>{
    console.log(moves);
    if (moves === 10){
        reloadBtn.classList.remove('hidden');
        button.classList.add('hidden');
        if (userCounter > pcCounter){
            result.innerHTML = 'Usuario ha ganado el juego';
        } else if (userCounter < pcCounter){
            result.innerHTML = 'Computadora ha ganado el juego';
        } else {
            result.innerHTML = 'Empate';
        }
    }
}
function handleClick(event){
    event.preventDefault();
    moves++;
    compare();
    reloadGame();
    ;
}
const handleClickReaload = () => {
    reloadBtn.classList.add('hidden');
    button.classList.remove('hidden');
    userCounter = 0;
    pcCounter = 0;
    moves = 0;
    userPoints.innerHTML = `Jugador: 0`;
    pcPoints.innerHTML = `Ordenador: 0`;
    result.innerHTML = 'Vamos a jugar!';
}
//eventos
button.addEventListener ('click', handleClick);
reloadBtn.addEventListener('click', handleClickReaload); 

