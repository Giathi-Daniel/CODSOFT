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


// download button
document.getElementById('downloadButton').addEventListener('click', function() {
  let pdfEmbed = document.getElementById('pdfEmbed');
  pdfEmbed.src = 'My Resume.pdf';
  pdfEmbed.style.display = 'block';

  fetch('My Resume.pdf')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.blob();
      })
      .then(blob => {
          let link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'My Resume.pdf';
          link.style.display = 'none'; // Hide the link element
          document.body.appendChild(link); // Append the link to the DOM
          link.click(); // Programmatically click the link
          document.body.removeChild(link); // Clean up: remove the link from the DOM
      })
      .catch(error => {
          console.error('Error fetching the PDF file:', error);
      });
});

