import './admin/adminTabs.js';
import './admin/verticalNav.js';
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
import { productList, updateAdminProducts } from './components/adminProducts.js';

//called on page load
async function init() {
    await getProducts(); //needs to finish loading before other function can be called
    await getContactInfo();

    if (productContainer) {
      addProductImages();
    }

    if (address) {
        setFooterContact();
    }

    if (sales) {
        setContactDetails();
    }

    if (productList) {
        updateAdminProducts();
    }

    //Product Card Event Handler
    const flavors = document.querySelectorAll('.beverageFlavor');
    if (flavors) {
        flavors.forEach(flavor => flavor.addEventListener('click', openProductCard));
        flavors.forEach(flavor => flavor.addEventListener('click', displayCard));
    }
    
}

init();