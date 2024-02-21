// seleccionando teclas
let dibujo_teclas = [...document.querySelectorAll('.teclado>div>div')];



// funcion que aprieta las teclas
const presionar=()=>{

    let index= Math.floor(Math.random()*26+1) 

    dibujo_teclas[index].classList.toggle('back_white');

    // funcion para que la tecla vuelva a su color
    setTimeout(()=>{dibujo_teclas[index].classList.toggle('back_white')},200)

}
// intervalo de presionar las teclas
setInterval(presionar,150);