// window onscroll
const navigation = document.querySelector('nav');
window.addEventListener("scroll", () => {
  if(this.scrollY > 100) {
    navigation.classList.add('active');
  } else {
    navigation.classList.remove('active')
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


// download button
document.getElementById('downloadButton').addEventListener('click', function() {
  let pdfEmbed = document.getElementById('pdfEmbed');
  pdfEmbed.src = 'My Resume.pdf';
  pdfEmbed.style.display = 'block';

  fetch('My Resume.pdf')
      .then(response => response.blob())
      .then(blob => {
          let link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'My Resume.pdf';
          link.click();
      });
});


// SKILLS SECTION
// const skillButtons = document.querySelectorAll('.skill_item')
// const skillItem = document.querySelectorAll('.skill_desc')

// skillButtons.forEach(item => {
//   item.addEventListener('click', () => {
//     item.classList.add('active');
//     skillItem.classList.add
//   })
// })
