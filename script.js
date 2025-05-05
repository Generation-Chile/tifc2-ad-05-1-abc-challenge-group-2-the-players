// Lista de colores
const colores = ["green", "red", "blue"];

// funcion que elige un color al azar de la lista
function colorAleatorio() {
    const index = Math.floor(Math.random() * colores.length);
    return colores[index];
}

// responde en los h5 con click para cambiar color
document.addEventListener("DOMContentLoaded", function() {
    const allH5 = document.querySelectorAll('h5');

    allH5.forEach(function(h5) {
        h5.addEventListener("click", function() {
            h5.style.color = colorAleatorio();
        });
    });

});