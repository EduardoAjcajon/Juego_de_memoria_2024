import { actualizar_vidas, vidas } from "./Actualizar_vidas.js";
import { cargar_punto } from "./puntos.js";
import { iniciar_cronometro } from "./Cargar_cronometro.js"


// Programa para activar las cartas al hacer clic en ellas
let todas_las_cartas = document.querySelectorAll(".carta_tracera");
let etado_del_cronometro = 0;
let contador_cartas = 0;

// forEach sobre todas las cartas
todas_las_cartas.forEach((cada_div) => {
    // Función al realizar clic en una carta
    cada_div.addEventListener("click", () => {


        etado_del_cronometro++;
        if (etado_del_cronometro ==  1){
            iniciar_cronometro(0, 60);
        };

        // Contar la cantidad de cartas descubiertas
        let cartas_descubiertas = document.querySelectorAll(".activar");
        let total_descubiertas = cartas_descubiertas.length;
        
        // Si hay menos de 2 cartas descubiertas, se activa la carta clicada
        if (total_descubiertas < 2) {
            cada_div.classList.add("activar");
            cartas_descubiertas = document.querySelectorAll(".activar");
            
            // Si hay una carta descubierta, se desactivan después de 1 segundo
            if (cartas_descubiertas.length == 2) {
                function comparar (){
                    let carta1 = cartas_descubiertas[0].innerHTML;
                    let carta2 = cartas_descubiertas[1].innerHTML;

                    if (carta1 == carta2){

                        contador_cartas++;
                        if(contador_cartas==todas_las_cartas.length/2){
                            cargar_punto(vidas.length);
                        }
                        setTimeout(() => {
                            console.log("Verdadero");
                            cartas_descubiertas.forEach((total_descubiertas) => {
                                total_descubiertas.classList.add("ocultar");
                                total_descubiertas.classList.remove("activar")
                            });
                        }, 500);
                    }else{
                        actualizar_vidas(false);
                        console.log("Falso");   
                    }
                }
                comparar();
                // Se utiliza setTimeout para esperar un segundo antes de desactivar las cartas
                setTimeout(() => {
                        cartas_descubiertas.forEach((cada_carta_descubierta) => {
                        cada_carta_descubierta.classList.remove("activar");
                    });
                }, 1000);    
            }
        } else {
            // Imprimir mensaje si ya hay 2 cartas descubiertas
            console.log("Dos cartas descubiertas");
        }
    });
});