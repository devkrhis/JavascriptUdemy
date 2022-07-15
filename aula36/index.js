// For in -> lê os índices ou chaves do objeto.
const frutas = ['Pera', 'Maça', 'Uva'];

// for (let i = 0; i < frutas.length; i++){

// }

for (let i in frutas){
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chave in pessoa) { // a chave é cada volta do laço, acessando o que está dentro de pessoa.
    console.log(chave, pessoa[chave]);
}

// acessando valores de 2 maneiras diferentes:
// console.log(pessoa.nome);
// console.log(pessoa['nome']);

// const chave = 'nome';
// console.log(pessoa[chave])