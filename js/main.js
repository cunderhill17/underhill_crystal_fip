/* ---Variables--- */

//Hamburger Menu Variables
const menuBtn = document.querySelector('header .menu img#hamburger-menu');
const mainNav = document.querySelector('header nav');

//Product Card Variables

const productBottle = document.querySelector('#redCurrent');
const productCard = document.querySelector('.product-card-con');
const closeCard = document.querySelector('.card-btn');

/* ---Functions--- */

//Hamburger Menu Functions
function toggleNav() {
    mainNav.classList.toggle('slide-toggle');
}

//Product Card Functions
function openProductCard() {
    productCard.style.top = `${window.scrollY + 35}px`; //helps to position card when it appears on screen
    productCard.classList.add('slide-toggle');
}

function closeProductCard() {
    productCard.classList.remove('slide-toggle');
}

/* ---Event Handlers--- */

//Hamburger Menu Event Handler
menuBtn.addEventListener('click', toggleNav);

//Product Card Event Handler
productBottle.addEventListener('click', openProductCard);

closeCard.addEventListener('click', closeProductCard);