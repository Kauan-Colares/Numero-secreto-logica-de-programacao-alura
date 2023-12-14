let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function contextoDoTexto(tag, texto){
    const campo = document.querySelector(tag);
    campo.textContent = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
    let títuloInicial = 'Advinhe o número Secreto!';
    let palavrasIniciais = 'Descubra o número secreto palpitando um número entre 1 e 10';
    contextoDoTexto('h1', `${títuloInicial}`);
    contextoDoTexto('p',`${palavrasIniciais}`);
}

exibirMensagemInicial();

function verificarChute(){
    const chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        contextoDoTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        contextoDoTexto('p' , `Parabéns! Você descobriu o número secreto! E só precisou de ${tentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        tentativas++;
        if(chute > numeroSecreto) {
            contextoDoTexto('h1', 'Errou...');
            contextoDoTexto('p', `Seu chute está errado... O número secreto é menor que ${chute}`);
        } else{
            contextoDoTexto('h1', 'Errou...');
            contextoDoTexto('p', `Seu chute está errado... O número secreto é maior que ${chute}`);
        }
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if(quantidadeElementosLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    document.getElementById('reiniciar').setAttribute('disabled', true); 
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
}
