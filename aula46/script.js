function mostraHora(){
    let data = new Date ();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}


//function funcaoDoInterval(){ posso fazer dessa forma ou criar uma função anonima.
//    console.log(mostraHora())    
//}

// setInterval(funcaoDoInterval, 1000);

//CRIANDO A FUNÇÃO ANONIMA
//setInterval(function (){
//    console.log(mostraHora())
//}, 1000);

// posso realizar da mesma forma, criando uma váriavel para depois parar ela depois de um certo tempo, segue exemplo:

const timer = setInterval(function (){
    console.log(mostraHora());
}, 1000); // aqui é 1 segundo, lembrando que o javascript conta em milesimo de segundo então tem que ir adicionando 0.

setTimeout(function(){
    clearInterval(timer) // aqui eu passo a váriavel que foi criada, sendo assim vai parar no tempo estipulado na linha abaixo
}, 10000) // aqui eu passo o tempo que são 10 segundos

setTimeout(function(){
    console.log('Olá mundo!');
}, 5000); // Depois de 5 segundos ele vai exibir a mensagem.