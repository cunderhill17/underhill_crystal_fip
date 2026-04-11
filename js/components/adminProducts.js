import { productInfo } from '../api/productsAPI.js';
import { displayViewSingleProduct } from '../admin/adminTabs.js';

/* ---VARIABLES--- */

export const productList = document.querySelector('#admin-product-list');
const individualProduct = document.querySelector('.admin-product-card-con');




/* ---FUNCTIONS--- */

//Updates the list of products on the admin page within the mini CMS
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
    viewSingleProductBtns.forEach(viewBtn => viewBtn.addEventListener('click', viewSingleProduct));
    
}

//Allows the user to view a single product in more detail on the admin side
//Information comes from the variable 'productInfo' which was imported from the 'productsAPI.js' page
export function viewSingleProduct() {
    const id = this.dataset.productId;

    individualProduct.innerHTML = `
    
        <section class="card-top">
            <h3 class="hidden">Product Images and Purchase Information</h3>
            <div class="img-previews">
                <div>
                    <img src="${productInfo[id].images[1].image}-small.png" alt="${productInfo[id].images[1].alt}">
                </div>
                <div>
                    <img src="${productInfo[id].images[2].image}-small.png" alt="${productInfo[id].images[2].alt}">
                </div>
                <div>
                    <img src="${productInfo[id].images[3].image}-small.jpg" alt="${productInfo[id].images[3].alt}">
                </div>
                <div>
                    <img src="${productInfo[id].images[4].image}-small.png" alt="${productInfo[id].images[4].alt}">
                </div>
            </div>

            <div class="img-full">
                <img src="${productInfo[id].images[1].image}-medium.png" alt="${productInfo[id].images[1].alt}">
            </div>

            <div class="product-info">
                <h4 class="heading-4 brand-red">${productInfo[id].flavor} Liqueur</h4>
                <p class="paragraph">${productInfo[id].description}</p>
                <h4 class="heading-4 brand-red">Ingredients</h4>
                <p class="paragraph">${productInfo[id].ingredients}</p>
                <p class="paragraph">$${productInfo[id].price} CAD</p>
                <p class="paragraph">20% ABV</p>
                <p class="paragraph">750 ml</p>
                <h4 class="heading-4 brand-red">Quantity</h4>
                <div class="quantity-con">
                    <p class="beverage-quantity">${productInfo[id].stock}</p>
                </div>
                <a href="admin-edit-product.html?id=${id}" class="paragraph brand-btn">Edit</a>
                <button class="paragraph brand-btn" data-product-id="${id}">Delete</button>
            </div>
        </section>
    
    `;

    

}


/* ---EVENT LISTENERS--- */