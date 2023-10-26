document.addEventListener('DOMContentLoaded', function() {
    let onOffButton = document.getElementById('onOffButton');
    let gamepad = document.querySelector('.gamepad');
    let isGifVisible = false; // Ver si el GIF está visible
    let originalGamepadStyle = gamepad.style.cssText; // vuelve a la pantalla inicial
    let imageIndex = 0; // Aqui rastreo la imagen se debe mostrar

    // Lista de imagenes "img"
    let imageFiles = ['../img/animals.gif', '../img/jump.gif', '../img/mario.gif', '../img/mariokart.gif'];

    onOffButton.addEventListener('click', function() {
        if (isGifVisible) {
            gamepad.style.backgroundImage = 'none';
            gamepad.style.cssText = originalGamepadStyle;
        } else {
            gamepad.style.backgroundImage = 'url("../img/start.gif")';
        }
        isGifVisible = !isGifVisible;
    });

    document.querySelector('.botonRight').addEventListener('click', cambiarImagen);
    document.querySelector('.botonDown').addEventListener('click', cambiarImagen);
    document.querySelector('.botona').addEventListener('click', cambiarImagen);
    document.querySelector('.botonb').addEventListener('click', cambiarImagen);
    document.querySelector('.JoystickRight').addEventListener('click', cambiarImagen);
    document.querySelector('.botonMas').addEventListener('click', cambiarImagen);
    document.querySelector('.botonMas2').addEventListener('click', cambiarImagen);

    function cambiarImagen() {
        // Cambia la imagen de fondo a la siguiente imagen en la lista
        imageIndex++;
        if (imageIndex >= imageFiles.length) {
            imageIndex = 0; // Vuelve al inicio si llega al final de la lista
        }
        gamepad.style.backgroundImage = 'url("../img/' + imageFiles[imageIndex] + '")';
    };

    document.querySelector('.botonMenos').addEventListener('click', CambiarImagen);
    document.querySelector('.botonx').addEventListener('click', CambiarImagen);
    document.querySelector('.botony').addEventListener('click', CambiarImagen);
    document.querySelector('.botonUp').addEventListener('click', CambiarImagen);
    document.querySelector('.botonLeft').addEventListener('click', CambiarImagen);
    document.querySelector('.JoystickLeft').addEventListener('click', CambiarImagen);

    function CambiarImagen() {
        // Cambia la imagen de fondo a la imagen anterior en la lista
        imageIndex--;
        if (imageIndex < 0) {
            imageIndex = imageFiles.length - 1; // Vuelve al final si está en el inicio de la lista
        }
        gamepad.style.backgroundImage = 'url("../img/' + imageFiles[imageIndex] + '")';
    };
}); 
