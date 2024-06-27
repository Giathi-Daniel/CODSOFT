// window onscroll
const navigation = document.querySelector('nav');
window.addEventListener("scroll", () => {
  if(window.scrollY > 100) {
    navigation.classList.add('sticky');
  } else {
    navigation.classList.remove('sticky')
  }
})


// NAVIGATION BAR
const menuBtn = document.querySelector('#menuOpen');
const navItems = document.querySelector('.nav__list');
const menuClose = document.querySelector('#menuClose');

function toggleMenu() {
  navItems.classList.toggle('active');
  menuClose.style.display = (navItems.classList.contains('active')) ? 'inline-block' : 'none';
  menuBtn.style.display = (navItems.classList.contains('active')) ? 'none' : 'inline-block';
}

menuBtn.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);

// navClose
const navMenuItems = navItems.querySelectorAll('a');
if (window.innerHeight < 820) {
  navMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      toggleMenu();
    })
  })
}


