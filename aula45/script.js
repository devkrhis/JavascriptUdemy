//try {
    // é executada quando não há erros
//} catch (e) {
    // executado quando há erros
//} finally {
    // sempre é executado, mas pode ser omitidos
//}

function retonaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{ // aqui é pra ser no horario pt-br
        hour: '2-digit', // aqui é para ser apenas 2 digitos
        minute: '2-digit',
        second: '2-digit',
        hour12: false // aqui é pra não ser um horario de 24 horas e sim de 12
    });
}

try {
const data = new Date('01-01-1970 12:58:12');
const hora = retonaHora();
console.log(hora);
} catch(e){
    // tratar o erro
} finally {
    console.log('tenha um bom dia');
}