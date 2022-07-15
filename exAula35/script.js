const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    //console.log(elementos[i].tag) // assim eu consigo pegar a tag de dentro do elemento.
    let { tag, texto} = elementos[i]; // assim eu faço via desestruração
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);