const alunos = ['Luiz', 'Maria', 'Joao']

console.log(alunos[0]) // aqui eu imprimo a primeira posição que é o Luiz

alunos[0] = 'Eduardo'; // Aqui eu mudei a primeira posição que era Luiz para Eduardo

console.log(alunos);

alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Fábio';
alunos[alunos.length] = 'Luana'; // dessa forma eu adiciono mais pessoas no array

alunos.push('Otávio') // adiciona esse elemento no final do array, igual o outro só que de outra forma.
alunos.unshift('Luiza') // Adiciona esse elemento no começo do array e move o indice dos outros, pois ele se torna 0.
alunos.pop(); // Remove o ultimo elemento do array.
alunos.shift(); // Remove o primeiro elemento do array. 

console.log(alunos.slice(0,3)) // aqui eu "fatio" pego do elemento 0 até o 2, eu passo sempre 1 a mais para pegar o que eu quero, sendo assim eu quero pegar apenas os 3 primeiros então passo do 0 a 3.
console.log(alunos.slice(0, -1)) // Aqui eu pego até o penultimo, pois aqui é como se fosse de traz para frente.
console.log(alunos)

delete alunos[1]; // Aqui a gente deleta um elemento do meu array, porém fica um buraco nele.

console.log(alunos instanceof Array) // aqui eu estou perguntando se alunos é uma estancia de array e vai me devolver verdadeiro ou falso.
console.log(typeof alunos) // aqui eu consigo ver o tipo que é a variavel alunos, caso seja um array vai me devolver object.