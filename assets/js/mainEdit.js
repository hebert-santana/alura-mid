function playSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

// enquanto
// percorrer uma lista usando a estrutura de repetição
// criar uma condição para evitar o loop infinito
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
// o class é um atributo do elemento; em listaDeTeclas[0].classList temos umas lista com 2 elementos; o index 0 = tecla (classe) e o index 1 = tecla_pom (classe); então apara acessar a segunda classe dessa lista, usamos classList[1]
    const instrumento = tecla.classList[1];
// Recurso - template string para criar textos dinâmicos
// o idAudio vai receber nossa string que vai ter uma parte dinâmica, por isso usamos a crase, a variável entres chaves e $ antes das chaves para fazer uma abertura dentro do JS
    const idAudio = `#som_${instrumento}`;

// usamos função anônima para ser o valor do atributo onclick para através dela após o clique a gente chamar a função playSom
// toda vez que colocamos () logo após a função, ela executa automaticamente sem o usuário interagir com ela

    tecla.onclick = function () { 
        playSom(idAudio);
    }
// evento tecla apertada onkeydown
// se (dada condição for verdadeira) faça {isso}
    
    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    contador = contador + 1;
}


