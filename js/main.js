import './api/productsAPI.js';
import './api/contactInfoAPI.js';
import './components/map.js';
import './components/navigation.js';
import './components/productCard.js';


import { getProducts } from './api/productsAPI.js';
import { getContactInfo } from './api/contactInfoAPI.js';
import { addProductImages, openProductCard, displayCard } from './components/productCard.js';
import { productContainer } from './components/productCard.js';
import { setFooterContact, address } from './components/footer.js';
import { setContactDetails, sales } from './components/contactDetails.js';


//called on page load
async function init() {
    //Ensure data is loaded before continuing
    await getProducts(); 
    await getContactInfo();

    //Conditional statements to ensure that content is loaded on specific pages 
    if (productContainer) {
      addProductImages();
    }

    if (address) {
        setFooterContact();
    }

    if (sales) {
        setContactDetails();
    }

    
    //Product Card Event Handler
    //Included after the getProducts to ensure that the images will already be loaded before the event listener is added 
    const flavors = document.querySelectorAll('.beverageFlavor');
    if (flavors) {
        flavors.forEach(flavor => flavor.addEventListener('click', openProductCard));
        flavors.forEach(flavor => flavor.addEventListener('click', displayCard));
    }
    
}

init();