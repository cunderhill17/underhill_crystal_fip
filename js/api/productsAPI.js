/* ---VARIABLES--- */

export let productInfo = {};





/* ---FUNCTIONS--- */

//Function to get data returned from php script -- PRODUCTS
export async function getProducts() {
    const response = await fetch('php/actions/viewProducts.php');
    const products = await response.json();

    products.forEach(product => {
        const productKey = product.id;

        productInfo[productKey] = {
            id: product.product_id,
            flavor: product.product_name,
            description: product.product_description,
            ingredients: product.product_ingredients,
            price: product.product_price,
            salePrice: product.product_sale_price,
            stock: product.product_stock,
            images: [
                { 
                  alt: product.product_image_alt,
                  image: `php/uploads/${product.product_image}`,
                },
                {
                  alt: product.product_pre_1_alt,
                  image:`php/uploads/${product.product_pre_1}`,
                },
                {
                  alt: product.product_pre_2_alt,
                  image:`php/uploads/${product.product_pre_2}`,
                },
                {
                  alt: product.product_pre_3_alt,
                  image:`php/uploads/${product.product_pre_3}`,
                },
                {
                  alt: product.product_pre_4_alt,
                  image:`php/uploads/${product.product_pre_4}`,
                },
              ],
            otherFlavors: [
              { 
                id: 'fruit-redCurrent',
                image:'images/fruit-red-currant.svg',
              },
              {
                id: 'fruit-darkCherry',
                image:'images/fruit-cherries.svg',
              },
              {
                id: 'fruit-bloodOrange',
                image:'images/fruit-orange-slice.svg',
              },
              {
                id: 'fruit-pomegranate',
                image:'images/fruit-pomegranate.svg',
              },
              {
                id: 'fruit-bergamot',
                image:'images/fruit-bergamot.svg',
              },
            ]
        };
    });

}





/* ---EVENT LISTENERS--- */