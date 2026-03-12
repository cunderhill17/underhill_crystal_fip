/* ---VARIABLES--- */

// Admin Vertical Nav variables
const openVerticalNav = document.querySelector('#openVerticalNav');
const closeVerticalNav = document.querySelector('#closeVerticalNav');
const verticalNav = document.querySelector('#vertical-nav');

// Variable for dropdowns on Vertical Nav menu Admin pages
const toggleBtns = document.querySelectorAll('.dropdown-toggle'); 



/* ---FUNCTIONS--- */

//Functions to open and close the vertical nav bar on admin pages
function openVerticalNavMenu() {
    verticalNav.classList.add('open');
}

function closeVerticalNavMenu() {
    verticalNav.classList.remove('open');
}

//Function to toggle the submenu open and close in the vertical nav menu on admin pages
function toggleSubMenu(e) {
    const button = e.currentTarget;
    const menu = button.nextElementSibling;

    menu.classList.toggle('open');
}



/* ---EVENT LISTENERS--- */

//Admin Vertical Nav Bar Event handler
if (openVerticalNav) {
  openVerticalNav.addEventListener('click', openVerticalNavMenu);
  closeVerticalNav.addEventListener('click', closeVerticalNavMenu);
}

// Admin event handler to add a click event to the button to toggle the sub menu
if (toggleBtns) {
  toggleBtns.forEach(toggleBtn => toggleBtn.addEventListener('click', toggleSubMenu));
}