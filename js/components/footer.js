import { contactInfo } from '../api/contactInfoAPI.js';

/* ---VARIABLES--- */
export const address = document.querySelector('#com-address');
const phoneNumber = document.querySelector('#com-number');




/* ---FUNCTIONS--- */

export function setFooterContact() {
    address.innerHTML = `${contactInfo[0].street_addr} <br> ${contactInfo[0].city_addr} <br> ${contactInfo[0].country_addr} `;

    phoneNumber.textContent= `${contactInfo[0].corporate_number}`;
}




/* ---EVENT LISTENERS--- */