/* Variables */

const menuBtn = document.querySelector('header .menu img#hamburger-menu');
const mainNav = document.querySelector('header nav');


/* Functions */

function toggleNav() {

    mainNav.classList.toggle('slide-toggle');

}


/* Event Handlers */

menuBtn.addEventListener('click', toggleNav);