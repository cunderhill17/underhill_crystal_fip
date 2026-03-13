//import { productInfo } from '../api/productsAPI.js';

/* ---VARIABLES--- */

let shoppingCart = [];





/* ---FUNCTIONS--- */

export function addProductQuantity() {
    let beverageQuantity = document.querySelector('.beverage-quantity');
    let newQuantity = Number(beverageQuantity.innerText);

    //console.log(beverageQuantity);

    if (newQuantity < this.dataset.max) {
        newQuantity++

        beverageQuantity.innerText = `${newQuantity}`;
    }
}

export function minusProductQuantity() {
    let beverageQuantity = document.querySelector('.beverage-quantity');
    let newQuantity = Number(beverageQuantity.innerText);
    
    //console.log(beverageQuantity);

    if (newQuantity > this.dataset.min) {
        newQuantity--;

        beverageQuantity.innerText = `${newQuantity}`;
    }
}

export function addProductToCart() {
    let beverageQuantity = document.querySelector('.beverage-quantity');
    let newQuantity = Number(beverageQuantity.innerText);

    let item = {id: this.dataset.productId, quantity: newQuantity};

    shoppingCart.push(item);

    console.log(shoppingCart);
}





/* ---EVENT LISTENERS--- */