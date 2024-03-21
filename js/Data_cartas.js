// Cartasb
// export let cards1 = ["🚀","🛰️","👽","🛸","🪂","🌌","⭐","🌑","🔭","👩‍🚀","☄️","👾"];
// export let cards2 = ["🚀","🛰️","👽","🛸","🪂","🌌","⭐","🌑","🔭","👩‍🚀","☄️","👾"];

// export let cards1 = ["🚀","🛰️","🌌","🌑","👩‍🚀","👾"];
// export let cards2 = ["🚀","🛰️","🌌","🌑","👩‍🚀","👾"];

export let cards1 = ["🚀","🛰️"];
export let cards2 = ["🚀","🛰️"];
// funcion para crear aleatoriedad
function ordenarAleatorio(a, b){
    return Math.random() - 0.5;
}

// Unificar las listas
let todas_las_cartas = cards1.concat(cards2);

// Organiza de una forma aleatoria la lista todas_las_cartas
todas_las_cartas.sort(ordenarAleatorio);

export let lista_aleatoria = todas_las_cartas;