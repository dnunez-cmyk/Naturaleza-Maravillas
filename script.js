// Animación sencilla al hacer scroll

const imagenes = document.querySelectorAll("img");

window.addEventListener("scroll", () => {

    imagenes.forEach((img) => {

        const posicion = img.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 100) {

            img.style.opacity = "1";
            img.style.transform = "translateY(0)";
        }

    });

});

imagenes.forEach((img) => {

    img.style.opacity = "0";
    img.style.transform = "translateY(50px)";
    img.style.transition = "1s";

});