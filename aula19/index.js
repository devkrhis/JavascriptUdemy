/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados.

Referência (mutável) - array, object, function - valores passador por referência.
*/

let a = 'A';
let b = a; // copiei o valor de a para B, por isso ele não vai mudar lá na frente
console.log(a,b);

a = 'Outra coisa';
console.log(a,b) // ele não vai passar o valor para B pois isso só ocorre quando é um dado por referência, dado primitivo são imutaveis (não podem ter o seu valor modificado)

let array = [1, 2, 3];
let copia = [...array] // agora eu fiz Spread, ele copiou o valor, então se eu alterar o Array depois, não vai mudar esse valor, igual uma variavel primitiva.
let copiaDaCopia = copia; // vai ter o mesmo valor da copia

array.push(4);
console.log(array, copia); // vai mostrar o mesmo valor, pois apontam pro mesmo valor na memoria

copia.pop(4)
console.log(array, copia); // vai mostrar o mesmo valor, pois apontam pro mesmo valor na memoria