import { productInfo } from '../api/productsAPI.js';

/* ---VARIABLES--- */

let shoppingCart = [];
const shoppingCartIcon = document.querySelector('#toggleShoppingCart');
const shoppingCartCon = document.querySelector('#shopping-cart-con');

const cartQuantity = document.querySelector('#cart-quantity');
const cartItems = document.querySelector('#cart-list-items');


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

    updateShoppingCart();
}

//Updates the contents of the shopping cart list
function updateShoppingCart() {
    let total = 0;
    cartItems.innerHTML = '';

    if (shoppingCart.length === 0) {
        cartQuantity.innerText = ''
    } else {
        shoppingCart.forEach(item => {
            total = total + item.quantity;
            const newDiv = document.createElement('div');
            let id = item.id;

            newDiv.innerHTML = `
                <img src="${productInfo[id].images[1].image}-small.png" alt="${productInfo[id].images[1].alt}">
                <h3 class="paragraph">${productInfo[id].flavor} Liquer</h3>
                <p>x${item.quantity}</p>
                <button class="deleteFromCart" data-product-id="${item.id}">x</button>
            `;

            cartItems.appendChild(newDiv);
        })

        //Add event listener to delete button if there are items in the cart
        const deleteItem = document.querySelectorAll('.deleteFromCart');
        deleteItem.forEach(item => item.addEventListener('click', deleteCardItem));

        cartQuantity.innerText = `${total}`;
    }

    //console.log(total);
}

//Deletes items in the shopping cart
function deleteCardItem() {
    const id = this.dataset.productId;

    const index = shoppingCart.findIndex(item => item.id === id);

    // Remove item if found
    if (index !== -1) {
        shoppingCart.splice(index, 1);
    }

    updateShoppingCart();
}

function toggleShoppingCart() {
    shoppingCartCon.classList.toggle('open');
}



/* ---EVENT LISTENERS--- */
shoppingCartIcon.addEventListener('click', toggleShoppingCart);