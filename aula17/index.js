/* function soma (x = 1, y = 1) { // aqui eu estou utilizando 2 parametros, posso também declarar valor caso eu chame a função e não passe nenhum valor vai funcionar do mesmo jeito.
    const resultado = x + y; 
    return resultado; // aqui eu pego o retorno deles quando eu chamo
}

console.log(soma(2,2)) // aqui estou passando os 2 valores da função e chamando a função.
*/

const raiz = function(n) { // aqui eu declaro uma variavel e uma função, e quando vou chamar eu chamo o nome da variavel
    return n ** 0.5;

};

console.log(raiz(9)) // chamando a função e passando o valor.
console.log(raiz(16))
console.log(raiz(25))

const raizNova = n => n ** 0.5; // arrow function é a mesma coisa, só simplifica tudo, quando eu tenho apenas um parametro eu posso remover os do (n)

console.log(raizNova(9)) // chamando a função e passando o valor.
console.log(raizNova(16))
console.log(raizNova(25))