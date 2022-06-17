function meuEscopo (){
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    function recebeEventoForm(evento){ // aqui eu criei uma function e peguei os valores do html
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({ // dessa forma eu criei um novo objeto
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas)

        resultado.innerHTML += // estou devolvendo para o html o valor.
        `<p>
        ${nome.value} 
        ${sobrenome.value} 
        ${peso.value} 
        ${altura.value}
        </p>`
    }



    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

