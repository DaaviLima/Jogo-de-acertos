let listaDeNumeros = [];
let numeroLimite = 10;
let numeroSecereto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTexto('h1', 'Jogo do numero secreto');
    exibirTexto('p', 'Escolha um numero entre 1 e 10');
}
mensagemInicial();



function verificarEscolha() {
    let numeroEscolhido = document.querySelector('input').value;
    if (numeroEscolhido == numeroSecereto) {
        exibirTexto('h1', 'Acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa} ! `;
        exibirTexto('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (numeroEscolhido > numeroSecereto) {
            exibirTexto('p', 'O número secreto é menor')
        } else {
            exibirTexto('p', 'O número secreto é maior')
        }
        tentativas++;
        limparCampo()

    }
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementos  =listaDeNumeros.length;
    if(quantidadeDeElementos == numeroLimite){
        listaDeNumeros = [];
    }
    if(listaDeNumeros.includes(numeroEscolhido)){
        return gerarNumero;
    }else {
        listaDeNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    numeroEscolhido = document.querySelector('input')
    numeroEscolhido.value = '';
}

function reiniciarJogo() {
    numeroSecereto = gerarNumero();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}