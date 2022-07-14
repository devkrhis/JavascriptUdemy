let a = 'A';
let b = 'B';
let c = 'C';

numeros = [b,c,a];
[a,b,c] = numeros // atribuição via destruturação. 

console.log(a,b,c)


const numerosArray = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto] = numerosArray;

console.log(primeiroNumero, segundoNumero)
console.log(resto) // aqui vou pegar o resto do array

// lista dentro de lista:
                // 0            1           2
            //   0  1  2    0  1  2    0  1  2
const lista = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(lista[1][2]) // sendo assim eu acesso a lista 1 e pego o que está na posição 2
