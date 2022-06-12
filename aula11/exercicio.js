let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A


const guardaUmValor = varA
varA = varB // B
varB = varC // C
varC = guardaUmValor // A


console.log(varA, varB, varC)

