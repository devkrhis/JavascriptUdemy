const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    // essa li é uma váriavel dessa função não tem nada a ver com a outra.
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        console.log("Enter pressionado")
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus(); // aqui ele vai deixar o focus que é quando o fica piscando para você digitar algo na caixa de seleção.
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button'); // aqui estou criando um botão
    botaoApagar.innerText = 'Apagar'; // aqui eu estou inserindo o texto 'Apagar'
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar') // aqui eu seto o atributo, sendo assim no meu html é pra ter um button com class apagar.
    botaoApagar.setAttribute('title', 'apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi();
    // esse li é uma váriavel dessa função não tem nada a ver com a outra.
    li.innerHTML = textoInput;
    tarefas.appendChild(li)
    limpaInput();
    criaBotaoApagar(li)
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);// aqui eu estou mandando para outra função o texto.
});

document.addEventListener('click', function(e){
    const el = e.target; // aqui pega o evento do click no botão.
    if (el.classList.contains('apagar')){
        console.log('Apagar clicado') // aqui vai mostrar se eu cliquei no apagar
        console.log(el.parentElement) // aqui eu consigo ver o pai desse elemento
        el.parentElement.remove(); // aqui eu removo.
        salvarTarefas();
        
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // o trim eu tiro o espaço.
        console.log(tarefaTexto);
        listaDeTarefas.push(tarefaTexto); // aqui eu jogo dentro do array
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // aqui eu faço virar um json em string, sendo assim posso converter depois novamente am array.
    console.log(tarefasJSON)
    localStorage.setItem('tarefas', tarefasJSON);  // aqui e a forma de salvar, eu quero salvar tarefas e recuperar, e o valor é o tarefasJSON.
}

function adicionarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas) // aqui eu to convertendo novamente um objeto para array.
    console.log(listaDeTarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}

adicionarTarefasSalvas();