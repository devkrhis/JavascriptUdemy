const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(event){
    return timer = setInterval (function() {
        relogio.innerHTML = mostraHora();
    }, 100)
});

pausar.addEventListener('click', function(event){
    return setTimeout(function(){
        clearInterval(timer)
    }, 100)
});

zerar.addEventListener('click', function(event){
    setTimeout(function(){
        relogio.innerHTML ="00:00:00";
        clearInterval(timer)
    }, 100)
});

function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}