const nome = ['Luiz', 'Otávio', 'Henrique'];

// for (let i = 0; i < nome.length; i++){
//     console.log(nome[i]);
// }

// for (let i in nome){
//     console.log(nome[i]);
// }

for (let valor of nome){ // quando é objeto, array, vetor, matriz utilizar este // quando usamos of vem o valor.
    console.log(valor) // com objeto não funciona acaba dando erro
}

nome.forEach(function(valor, indice, array) { // essa function vai receber um elemento e um indice, o indice não é obrigatorio, nesse caso é necessário apenas o valor
    console.log(valor, indice, array);
});

// for clássico - Geralmente com iteráveis (array ou strings)
// for in - Retorna o índice ou chave (string, array ou objetos)
// for of - retorna o valor em sí (iteráveis, arrays ou strings)
