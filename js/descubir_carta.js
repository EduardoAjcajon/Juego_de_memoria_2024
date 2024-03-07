// progra pa activar
let todas_las_cartas = document.querySelectorAll(".carta_tracera");
todas_las_cartas.forEach((cada_div) => {

    /* funcion al realizar click */
    cada_div.addEventListener("click", () => {
        
        /* cantidad de cartas descubiertas */
        let cartas_descubiertas = document.querySelectorAll(".activar");
        let total_descubiertas = cartas_descubiertas.length;
        
        if (total_descubiertas < 2){
            cada_div.classList.add("activar")
            cartas_descubiertas = document.querySelectorAll(".activar");
            
            if (total_descubiertas ==1){
                /* condicionas para que espere un segundo */
                setTimeout(() => {

                    cartas_descubiertas.forEach((cada_carta_descubierta) => {
                        cada_carta_descubierta.classList.remove("activar")
                    })
                }, 1000);    
            }
        }else{
            /* te dice si tienes 2 cartas descubiertas */
            console.log("Dos cartas descubiertas")
            
            
        }
    });
});

