
// Aguarda o carregamento completo do HTML
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona os elementos da página
    const titulo = document.querySelector("h1");
    const botao = document.querySelector("#meuBotao");

    // Adiciona um evento de clique ao botão
    botao.addEventListener("click", () => {
        titulo.textContent = "Texto alterado com JavaScript!";
        titulo.style.color = "#27ae60";
    });

});
