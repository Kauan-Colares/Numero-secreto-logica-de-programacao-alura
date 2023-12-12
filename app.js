let mensagemDeBoasVindas = 'Bem vindo ao jogo!';
alert(mensagemDeBoasVindas);

let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


//enquanto não for igual ao número secreto
while(chute != numeroSecreto){
    chute = prompt(`Tente acertar o número secreto! Escreva um número entre 1 e ${numeroMaximo
}.`);

    //se o chute for igual ao número secreto, ou não
    if (chute == numeroSecreto) {
            break;    
    } else {
        if (chute > numeroSecreto){
            alert(`Você errou....O número secreto é menor que ` + chute);
        } else{
            alert(`Você errou....O número secreto é maior que ` + chute);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }
}


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí, você descobriu o número secreto! ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

