function playSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

// enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
// o class é um atributo do elemento; em listaDeTeclas[0].classList temos umas lista com 2 elementos; o index 0 = tecla (classe) e o index 1 = tecla_pom (classe); então apara acessar a segunda classe dessa lista, usamos classList[1]
    const instrumento = tecla.classList[1];
// Recurso - template string
// o idAudio vai receber nossa string que vai ter uma parte dinâmica, por isso usamos a crase, a variável entres chaves e $ antes das chaves para fazer uma abertura dentro do JS
    const idAudio = `#som_${instrumento}`;

// usamos função anônima para ser o valor do atributo onclick para através dela após o clique a gente chamar a função playSom
    tecla.onclick = function () { 
        playSom(idAudio);
    }

    contador = contador + 1;
}

// toda vez que colocamos () logo após a função, ela executa automaticamente sem o usuário interagir com ela


