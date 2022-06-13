alert("Olá, seja bem vindo a pagina.")

let nome = prompt("Por gentileza nos informe seu nome completo: ")
document.body.innerHTML = `O seu nome é ${nome} <br/>`
document.body.innerHTML += `Seu nome tem ${nome.length} letra <br/>`
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br/>`
document.body.innerhtml += `Qual o primeiro índice da letra a no seu nome? ${nome.indexOf('a')} <br/>`
document.body.innerHTML += `Qual o ultimo índice da letra a no seu nome? ${nome.lastIndexOf('a')}<br/>`
document.body.innerHTML += `As últimas 3 letras do seu nome? ${nome.slice(-3)} <br/>`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split()} <br/>`
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br/>`
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br/>`


console.log(nome)