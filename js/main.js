/* ---Variables--- */

//Hamburger Menu Variables
const menuBtn = document.querySelector('header .menu img#hamburger-menu');
const mainNav = document.querySelector('header nav');

//Product Card Variables
const flavors = document.querySelectorAll('.beverageFlavor');
const productCard = document.querySelector('.product-card-con');

//using an object to hold product information so the information can be acccessed by name rather than index 
const productData = {
  bergamot: {
    flavor: 'Bergamot Liqueur',
    description: 'A luminous, citrus-kissed bergamot liqueur with fragrant floral notes and a refined balance of bright zest and delicate sweetness.rition will go here',
    ingredients: 'Water, Alcohol, Sugar, Bergamot Juice / Extract, Natural flavours, herbal extracts, Citric Acid, Anthocyanics (E16)',
    images: [
      'images/preview-bergamot-label-bottle',
      'images/preview-bergamot-back-label-bottle',
      'images/preview-bergamot-back-label-img',
      'images/preview-bergamot-label-closeup',
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
    ]
  },

  darkCherry: {
    flavor: 'Dark Cherry Liqueur',
    description: 'A deep garnet dark cherry liqueur layered with ripe, velvety fruit flavors and a subtle sweetness that lingers with a hint of warmth.',
    ingredients: 'Water, Alcohol, Sugar, Dark Cherry Juice / Extract, Natural flavours, herbal extracts, Citric Acid, Anthocyanics (E16)',
    images: [
      'images/preview-d-cherry-label-bottle',
      'images/preview-d-cherry-back-label-bottle',
      'images/preview-d-cherry-back-label-img',
      'images/preview-d-cherry-label-closeup',
    ],
    otherFlavors: [
      { 
        id: 'fruit-redCurrent',
        image:'images/fruit-red-currant.svg',
      },
      {
        id: 'fruit-bergamot',
        image:'images/fruit-bergamot.svg',
      },
      {
        id: 'fruit-bloodOrange',
        image:'images/fruit-orange-slice.svg',
      },
      {
        id: 'fruit-pomegranate',
        image:'images/fruit-pomegranate.svg',
      },
    ]
  }, 

  bloodOrange: {
    flavor: 'Blood Orange Liqueur',
    description: 'A radiant, sunset-hued blood orange liqueur alive with juicy citrus intensity, gently tempered by soft sweetness and a whisper of bittersweet zest.',
    ingredients: 'Water, Alcohol, Sugar, Blood Orange Juice / Extract, Natural flavours, herbal extracts, Citric Acid, Anthocyanics (E16)',
    images: [
      'images/preview-b-orange-label-bottle',
      'images/preview-b-orange-back-label-bottle',
      'images/preview-b-orange-back-label-img',
      'images/preview-b-orange-label-closeup',
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
        id: 'fruit-bergamot',
        image:'images/fruit-bergamot.svg',
      },
      {
        id: 'fruit-pomegranate',
        image:'images/fruit-pomegranate.svg',
      },
    ]
  }, 

  pomegranate: {
    flavor: 'Pomegranate Liqueur',
    description: 'A vibrant, jewel-toned pomegranate liqueur bursting with tangy-sweet arils and a crisp, refreshing finish.',
    ingredients: 'Water, Alcohol, Sugar, Pomegranate Juice / Extract, Natural flavours, herbal extracts, Citric Acid, Anthocyanics (E16)',
    images: [
      'images/preview-pomegranate-label-bottle',
      'images/preview-pomegranate-back-label-bottle',
      'images/preview-pomegranate-back-label-img',
      'images/preview-pomegranate-label-closeup',
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
        id: 'fruit-bergamot',
        image:'images/fruit-bergamot.svg',
      },
    ]
  }, 

  redCurrent: {
    flavor: 'Red Currant Liqueur',
    description: 'A bright, ruby-hued red currant aperitif with lively tart berry flavors balanced by gentle sweetness.',
    ingredients: 'Water, Alcohol, Sugar, Red Currant Juice / Extract, Natural flavours, herbal extracts, Citric Acid, Anthocyanics (E16)',
    images: [
      'images/preview-r-currant-label-bottle',
      'images/preview-r-currant-back-label-bottle',
      'images/preview-r-currant-back-label-img',
      'images/preview-r-currant-label-closeup',
    ],
    otherFlavors: [
      { 
        id: 'fruit-bergamot',
        image:'images/fruit-bergamot.svg',
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
    ]
  }
};

// Admin Vertical Nav variables
const openVerticalNav = document.querySelector('#openVerticalNav');
const closeVerticalNav = document.querySelector('#closeVerticalNav');
const verticalNav = document.querySelector('#vertical-nav');

// Variable for dropdowns on Vertical Nav menu Admin pages
const toggleBtns = document.querySelectorAll('.dropdown-toggle'); 

// Variables for switching tabs on the admin products page
const viewProduct = document.querySelector('#viewProducts');
const createProduct = document.querySelector('#createProduct');
const individualProduct = document.querySelector('#individualProduct');

const viewProductsTab = document.querySelector('#viewProductsTab');
const createProductTab = document.querySelector('#createProductTab');
const viewSingleProductBtns = document.querySelectorAll('.viewProduct'); //I feel like this is probably going to change

//Contact Map Variables 
let map;
const searchBtn = document.querySelector('#search-btn');
const distanceOutput = document.querySelector('#search-results')

// Fixed LCBO location -- want to update this so it contains multiple locations, and will show the user the closest location to them
const lcbo = {
  lat: 42.9851783,
  lon: -81.292785
};

let userMarker = null;
let userLine = null;

if (searchBtn) {
    // Initialize map
    map = L.map('contact-map').setView([42.9849, -81.2453], 12);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);


    // Add LCBO marker
    L.marker([lcbo.lat, lcbo.lon])
    .addTo(map)
    .bindPopup("LCBO - 681 Wonderland Rd N");
}








/* ---Functions--- */

//Hamburger Menu Functions
function toggleNav() {
    mainNav.classList.toggle('slide-toggle');
}

//Product Card Functions
function openProductCard() {
    productCard.style.top = `${window.scrollY + 35}px`; //helps to position card when it appears on screen
    productCard.classList.add('slide-toggle');
}

function closeProductCard() {
    productCard.classList.remove('slide-toggle');
}

//Contact Map Functions
// Haversine formula - still need to gain a better understanding of this formula
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const toRad = angle => angle * Math.PI / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
    Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

//Main map logic
async function handleAddressSearch() {

  const address = document.querySelector("#search-bar").value;
  if (!address) {
    alert("Please enter an address");
    return;
  }

  // Call Nominatim API
  const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
  const data = await response.json();

  if (data.length === 0) {
    alert("Address not found");
    return;
  }

  const userLat = parseFloat(data[0].lat);
  const userLon = parseFloat(data[0].lon);

  if (userMarker) {
    map.removeLayer(userMarker);
  }

  if (userLine) {
    map.removeLayer(userLine);
  }

  // Add user marker
  userMarker = L.marker([userLat, userLon])
    .addTo(map)
    .bindPopup("Your Address")
    .openPopup();

  // Draw line between user and LCBO
  userLine = L.polyline([
    [userLat, userLon],
    [lcbo.lat, lcbo.lon]
  ], { color: 'blue' }).addTo(map);

  // Fit map to show both points
  map.fitBounds(userLine.getBounds());

  // Calculate distance
  const distance = haversine(userLat, userLon, lcbo.lat, lcbo.lon);

  distanceOutput.textContent = `Distance to LCBO: ${distance.toFixed(2)} km`;

}

//Function to display product information
function displayCard() {
  let id;

  if (this.id.includes('fruit')) {
    id = this.id.replace('fruit-', '');
  } else {
    id = this.id;
  }

  let productCard = document.querySelector('.product-card-con');

  productCard.innerHTML = `

    <button class="card-btn brand-btn">X</button>
    <section class="card-top">
        <h3 class="hidden">Product Images and Purchase Information</h3>
        <div class="img-previews">
            <div>
                <img src="${productData[id].images[0]}-170.png">
            </div>
            <div>
                <img src="${productData[id].images[1]}-170.png">
            </div>
            <div>
                <img src="${productData[id].images[2]}-170.jpg">
            </div>
            <div>
                <img src="${productData[id].images[3]}-170.png">
            </div>
        </div>

        <div class="img-full">
            <img src="${productData[id].images[0]}-325.png">
        </div>

        <div class="product-info">
            <h4 class="heading-4 brand-red">${productData[id].flavor}</h4>
            <p class="paragraph">${productData[id].description}</p>
            <h4 class="heading-4 brand-red">Ingredients</h4>
            <p class="paragraph">${productData[id].ingredients}</p>
            <p class="paragraph">$50.99 CAD</p>
            <p class="paragraph">20% ABV</p>
            <p class="paragraph">750 ml</p>
            <h4 class="heading-4 brand-red">Quantity</h4>
            <div class="quantity-con">
              <button> - </button>
              <p class="beverage-quantity">1</p>
              <button> + </button>
            </div>
            <button class="paragraph brand-btn">Add To Cart</button>

            <section class="product-flavours">
                <h4 class="heading-4 brand-red">Other Flavors Available</h4>
                <div>
                    <img src="${productData[id].otherFlavors[0].image}" id="${productData[id].otherFlavors[0].id}">
                    <img src="${productData[id].otherFlavors[1].image}" id="${productData[id].otherFlavors[1].id}">
                    <img src="${productData[id].otherFlavors[2].image}" id="${productData[id].otherFlavors[2].id}">
                    <img src="${productData[id].otherFlavors[3].image}" id="${productData[id].otherFlavors[3].id}">
                </div>
            </section>
        </div>
    </section>

  `;

  //Adds a click event to the product card close button - need to move to proper sections
  const closeCard = document.querySelector('.card-btn');
  closeCard.addEventListener('click', closeProductCard);

  //Updates the product card contents based on the flavor selected - need to move to proper sections
  const flavorImages = document.querySelectorAll('.product-flavours img');
  flavorImages.forEach(flavor => flavor.addEventListener('click', displayCard));

  const imgPreviews = document.querySelectorAll('.img-previews img');
  imgPreviews.forEach(preview => preview.addEventListener('click', changePreview));

}

function changePreview(e) {
  const url = e.target.src;

  //Only selects the path of the URL string from 'images' onwards
  let imgPath = url.substring(url.indexOf("images/"));
  
  // separates the number & extension at the end of the path, replaces the number and then readds the extension back to make the correct image path
  imgPath = imgPath.replace(/(\d+)(\.\w+)$/, `325$2`);

  const lgImage = document.querySelector('.img-full');

  lgImage.innerHTML = `<img src="${imgPath}">`;
}

//Functions to open and close the vertical nav bar on admin pages
function openVerticalNavMenu() {
    verticalNav.classList.add('open');
}

function closeVerticalNavMenu() {
    verticalNav.classList.remove('open');
}

//Function to toggle the submenu open and close in the vertical nav menu on admin pages
function toggleSubMenu(e) {
    const button = e.currentTarget;
    const menu = button.nextElementSibling;

    menu.classList.toggle('open');
}

//Functions to switch between the different sections on the admin products page (create product/ view products/ view single product)
function displayCreateProduct() {

    if (!viewProduct.classList.contains('hidden')) {
        viewProduct.classList.add('hidden');
    }

    if (!individualProduct.classList.contains('hidden')) {
      individualProduct.classList.add('hidden');
    }

    if (createProduct.classList.contains('hidden')) {
        createProduct.classList.remove('hidden');
    }

}

function displayViewProducts() {
    if (viewProduct.classList.contains('hidden')) {
        viewProduct.classList.remove('hidden');
    }

    if (!createProduct.classList.contains('hidden')) {
        createProduct.classList.add('hidden');
    }

    if (!individualProduct.classList.contains('hidden')) {
      individualProduct.classList.add('hidden');
    }
}

function displayViewSingleProduct() {
    if (!createProduct.classList.contains('hidden')) {
        createProduct.classList.add('hidden');
    }

    if (!viewProduct.classList.contains('hidden')) {
        viewProduct.classList.add('hidden');
    }

    if (individualProduct.classList.contains('hidden')) {
      individualProduct.classList.remove('hidden');
    }
}







/* ---Event Handlers--- */

//Hamburger Menu Event Handler
if (menuBtn) {
  menuBtn.addEventListener('click', toggleNav);
}

//Product Card Event Handler

if (flavors) {
    flavors.forEach(flavor => flavor.addEventListener('click', openProductCard));
    flavors.forEach(flavor => flavor.addEventListener('click', displayCard));
}

//Contact Map Event Handler
if (searchBtn) {
   searchBtn.addEventListener('click', handleAddressSearch); 
}

//Admin Vertical Nav Bar Event handler
if (openVerticalNav) {
  openVerticalNav.addEventListener('click', openVerticalNavMenu);
  closeVerticalNav.addEventListener('click', closeVerticalNavMenu);
}

// Admin event handler to add a click event to the button to toggle the sub menu
if (toggleBtns) {
  toggleBtns.forEach(toggleBtn => toggleBtn.addEventListener('click', toggleSubMenu));
}

// Admin event handler to switch tabs on the admin products page
if (viewProductsTab) {
    viewProductsTab.addEventListener('click', displayViewProducts);
    createProductTab.addEventListener('click', displayCreateProduct);
    viewSingleProductBtns.forEach(viewBtn => viewBtn.addEventListener('click', displayViewSingleProduct));
}


