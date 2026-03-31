import { productInfo } from '../api/productsAPI.js';
import { addProductQuantity, minusProductQuantity, addProductToCart} from './shoppingCart.js';

/* ---VARIABLES--- */

//Product Card Variables
const productCard = document.querySelector('.product-card-con');
export const productContainer = document.querySelector('#product-container');


/* ---FUNCTIONS--- */

//Product Card Functions
export function openProductCard() {
    productCard.style.top = `${window.scrollY + 35}px`; //helps to position card when it appears on screen
    productCard.classList.add('slide-toggle');
}

export function closeProductCard() {
    productCard.classList.remove('slide-toggle');
}

//Function to display product information
export function displayCard() {
  const id = this.id;
  //let productCard = document.querySelector('.product-card-con');

  productCard.innerHTML = `

    <button class="card-btn brand-btn">X</button>
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
            <h4 class="heading-4 brand-red">${productInfo[id].flavor} Liquer</h4>
            <p class="paragraph">${productInfo[id].description}</p>
            <h4 class="heading-4 brand-red">Ingredients</h4>
            <p class="paragraph">${productInfo[id].ingredients}</p>
            <p class="paragraph">$${productInfo[id].price} CAD</p>
            <p class="paragraph">20% ABV</p>
            <p class="paragraph">750 ml</p>
            <h4 class="heading-4 brand-red">Quantity</h4>
            <div class="quantity-con">
              <button id="minusQuantity" data-product-id="${productInfo[id].id}" data-min="1"> - </button>
              <p class="beverage-quantity">1</p>
              <button id="addQuantity" data-product-id="${productInfo[id].id}" data-max="${productInfo[id].stock}"> + </button>
            </div>
            <button id="addToCart" class="paragraph brand-btn" data-product-id="${productInfo[id].id}">Add To Cart</button>

            <section class="product-flavours">
                <h4 class="heading-4 brand-red">Other Flavors Available</h4>
                <div>
                    <img src="${productInfo[id].otherFlavors[0].image}" alt="${productInfo[id].otherFlavors[0].id} Icon">
                    <img src="${productInfo[id].otherFlavors[1].image}" alt="${productInfo[id].otherFlavors[1].id} Icon">
                    <img src="${productInfo[id].otherFlavors[2].image}" alt="${productInfo[id].otherFlavors[2].id} Icon">
                    <img src="${productInfo[id].otherFlavors[3].image}" alt="${productInfo[id].otherFlavors[3].id} Icon">
                    <img src="${productInfo[id].otherFlavors[4].image}" alt="${productInfo[id].otherFlavors[4].id} Icon">
                </div>
            </section>
        </div>
    </section>

  `;

  //Adds a click event to the product card close button
  const closeCard = document.querySelector('.card-btn');
  closeCard.addEventListener('click', closeProductCard);

  //Adds a click event to the image previews in the product card in order to change the 'main image'
  const imgPreviews = document.querySelectorAll('.img-previews img');
  imgPreviews.forEach(preview => preview.addEventListener('click', changePreview));

  //Adds a click event to the quantity '+' and '-' buttons 
  const addQuantity = document.querySelector('#addQuantity');
  addQuantity.addEventListener('click', addProductQuantity);

  const minusQuantity = document.querySelector('#minusQuantity');
  minusQuantity.addEventListener('click', minusProductQuantity);

  const addToCart = document.querySelector('#addToCart');
  addToCart.addEventListener('click', addProductToCart);

}


//Changes the 'full' image in the product card based on the selected image preview
function changePreview(e) {
  const url = e.target.src;
  const alt = e.target.alt;

  //Only selects the path of the URL string from 'php' onwards
  let imgPath = url.substring(url.indexOf("php/"));
  
  //replaces the part of the path that is labelled as small, with 'medium' in order to show the larger sized photo
  imgPath = imgPath.replace("small", "medium");

  const lgImage = document.querySelector('.img-full');

  lgImage.innerHTML = `<img src="${imgPath}" alt="${alt}">`;
}


//Function to add the product images to the products.html page
export function addProductImages() {
  productContainer.innerHTML = '';

  productContainer.innerHTML = `<h2 class="heading-1 center-text col-span-full">Products</h2>`

  Object.entries(productInfo).forEach(([key, product]) => {
    let html = `
      <div class="pos-relative col-span-full md:col-span-full lg:col-span-4">
        <picture id="${key}" class="beverageFlavor">
          <source srcset="${product.images[0].image}-desktop.png" media="(min-width: 1200px)">
          <source srcset="${product.images[0].image}-tablet.png" media="(min-width: 768px)">
          <img src="${product.images[0].image}-mobile.png" alt="${product.images[0].alt}">
        </picture>
        <h2 class="brand-mocha">${product.flavor}</h2>
      </div>
    `;
    productContainer.insertAdjacentHTML('beforeend', html);
  });

};





/* ---EVENT LISTENERS--- */