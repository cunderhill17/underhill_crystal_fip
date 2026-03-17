import { productInfo } from '../api/productsAPI.js';

/* ---VARIABLES--- */

export const productName = document.querySelector('#product_name');
const productDescription = document.querySelector('#product_description');
const productIngredients = document.querySelector('#product_ingredients');
const productImageAlt = document.querySelector('#product_image_alt');
const productPrice = document.querySelector('#product_price');
const productSalePrice = document.querySelector('#product_sale_price');
const productStock = document.querySelector('#product_stock');
const productPre1Alt = document.querySelector('#product_pre_1_alt');
const productPre2Alt = document.querySelector('#product_pre_2_alt');
const productPre3Alt = document.querySelector('#product_pre_3_alt');
const productPre4Alt = document.querySelector('#product_pre_4_alt');

const params = new URLSearchParams(window.location.search);
export const id = params.get('id');

/* ---FUNCTIONS--- */

export function setFormValues() {

    productName.value = productInfo[id].flavor;
    productDescription.value = productInfo[id].description;
    productIngredients.value = productInfo[id].ingredients;
    productImageAlt.value = productInfo[id].images[0].alt;
    productPrice.value = productInfo[id].price;
    productSalePrice.value = productInfo[id].salePrice;
    productStock.value = productInfo[id].stock;
    productPre1Alt.value = productInfo[id].images[1].alt;
    productPre2Alt.value = productInfo[id].images[2].alt;
    productPre3Alt.value = productInfo[id].images[3].alt;
    productPre4Alt.value = productInfo[id].images[4].alt;

}


/* ---EVENT LISTENERS--- */