import { productInfo } from '../api/productsAPI.js';

/* ---VARIABLES--- */






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





/* ---EVENT LISTENERS--- */