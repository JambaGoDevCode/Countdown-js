const diasDE = document.getElementById("dias");
const horasDE = document.getElementById("horas");
const minutosDE = document.getElementById("minutos");
const segundosDE = document.getElementById("segundos");

const novoAno = '1 Jan 2022';

function contador(){
    const dataAnoNovo = new Date(novoAno);
    const dataDeHoje = new Date();

    const totalSegundos = (dataAnoNovo - dataDeHoje) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

    diasDE.innerHTML = dias;
    horasDE.innerHTML = formaDeTempo(horas);
    minutosDE.innerHTML = formaDeTempo(minutos);
    segundosDE.innerHTML = formaDeTempo(segundos);
}


function formaDeTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}

// Chamada da função
contador();

setInterval(contador, 1000);