let search = document.querySelector('.search-form')
let shoppingCart = document.querySelector('.shopping-cart')
let loginForm = document.querySelector('.login-form')
let formSubmit = document.querySelector('.toggle-form')
let menuBtn = document.querySelector('.navbar')

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active')
    menuBtn.classList.remove('active')
}

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    search.classList.remove('active');
    loginForm.classList.remove('active')
    menuBtn.classList.remove('active')
}


formSubmit.addEventListener("click", () => {
    const signupForm = document.querySelector('.signup-form')
    signupForm.innerHTML += ``
})

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active')
    shoppingCart.classList.remove('active');
    search.classList.remove('active');
    menuBtn.classList.remove('active')
}

document.querySelector('#menu-btn').onclick = () => {
    menuBtn.classList.toggle('active')
    loginForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    search.classList.remove('active')
}

// remove active classes when scrolling
window.onscroll = () => {
    search.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
}

// SWIPER
// var swiper = new Swiper('.product-slider', {
//     loop:true,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     centeredSlides: true,
//     breakpoints: {
//       0: {
//         slidesPerView: 2,
//       },
//       768: {
//         slidesPerView: 3,
//       },
//       1020: {
//         slidesPerView: 4,
//       },
//     },
// });


// var swiper = new Swiper(".review-slider", {
//     loop:true,
//     spaceBetween: 20,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     centeredSlides: true,
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1020: {
//         slidesPerView: 3,
//       },
//     },
//   });