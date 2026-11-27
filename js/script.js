const botao = document.getElementById("ver-ajuste");
const ajuste = document.getElementById("divisao-ajustada");

ajuste.hidden = true;
botao.hidden = false;

botao.addEventListener("click", function () {
    ajuste.hidden = !ajuste.hidden;
    if (ajuste.hiddden) {
        botao.textContent = "Ver divisão ajustada";
        botao.setAttribute("aria-expanded", "false");
    } else {
        botao.textContent = "Ocultar divisão ajustada";
        botao.setAttribute("aria-expanded", "true")
    }
})