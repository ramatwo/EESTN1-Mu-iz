let currentSlide = 0;
const slides = [
    { img: 'img1.jpg', text: 'Texto 1' },
    { img: 'img2.jpg', text: 'Texto 2' },
    { img: 'img3.jpg', text: 'Texto 3' },
    { img: 'img4.jpg', text: 'Texto 4' },
    { img: 'img5.jpg', text: 'Texto 5' },
    { img: 'img6.jpg', text: 'Texto 6' }
];

// Toggle Menu
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    if (menu.style.left === "0px") {
        menu.style.left = "-200px";
    } else {
        menu.style.left = "0px";
    }
}

// Change Slide
function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    document.getElementById('slideImage').src = slides[currentSlide].img;
    document.getElementById('slideText').innerText = slides[currentSlide].text;
}

// Change Content when clicking menu options
function changeContent(option) {
    alert("Has seleccionado: " + option);
}
