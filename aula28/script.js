//const data = new Date(0) // isso é uma função construtora, sendo assim a primeira letra sempre é maiscula
// exemplo: new Date(),
// se eu colocar 0 eu pego o marco do unix, quando começou, sendo assim vai ser 01/01/1970 timestamp unix ou época unix.
// Caso eu queira pegar mais para traz tenho que colocar valores negativos, e mais pra frente valores posítivos.
//console.log(data) // vai exibir a data e é possível utilizar de diversas formas.

//exemplo:
//console.log(data.toDateString(), data.toString())

// mudando a data, lembrando que o javascript trabalha com mili segundos.
//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
// console.log(data + tresHoras + umDia) é possivel realizar dessa maneira.

// mudando o horario manualmente
//                       Ano  Mês Hora Minuto Segundo, milesimo de segundo.
// const data = new Data(2019, 3, 15, 14, 27, 500) -> se passar de 999 milesimo de segundo, vira 1 segundo caso for 1000, não existe 60 segundos no maximo até 59 e dai vira minuto, se eu tirar algum ele vai omitir, sendo assim ele pega o primeiro valor sendo 00.
// mes em javascript 0 = janeiro, 1 = fevereiro, 2= março, 3= abril e assim vai.


// posso utilizar desta forma também:
// const data = new Date('2019-04-20 20:20:59.100') ano, mes, dia  hora, minuto, segundo, milesimo de segundos.
// console.log('Dia', data.getDate()); aqui eu vou pegar o DIA.
// console.log('Mês', data.getMonth()); aqui eu vou pegar o MÊS.
// console.log('Ano', data.FullYear()); aqui eu vou pegar o ANO.
// console.log('Hora', data.Hours()); aqui eu vou pegar o HORA.
// console.log('Minuto', data.Minutes()); aqui eu vou pegar o MINUTO.
// console.log('Segundos', data.Seconds()); aqui eu vou pegar o SEGUNDOS.
// console.log('Milesimo De segundos', data.getMilliseconds()); aqui eu vou pegar o MILESIMO DE SEGUNDOS.
// console.log('Dia semana', data.getDay()); aqui eu vou pegar o dia da semana 0 - domingo, 6 - Sabado.
// console.log(Date.now()); Aqui eu estou obtendo os milesimos de segundos da data.

function zeroAEsquerda (num){ // function que faz adicionar o 0 a esqueda caso NÃO SEJA maior ou igual a 10.
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() +1); // colocado +1 para ficar igual brasil
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)
