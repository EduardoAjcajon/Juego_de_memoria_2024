let div_puntos = document.querySelector(".puntos");

function cargar_punto (corazones_restantes){
    div_puntos.innerHTML = "";
    div_puntos.innerHTML = `🪙 +${corazones_restantes}`;

    setTimeout (() => {
        div_puntos.innerHTML = `🪙 ${corazones_restantes}`;
    }, 1000);
};

export { cargar_punto }