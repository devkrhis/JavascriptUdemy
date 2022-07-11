// Operador Ternario.

const pontuacaoUsuario = 500;
                            //Dependendo do tamanho da condição é necessário colocar ().
                            //(Condição >=)  se 'valor verdadeiro' senão 'valor falso'.
const nivelUsuaio = pontuacaoUsuario >= 1000 ? 'Usuário vip' : 'Usuário Normal';
console.log(nivelUsuaio);

// é a mesma coisa que isto:

if (pontuacaoUsuario >= 1000){
    console.log("Usuário vip");
} else {
    console.log("Usuário Normal");
}

const corUsuario = null;
const corPadrao = corUsuario || "Preto";
                    // Aqui eu to pegando o valor, como está setado como null, a cor padrão vai ser preto, o termo utilizado para isto é fallback.