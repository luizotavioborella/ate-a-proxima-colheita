const botao = document.getElementById("ver-ajuste");
const ajuste = document.getElementById("divisao-ajustada");

ajuste.addEventListener("toggle", function () {
    if (ajuste.open) {
        botao.textContent = "Ocultar divisão ajustada";
    } else {
        botao.textContent = "Ver divisão ajustada";
    }
});

const desafio = document.getElementById("desafio");
const palpite = document.getElementById("palpite");
const resposta = document.getElementById("resposta");

desafio.addEventListener("submit", function (evento) {
    evento.preventDefault();
    if (Number(palpite.value) === 8 ) {
        resposta.textContent = "Acertou! 14 / 2 dá 7 dias de cevada. A falta começa no dia 8.";
    } else {
        resposta.textContent = "Tente de novo. Conte os dias cobertos e pense em qual dia vem depois."
    }
});