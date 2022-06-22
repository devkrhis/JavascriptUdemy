const pessoa1 = { // dessa forma eu estou criando um objeto literal em javascript
    nome: 'Luiz',
    sobrenome: 'Miranda', // defino os atributos e o metodos aqui
    idade: 25,

    fala(){ // posso criar uma function com esse metodo dessa forma também.
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade(){
        this.idade++; // o this é como se fosse o pessoa1 eu estou instanciando meu objeto, estou passando para ele como se fosse pessoa1.idade e adicionando mais 1 por causa do ++
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();// aqui eu estou chamando o incrementa a idade para aumentar a idade
pessoa1.fala() // aqui estou chamando o metodo fala para informar novamente

console.log(pessoa1.nome); // dessa forma eu estou acessando o nome da pessoa1
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade)

// criando uma function com objetos:

function criaPessoa (nome, sobrenome, idade){
    return { // dessa forma estou criando o objeto 
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}

// function criaPessoa(nome, sobrenome, idade) {
//    return {nome, sobrenome, idade} -> Posso criar desta forma também o objeto.
// }

const pessoa2 = criaPessoa('Luiz', 'Otávio', 25)//criando os argumentos que são ('Luiz', 'Otávio', '25) para passar para a o parametro que são o (nome, sobrenome, idade).

console.log(pessoa2.nome)