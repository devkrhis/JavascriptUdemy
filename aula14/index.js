let num1 = 1500; // number
let num2 = 2.5; // number

// num1 += num2 //  num1 = num1 + num2

num = Number(num1.toFixed(2)) // preciso fazer isso pois o javascript não é preciso, sendo assim eu forço ele a ser ou decimal ou não

console.log(num1.toString(2)) // toString transforma em string e passando o 2 na frente ele vira binário.
console.log(num1.toFixed(2)) // toFixed eu decido para quantos numero eu quero arredondar, exemplo passei 2 então são duas casas decimais.
console.log(Number.isInteger(num1)); // Number.IsInteger ele traz verdadeiro e falso e pergunta se o numero é inteiro, se for inteiro ele traz true se não ele traz false

let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); // aqui eu trato ele perguntando se o temp vai dar NaN sendo assim ele vai me trazer verdadeiro ou falso, não faça conta com string


