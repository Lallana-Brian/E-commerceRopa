/* --------------- SHOW MENU --------------- */
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')  

/* --------------- MENU SHOW --------------- */
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu')
    })
}

/* --------------- MENU HIDDEN --------------- */
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu')
    })
}



/* --------------- SHOW CART --------------- */
const cart = document.getElementById('cart'),
        cartShop = document.getElementById('cart-shop'),
        cartClose = document.getElementById('cart-close')  

/* --------------- SHOW CART --------------- */
// Validate if constant exist
if(cartShop) {
    cartShop.addEventListener("click", () => {
        cart.classList.add('show-cart')
    })
}

/* --------------- HIDDEN CART --------------- */
// Validate if constant exist
if(cartClose) {
    cartClose.addEventListener("click", () => {
        cart.classList.remove('show-cart')
    })
}

/* --------------- SHOW LOGIN --------------- */
const login = document.getElementById('login'),
        loginButton = document.getElementById('login-button'),
        loginClose = document.getElementById('login-close')  



/* --------------- LOGIN SHOW --------------- */
// Validate if constant exist
if(loginButton) {
    loginButton.addEventListener("click", () => {
        login.classList.add('show-login')
    })
}

/* --------------- LOGIN HIDDEN --------------- */
// Validate if constant exist
if(loginClose) {
    loginClose.addEventListener("click", () => {
        login.classList.remove('show-login')
    })
}




/* --------------- HOME SWIPER --------------- */
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: true,

    autoplay: {
        delay: 2500,
    },

    speed: 1000, // Velocidad de transición entre slides (en milisegundos)

    pagination: {
        el: ".home-swiper .swiper-pagination", // Especifica que la paginación es para este swiper
        clickable: true,
    },
});

// Detener el autoplay cuando el mouse entra al swiper
const homeSwiperContainer = document.querySelector('.home-swiper');

homeSwiperContainer.addEventListener('mouseenter', function () {
    homeSwiper.autoplay.stop(); // Detener el autoplay
});

homeSwiperContainer.addEventListener('mouseleave', function () {
    homeSwiper.autoplay.start(); // Reiniciar el autoplay
});


// NUEVO SWIPER
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 30,
    centeredSlides: 16,
    slidesPerView: "auto",
    loop: true,

    autoplay: {
        delay: 2500,
    },

    speed: 1000, // Velocidad de transición entre slides (en milisegundos)

    pagination: {
        el: ".new-swiper .swiper-pagination", // Especifica que la paginación es para este swiper
        clickable: true,
    },
});

// Detener el autoplay cuando el mouse entra al swiper
const newSwiperContainer = document.querySelector('.new-swiper');

newSwiperContainer.addEventListener('mouseenter', function () {
    newSwiper.autoplay.stop(); // Detener el autoplay
});

newSwiperContainer.addEventListener('mouseleave', function () {
    newSwiper.autoplay.start(); // Reiniciar el autoplay
});



/* --------------- SHOW SCROLL UP --------------- */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    
    // Si el scroll es mayor o igual a 350px, mostramos el botón
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
        scrollUp.classList.remove('hide-scroll');
    } 
    // Si el scroll es menor a 350px, ocultamos el botón
    else {
        scrollUp.classList.add('hide-scroll');
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);