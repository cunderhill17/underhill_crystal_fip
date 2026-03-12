/* ---VARIABLES--- */

//Hamburger Menu Variables
const menuBtn = document.querySelector('header .menu img#hamburger-menu');
const mainNav = document.querySelector('header nav');


/* ---FUNCTIONS--- */

//Hamburger Menu Functions
function toggleNav() {
    mainNav.classList.toggle('slide-toggle');
}


/* ---EVENT LISTENERS--- */

//Hamburger Menu Event Handler
if (menuBtn) {
  menuBtn.addEventListener('click', toggleNav);
}