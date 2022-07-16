try {
    console.log(naoExisto); // se o erro ocorrer ele cai no bloco abaixo
} catch(err){
    console.log('naoExisto não existe')
}

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser numeros') // ele mostra o erro e diz que precisa tratar o mesmo, e aqui eu to usando uma função construtora do javascript que o new ReferenceError
    }

    return x + y
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error){ // aqui eu capturo o erro.
    console.log(error); // porém não é legal eu mostrar isto para o usuário.
    console.log("Alguma coisa mais amigavel para o usuário") // lançar destar forma
}
console.log(soma(1,2))