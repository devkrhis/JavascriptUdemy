const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

// Atribuição via desestruturação
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome)

// caso eu queria pegar o endereço:
const { endereco: { rua, numero} } = pessoa
console.log(rua);
// mesma coisa que dá pra fazerr no array dá pra fazer aqui.
