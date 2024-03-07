// Cartas
let cards1 = [
    "🚀","🛰️","👽","🛸","🪂","🌌","⭐","🌑","🔭","👩‍🚀","☄️","👾"
]

let cards2 = [
    "🚀","🛰️","👽","🛸","🪂","🌌","⭐","🌑","🔭","👩‍🚀","☄️","👾"
]

let todas_las_tarjetas = cards1.concat(cards2);
// Elemento HTML

function repartir_cartas (){

    let tablero = document.querySelector("#root");
    
    todas_las_tarjetas.forEach((cada_carta) => {
        let carta = document.createElement('div');
        carta.classList.add("carta_tracera")
        carta.innerHTML =`<div class="carta"> ${cada_carta} </div>`;

        tablero.appendChild(carta);
    });
}

repartir_cartas();

// progra pa activar

let todas_las_cartas = document.querySelectorAll(".carta_tracera");
todas_las_cartas.forEach((cada_div) => {
    cada_div.addEventListener("click", () => {
        cada_div.classList.add("activar")
    })
})