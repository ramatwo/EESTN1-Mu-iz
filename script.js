// Manejo del menú desplegable
let menuToggle = document.getElementById('menuToggle'); // Obtiene el elemento del DOM con el ID 'menuToggle', que es el botón para abrir/cerrar el menú.
let menu = document.getElementById('menu'); // Obtiene el elemento del DOM con el ID 'menu', que es el contenedor del menú desplegable.

// Evento para abrir y cerrar el menú
menuToggle.addEventListener('click', function () {
    // Rotar "+" a "x"
    menuToggle.classList.toggle('rotate'); // Alterna la clase 'rotate' para girar el signo "+" a "x" o viceversa.

    // Mostrar u ocultar el menú con la animación
    if (menu.classList.contains('menu-closed')) { // Verifica si el menú está cerrado.
        menu.classList.remove('menu-closed'); // Si el menú está cerrado, quita la clase 'menu-closed'.
        menu.classList.add('menu-open'); // Agrega la clase 'menu-open' para abrir el menú.
    } else {
        menu.classList.remove('menu-open'); // Si el menú está abierto, quita la clase 'menu-open'.
        menu.classList.add('menu-closed'); // Agrega la clase 'menu-closed' para cerrar el menú.
    }
});

// Slider interactivo
let currentSlide = 1; // Controla cuál imagen del slider está visible inicialmente, comenzando con la primera.
const totalSlides = 6; // Define el número total de imágenes en el slider.

// Evento para cambiar al slide anterior
document.getElementById('prev').addEventListener('click', function () {
    currentSlide--; // Reduce el índice de la diapositiva actual en uno.
    if (currentSlide < 1) { // Si se retrocede más allá de la primera diapositiva,
        currentSlide = totalSlides; // se pasa a la última diapositiva.
    }
    updateSlider(); // Actualiza el contenido del slider para reflejar la diapositiva actual.
});

// Evento para cambiar al siguiente slide
document.getElementById('next').addEventListener('click', function () {
    currentSlide++; // Aumenta el índice de la diapositiva actual en uno.
    if (currentSlide > totalSlides) { // Si se avanza más allá de la última diapositiva,
        currentSlide = 1; // se pasa a la primera diapositiva.
    }
    updateSlider(); // Actualiza el contenido del slider para reflejar la diapositiva actual.
});

// Función para actualizar el contenido del slider
function updateSlider() {
    let slideContent = document.getElementById('slide-content'); // Obtiene el contenedor de contenido del slider.
    let images = [ // Array que contiene las rutas de las imágenes del slider.
        '1eest_n_1.jpg',
        '2Python.png',
        '3css.png',
        '4GMS2.png',
        '5arduino.png',
        '6office.png'
    ];
    slideContent.innerHTML = ` 
        <h2>Imagen ${currentSlide}</h2> <!-- Título de la diapositiva basado en el número actual de diapositiva. -->
        <img src="${images[currentSlide - 1]}" alt="Imagen ${currentSlide}"> <!-- Muestra la imagen correspondiente a la diapositiva actual. -->
        <p>Texto ${currentSlide}</p> <!-- Muestra un texto descriptivo relacionado con la diapositiva actual. -->
    `;
}

// Se asegura de que el menú funcione en todas las páginas
document.addEventListener('DOMContentLoaded', function () {
    if (menu.classList.contains('menu-open')) { // Verifica si el menú está abierto al cargar la página.
        menu.classList.remove('menu-open'); // Si está abierto, lo cierra quitando la clase 'menu-open'.
        menu.classList.add('menu-closed'); // Agrega la clase 'menu-closed' para asegurarse de que esté cerrado.
    }
});
