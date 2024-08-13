document.addEventListener("DOMContentLoaded", function() {
    var div = document.querySelector('div');
    var boton = document.querySelector('button');
    div.addEventListener("click", function() {
        alert('¡Hola! Soy el div');
    });
    boton.addEventListener("click", function(event) {
        event.stopPropagation(); 
    });
});