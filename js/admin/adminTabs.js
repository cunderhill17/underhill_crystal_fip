/* ---VARIABLES--- */

// Variables for switching tabs on the admin products page
const viewProduct = document.querySelector('#viewProducts');
const createProduct = document.querySelector('#createProduct');
const individualProduct = document.querySelector('#individualProduct');

const viewProductsTab = document.querySelector('#viewProductsTab');
const createProductTab = document.querySelector('#createProductTab');
// const viewSingleProductBtns = document.querySelectorAll('.viewProduct');



/* ---FUNCTIONS--- */

//Functions to switch between the different sections on the admin products page (create product/ view products/ view single product)
function displayCreateProduct() {

    if (!viewProduct.classList.contains('hidden')) {
        viewProduct.classList.add('hidden');
    }

    if (!individualProduct.classList.contains('hidden')) {
      individualProduct.classList.add('hidden');
    }

    if (createProduct.classList.contains('hidden')) {
        createProduct.classList.remove('hidden');
    }

}

function displayViewProducts() {
    if (viewProduct.classList.contains('hidden')) {
        viewProduct.classList.remove('hidden');
    }

    if (!createProduct.classList.contains('hidden')) {
        createProduct.classList.add('hidden');
    }

    if (!individualProduct.classList.contains('hidden')) {
      individualProduct.classList.add('hidden');
    }
}

export function displayViewSingleProduct() {
    if (!createProduct.classList.contains('hidden')) {
        createProduct.classList.add('hidden');
    }

    if (!viewProduct.classList.contains('hidden')) {
        viewProduct.classList.add('hidden');
    }

    if (individualProduct.classList.contains('hidden')) {
      individualProduct.classList.remove('hidden');
    }
}



/* ---EVENT LISTENERS--- */

// Admin event handler to switch tabs on the admin products page
if (viewProductsTab) {
    viewProductsTab.addEventListener('click', displayViewProducts);
    createProductTab.addEventListener('click', displayCreateProduct);
}