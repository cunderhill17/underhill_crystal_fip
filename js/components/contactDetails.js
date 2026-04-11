import { contactInfo } from '../api/contactInfoAPI.js';

/* ---VARIABLES--- */

export const sales = document.querySelector('#contact-sales-email');
const marketing = document.querySelector('#contact-marketing-email');
const address = document.querySelector('#contact-address');
const phoneNumber = document.querySelector('#contact-corporate-number');


/* ---FUNCTIONS--- */

//keeps the contact information up to date in the section next to the contact form on the contact.html page
//Information comes from the variable 'contactInfo' which was imported from the 'contactInfoAPI.js' page
export function setContactDetails() {
    sales.textContent = `${contactInfo[0].sales_email}`;
    marketing.textContent = `${contactInfo[0].marketing_email}`;
    phoneNumber.textContent = `${contactInfo[0].corporate_number}`;
    address.innerHTML = `${contactInfo[0].street_addr} <br> ${contactInfo[0].city_addr} <br> ${contactInfo[0].country_addr} `;
}




/* ---EVENT LISTENERS--- */