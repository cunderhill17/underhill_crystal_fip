import { productInfo } from '../api/productsAPI.js';
import { displayViewSingleProduct } from '../admin/adminTabs.js';

/* ---VARIABLES--- */

export const productList = document.querySelector('#admin-product-list');





/* ---FUNCTIONS--- */

export function updateAdminProducts() {

    Object.entries(productInfo).forEach(([key, product]) => {
    let html = `
        <tr>
        <td>${product.flavor}</td>
        <td>${product.description}</td>
        <td><button class="viewProduct brand-btn" data-product-id="${key}">View Product</button></td>
        </tr>
    `;
    productList.insertAdjacentHTML('beforeend', html);
    });

    const viewSingleProductBtns = document.querySelectorAll('.viewProduct');
    viewSingleProductBtns.forEach(viewBtn => viewBtn.addEventListener('click', displayViewSingleProduct));

}





/* ---EVENT LISTENERS--- */