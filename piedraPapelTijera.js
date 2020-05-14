function juego(eleccionPersona){
    var persona = ["piedra", "papel", "tijera"];
    var pc = ["piedra", "papel", "tijera"];
    var eleccion = Math.floor(Math.random() * (3 - 0)) + 0;
    console.log("Pc eligio " + pc[eleccion] );
    if (eleccionPersona == persona[0] && pc[0] == pc[eleccion]){
        console.log("Empate");
    }else if(eleccionPersona == persona[0] && pc[1] == pc[eleccion]){
        console.log("Pc Gana");
    }else if(eleccionPersona == persona[0] && pc[2] == pc[eleccion]){
        console.log("Persona Gana");
    }else if(eleccionPersona == persona[1] && pc[0] == pc[eleccion]){
        console.log("Persona Gana");
    }else if(eleccionPersona == persona[1] && pc[1] == pc[eleccion]){
        console.log("Empate");
    }else if(eleccionPersona == persona[1] && pc[2] == pc[eleccion]){
        console.log("Pc Gana");
    }else if(eleccionPersona == persona[2] && pc[0] == pc[eleccion]){
        console.log("Pc Gana");
    }else if(eleccionPersona == persona[2] && pc[1] == pc[eleccion]){
        console.log("Persona Gana");
    }else if(eleccionPersona == persona[2] && pc[2] == pc[eleccion]){
        console.log("Empate");
    }else{
        console.log("No es una opción del juego");
    }
}
console.log("Escribe piedra, papel, tijera para poder jugar");
juego();