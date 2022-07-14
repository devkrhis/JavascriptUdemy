let data = new Date();
let dataDesafio = data.getDay();
let dataDoDia = data.getDate();
let dataDoMes = data.getMonth()
let dataAno = data.getFullYear()
let horario = data.getHours()
let minutos = data.getMinutes()
let segundos = data.getSeconds()

function getDayDate(dataDesafio,dataDoDia, dataDoArray, dataAno, horario, minutos, segundos){
    let diaSemanaTexto = dataDesafio
    let dataDia = dataDoDia
    let dataMes = ["janeiro","fevereiro","março","abril","maio","junho","julho","Agosto","setembro","outubro","novezembro","dezembro"]
    let dataDoAno = dataAno
    let horarioAtual = horario
    let minutosAtual = minutos
    let secondsAtual = segundos
    console.log(dataDia)
    console.log(diaSemanaTexto)

    switch(dataDesafio){
        case 0:
            diaSemanaTexto = "Domingo";
            return document.getElementById('getReturnDate').innerHTML = (`${diaSemanaTexto}, ${dataDia} de ${dataMes[dataDoArray]} de ${dataDoAno} ${horarioAtual}:${minutosAtual}:${secondsAtual}`);
        case 1:
            diaSemanaTexto = "Segunda";
            return document.getElementById('getReturnDate').innerHTML = (`${diaSemanaTexto}, ${dataDia} de ${dataMes[dataDoArray]} de ${dataDoAno} ${horarioAtual}:${minutosAtual}:${secondsAtual}`);
        case 2:
            diaSemanaTexto = "Terça-Feira";
            return document.getElementById('getReturnDate').innerHTML = (`${diaSemanaTexto}, ${dataDia} de ${dataMes[dataDoArray]} de ${dataDoAno} ${horarioAtual}:${minutosAtual}:${secondsAtual}`);
        case 3:
            diaSemanaTexto = "Quarta-Feira";
            return document.getElementById('getReturnDate').innerHTML = (`${diaSemanaTexto}, ${dataDia} de ${dataMes[dataDoArray]} de ${dataDoAno} ${horarioAtual}:${minutosAtual}:${secondsAtual}`);
        case 4:
            diaSemanaTexto = "Quinta-Feira";
            return document.getElementById('getReturnDate').innerHTML = (`${diaSemanaTexto}, ${dataDia} de ${dataMes[dataDoArray]} de ${dataDoAno} ${horarioAtual}:${minutosAtual}:${secondsAtual}`);
        case 5:
            diaSemanaTexto = "Sexta-Feira";
            return document.getElementById('getReturnDate').innerHTML = (`${diaSemanaTexto}, ${dataDia} de ${dataMes[dataDoArray]} de ${dataDoAno} ${horarioAtual}:${minutosAtual}:${secondsAtual}`);
        case 6:
            diaSemanaTexto = "Sabado";
            return document.getElementById('getReturnDate').innerHTML = (`${diaSemanaTexto}, ${dataDia} de ${dataMes[dataDoArray]} de ${dataDoAno} ${horarioAtual}:${minutosAtual}:${secondsAtual}`);
    }
}

let devolvendoValor = getDayDate(dataDesafio, dataDoDia, dataDoMes, dataAno, horario, minutos, segundos)
console.log(dataDesafio)