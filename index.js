//Boton Modo nocturno
const btnSwitch = document.querySelector(".botonRrssOscuro__boton");

//Menu hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("active");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("active");
});

//Cambiar el logotipo
const logo = document.querySelector(".head__logo");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
});

//banner-principal (termianl style text effect)
function text(words) {
    let o = document.querySelector(".presentacion__texto__guion");
    let t = document.querySelector(".presentacion__texto__js");
    let waite = false;
    let visible = true;
    let charCounter = 1;
    let x = 1;
    let currentIndex = 0;

    window.setInterval(() => {
        if (charCounter === 0 && waite === false) {
            waite = true;
            t.innerHTML = words[currentIndex].substring(0, charCounter);
            window.setTimeout(function () {
                x = 1;
                charCounter += x;
                waite = false;
            }, 500);
        } else if (charCounter === words[currentIndex].length + 1 && waite === false) {
            waite = true;
            window.setTimeout(function () {
                x = -1;
                charCounter += x;
                waite = false;
                currentIndex = (currentIndex + 1) % words.length;
                charCounter = 1;
            }, 500);
        } else if (waite === false) {
            t.innerHTML = words[currentIndex].substring(0, charCounter);
            charCounter += x;
        }
    }, 200);

    window.setInterval(() => {
        if (visible === true) {
            o.className = "un hidden";
            visible = false;
        } else {
            o.className = "presentacion__texto__guion";
            visible = true;
        }
        if (waite === true && charCounter === 0) {
            currentIndex = (currentIndex + 1) % words.length;
            waite = false;
        }
    }, 500);
}

text(["diseñadora web", "diseñadora gráfica", "diseñadora editorial",]);



// //banner-principal (termianl style text effect)
// function text(words) {
//     let o = document.querySelector(".presentacion__texto__guion");
//     let t = document.querySelector(".presentacion__texto__js");
//     let waite = false;
//     let visible = true;
//     let charCounter = 1;
//     let x = 1;
//     let currentIndex = 0;

//     window.setInterval(() => {
//         if (charCounter === 0 && waite === false) {
//             waite = true;
//             t.innerHTML = words[0].substring(0, charCounter);
//             window.setTimeout(function () {
//                 x = 1;
//                 charCounter += x;
//                 waite = false;
//             }, 500);
//         } else if (charCounter === words[0].length + 1 && waite === false) {
//             waite = true;
//             window.setTimeout(function () {
//                 x = -1;
//                 charCounter += x;
//                 waite = false;
//                 currentIndex = (currentIndex + 1) % words.length;
//             }, 500);
//         } else if (waite === false) {
//             t.innerHTML = words[currentIndex].substring(0, charCounter);
//             charCounter += x;
//         }
//     }, 200);

//     window.setInterval(() => {
//         if (visible === true) {
//             o.className = "un hidden";
//             visible = false;
//         } else {
//             o.className = "presentacion__texto__js";
//             visible = true;
//         }
//         if (waite === true && charCounter === 0) {
//             currentIndex = (currentIndex + 1) % words.length;
//             waite = false;
//         }
//     }, 500);
// }

// text(["diseñadora web", "diseñadora gráfica", "diseñadora editorial"]);

//Carrousel certificados
let images = Array.from(document.getElementsByClassName("educacion__carrusel__contenido__img"));
let mainPhoto = document.getElementById("educacion__menu__foto");
let slideIndex = 0;

function updateimage(event) {
    let image = event.target
    mainPhoto.src = image.src
}

images.forEach(function (image) {
    image.addEventListener("click", updateimage);
});


//Portfolio
const items = document.querySelectorAll('.portafolio__navegacion__item');
const contenido = document.querySelectorAll('#web, #redes, #editorial, #fotografia');

contenido.forEach((c) => (c.style.display = 'none'));

contenido[0].style.display = 'block';
items[0].classList.add('activate');

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        contenido.forEach((c) => (c.style.display = 'none'));
        items.forEach((i) => i.classList.remove('activate'));
        contenido[index].style.display = 'block';
        item.classList.add('activate');
    });
});

// Agrega un evento de clic a todos los botones de "Ver más"
const abrirBotones = document.querySelectorAll('.portafolio__boton');
abrirBotones.forEach((boton) => {
    boton.addEventListener('click', (event) => {
        const target = event.target.dataset.target;
        mostrarModal(target);
    });
});

//Boton emergente
function mostrarModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('portafolio__mostrar');
}

// Obtener todos los carruseles en la página
const carruseles = document.querySelectorAll(".portafolio__carrusel");

carruseles.forEach((carrusel, index) => {
    const grande = carrusel.querySelector(".portafolio__grande");
    const puntos = carrusel.querySelectorAll(".portafolio__carrusel__punto");

    puntos.forEach((punto, i) => {
        punto.addEventListener('click', () => {
            let posicion = i;
            let operacion = posicion * -20;

            grande.style.transform = `translateX(${operacion}%)`;

            puntos.forEach((p) => {
                p.classList.remove('activo');
            });
            punto.classList.add('activo');
        });
    });
});

const botonesCerrar = document.querySelectorAll('.portafolio__btn__cerrar');
// Función para ocultar una ventana emergente
function ocultarModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('portafolio__mostrar');
}

// Agregar evento de clic a todos los botones de cierre
botonesCerrar.forEach((boton) => {
    boton.addEventListener('click', (event) => {
        const target = event.target.dataset.close;
        ocultarModal(target);
    });
});