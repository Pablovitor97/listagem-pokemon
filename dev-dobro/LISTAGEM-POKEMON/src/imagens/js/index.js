//passo 1 - pwgar no JS o elemnto HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no JS o Elemento HTML corrrespondente ao body
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// passo 3 - dar um jeito de identificar o clique do ucurario no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {

    //passo 6 - remover a classe do modo-escuro do body
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    // console.log(modoEscuroEstaAtivo);

    if (modoEscuroEstaAtivo) {
        // passo 7 - remover a classe do modo-escuro do body
        body.classList.remove("modo-escuro");

        // passo 8 - trocar a imagem do botão de alterar tema para sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
        //passo 4 - identificar a classe modo-escuro no body
        body.classList.add("modo-escuro");

        //passo 5 - trocar a imagem do botão de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }

});
