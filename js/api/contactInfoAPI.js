/* ---VARIABLES--- */
let contactInfo = {};




/* ---FUNCTIONS--- */

export async function getContactInfo() {
    const response = await fetch('php/actions/viewContactInfo.php');
    const contactDetails = await response.json();

    contactDetails.forEach(detail => {

        const contactKey = detail.id;
        
        contactInfo[contactKey] = {
            id: detail.id,
            sales_email: detail.sales_email,
            marketing_email: detail.marketing_email,
            corporate_number: detail.corporate_number,
            street_addr: detail.street_addr,
            city_addr: detail.city_addr,
            country_addr: detail.country_addr
        };

    })

    // console.log(contactInfo);
}




/* ---EVENT LISTENERS--- */