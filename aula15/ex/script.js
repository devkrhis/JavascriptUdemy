const numero = Number(prompt('Digite um número: '))

const numeroTitulo = document.getElementById('numero-titulo'); // documento seleciona o elemento por ID e o id que eu quero é o "numero-titulo" e salva na variavel 

const texto = document.getElementById('numerosGerais');

numeroTitulo.innerHTML = numero;
texto.innerHTML = " ";
texto.innerHTML += `Raiz quadrada: ${Math.sqrt(numero)}`;
texto.innerHTML += `<br/><br/>${numero} é inteiro: ${Number.isInteger(numero)}`;
texto.innerHTML += `<br/><br/>É NaN: ${Number.isNaN(numero)}`;
texto.innerHTML += `<br/><br/>Arredondando para baixo: ${Math.floor(numero)}`
texto.innerHTML += `<br/><br/>Arredondando para cima: ${Math.ceil(numero)}`
texto.innerHTML += `<br/><br/>Com duas casas decimais: ${numero.toFixed(2)}`


