import { contactInfo } from '../api/contactInfoAPI.js';

/* ---VARIABLES--- */

export const sales = document.querySelector('#contact-sales-email');
const marketing = document.querySelector('#contact-marketing-email');
const address = document.querySelector('#contact-address');
const phoneNumber = document.querySelector('#contact-corporate-number');


/* ---FUNCTIONS--- */

export function setContactDetails() {
    sales.textContent = `${contactInfo[0].sales_email}`;
    marketing.textContent = `${contactInfo[0].marketing_email}`;
    phoneNumber.textContent = `${contactInfo[0].corporate_number}`;
    address.innerHTML = `${contactInfo[0].street_addr} <br> ${contactInfo[0].city_addr} <br> ${contactInfo[0].country_addr} `;
}




/* ---EVENT LISTENERS--- */