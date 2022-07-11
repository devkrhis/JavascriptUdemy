const data = new Date('1987-04-21 00:00:00');
let diaSemana = data.getDay();

// switch case e function

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto; // tem que declarar dentro da function a variavel.

    switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sabreturn diaSemanaTexto';
        return diaSemanaTexto;
    default: // isso é como se fosse o else.
        diaSemanaTexto = 'Valor incorreto';
        return diaSemanaTexto;
    }
}

let diaSemanaTexto = getDiaSemanaTexto(diaSemana) // aqui é realizado a chamada da function.

// estrutura do switch case
// switch(diaSemana){
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         break;
//     case 1:
//         diaSemanaTexto = 'Segunda';
//         break;
//     case 2:
//         diaSemanaTexto = 'Terça';
//         break;
//     case 3:
//         diaSemanaTexto = 'Quarta';
//         break;
//     case 4:
//         diaSemanaTexto = 'Quinta';
//         break;
//     case 5:
//         diaSemanaTexto = 'Sexta';
//         break;
//     case 6:
//         diaSemanaTexto = 'Sabado';
//         break;
//     default: // isso é como se fosse o else.
//         diaSemanaTexto = 'Valor incorreto';
// }


// Quando se tem muitas linhas repetitivas assim é melhor utilizar switch case acima.
// if (diaSemana === 0){
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1){
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2){
//     diaSemana = 'Terça';
// } else if (diaSemana === 3){
//     diaSemana = 'Quarta';
// } else if (diaSemana === 4){
//     diaSemana = 'Quinta'
// } else if (diaSemana === 5){
//     diaSemana = 'Sexta'
// } else if (diaSemana === 6){
//     diaSemana = 'Sabado'
// } else {
//     diaSemana = 'Dia invalido';
// }