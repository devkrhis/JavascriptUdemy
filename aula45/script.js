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

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
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