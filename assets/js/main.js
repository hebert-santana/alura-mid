function playSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio).play();

    if (elemento != null && elemento.localName === 'audio') {
       elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// para (enquanto a condição for verdadeira, execute)
// incrementar um valor de variável com contador++
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; // acessar as classes de um elemento com classList
    const idAudio = `#som_${instrumento}`; // template string para criar textos dinâmicos

    tecla.onclick = function () { 
        playSom(idAudio);
    }

    tecla.onkeydown = function (evento) { // nome evento escolhido
        console.log(evento.code == 'Space')
        // se (dada condição for verdadeira) faça {isso}
        if (evento.code === 'Space') {
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}




