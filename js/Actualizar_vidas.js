export let vidas = ["❤️", "❤️", "❤️", "❤️", "❤️", "❤️"];

let div_vidas = document.querySelector(".vidas");

export function actualizar_vidas(resultado){
    div_vidas.innerHTML="";
    
    if(resultado){
        vidas.forEach((cada_vida) => {
            let div = document.createElement("div");
            div.innerHTML = cada_vida;
            div_vidas.appendChild(div);
        });    
    }else{
        vidas.pop();
        vidas.forEach((cada_vida) => {
            let div = document.createElement("div");
            div.innerHTML = cada_vida;
            div_vidas.appendChild(div);
        });
    }
};

actualizar_vidas(true);