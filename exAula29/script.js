let data = new Date();
let dataDesafio = data.getDay();
let dataDoDia = data.getDate();

function getDayDate(dataDesafio, dataDoDia){
    let diaSemanaTexto;
    let diaDoMesTexto;
   
    switch(dataDesafio){
        case 0:
            diaSemanaTexto = "Domingo";
            return document.getElementById('getReturnDate').innerHTML = (diaSemanaTexto, dataDoDia ``)
        case 1:
            diaSemanaTexto = "Segunda";
            return document.getElementById('getReturnDate').innerHTML = diaSemanaTexto;
        case 2:
            diaSemanaTexto = "Terça-Feira";
            return document.getElementById('getReturnDate').innerHTML = diaSemanaTexto;
        case 3:
            diaSemanaTexto = "Quarta-Feira";
            return document.getElementById('getReturnDate').innerHTML = diaSemanaTexto;
        case 4:
            diaSemanaTexto = "Quinta-Feira";
            return document.getElementById('getReturnDate').innerHTML = diaSemanaTexto;
        case 5:
            diaSemanaTexto = "Sexta-Feira";
            return document.getElementById('getReturnDate').innerHTML = diaSemanaTexto;
        case 6:
            diaSemanaTexto = "Sabado";
            return document.getElementById('getReturnDate').innerHTML = diaSemanaTexto;
    }
}

let diaSemanaTexto = getDayDate(dataDesafio)