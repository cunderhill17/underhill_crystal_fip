/* ================================================================================
The below JS is used to open the navigation menu when clicking the hamburger icon
================================================================================ */
document.querySelector("#menu-icon").addEventListener('click', myFunction);

function myFunction() {
  let menuLinks = document.querySelector("#menu-links");
  if (menuLinks.style.display === "block") {
    menuLinks.style.display = "none";
  } else {
    menuLinks.style.display = "block";
  }
}

/* ================================================================================
Function for the button-tabs to navigate to each major section within individual pages
================================================================================ */

const tabButtons = document.querySelectorAll('.button-tabs');

tabButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const target = button.getAttribute('data-target');
    if (target) {
      location.href = target;
    }
  });
});

/* ===============================================
Array of background image paths for homepage cards
================================================ */

const homepageImages = [
  {
    medium: 'images/hp_tab_card01.jpg',
    large: 'images/hp_desk_card01.jpg',
  },
  {
    medium: 'images/hp_tab_card02.jpg',
    large: 'images/hp_desk_card02.jpg',
  },
  {
    medium: 'images/hp_tab_card03.jpg',
    large: 'images/hp_desk_card03.jpg',
  },
  {
    medium: 'images/hp_tab_card04.jpg',
    large: 'images/hp_desk_card04.jpg',
  },
  {
    medium: 'images/hp_tab_card05.jpg',
    large: 'images/hp_desk_card05.jpg',
  },
  {
    medium: 'images/hp_tab_card06.jpg',
    large: 'images/hp_desk_card06.jpg',
  },
];


/* ===============================================
Array of background image paths for activities cards
================================================ */

const activitiesImages = [
  {
    medium: 'images/act_tab_card01.jpg',
    large: 'images/act_desk_card01.jpg',
  },
  {
    medium: 'images/act_tab_card02.jpg',
    large: 'images/act_desk_card02.jpg',
  },
  {
    medium: 'images/act_tab_card03.jpg',
    large: 'images/act_desk_card03.jpg',
  },
];

/* ===============================================
Array of background image paths for rooms cards
================================================ */

const roomsImages = [
  {
    medium: 'images/rm_tab_card01.jpg',
    large: 'images/rm_desk_card01.jpg',
  },
  {
    medium: 'images/rm_tab_card02.jpg',
    large: 'images/rm_desk_card02.jpg',
  },
  {
    medium: 'images/rm_tab_card03.jpg',
    large: 'images/rm_desk_card03.jpg',
  },
];

/* ===============================================
Array of background image paths for packages cards
================================================ */

const packagesImages = [
  {
    medium: 'images/pack_tab_card01.jpg',
    large: 'images/pack_desk_card01.jpg',
  },
  {
    medium: 'images/pack_tab_card02.jpg',
    large: 'images/pack_desk_card02.jpg',
  },
  {
    medium: 'images/pack_tab_card03.jpg',
    large: 'images/pack_desk_card03.jpg',
  },
];

/* ===============================================
Array of background image paths for dining cards
================================================ */

const diningImages = [
  {
    medium: 'images/din_tab_card01.jpg',
    large: 'images/din_desk_card01.jpg',
  },
  {
    medium: 'images/din_tab_card02.jpg',
    large: 'images/din_desk_card02.jpg',
  },
  {
    medium: 'images/din_tab_card03.jpg',
    large: 'images/din_desk_card03.jpg',
  },
];

/* ==============================================
GLOBAL CARDS FUNCTION
=============================================== */

  const imageSets = {
    dining: diningImages,
    activities: activitiesImages,
    packages: packagesImages,
    homepage: homepageImages,
    rooms: roomsImages
  };

  const sections = ['dining', 'activities', 'packages', 'homepage', 'rooms'];

  sections.forEach(section => {

    const cards = document.querySelectorAll(`.card-${section}`);
    if (!cards) return;

    cards.forEach((card, index) => {
      const images = imageSets[section];
      if (!images || !images[index]) return;

      const { medium, large } = images[index];
      
      function setResponsiveBackground() {
        let selectedImage;

        if (window.matchMedia('(max-width: 1199px)').matches) {
          selectedImage = medium;
        } else {
          selectedImage = large;
        }

        card.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${selectedImage}')`;
        card.dataset.currentImage = selectedImage;
      }

      // Initial set
      setResponsiveBackground();

      // Update on window resize
      window.addEventListener('resize', setResponsiveBackground);

      card.dataset.flipped = 'false'; // initial state

      // Hover behavior
      card.addEventListener('mouseenter', () => {
        if (card.dataset.flipped === 'false') {
          card.style.backgroundImage = `url('${card.dataset.currentImage}')`;
        }
      });

      card.addEventListener('mouseleave', () => {
        if (card.dataset.flipped === 'false') {
          card.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${card.dataset.currentImage}')`;
        }
      });

      // Click behavior — toggle flip state
      card.addEventListener('click', () => {
        const isFlipped = card.dataset.flipped === 'true';
        const unflippedContent = card.querySelector('.unflipped');

        const hFlippedItems = card.querySelectorAll('.h-flipped');
        const pFlippedItems = card.querySelectorAll('.p-flipped');
        const aFlippedItems = card.querySelectorAll('.a-flipped');

        if (!isFlipped) {
          // Flip: show solid background, hide content, change layout
          card.style.backgroundImage = 'none';
          card.style.backgroundColor = '#505050';
          card.style.display = 'block';
          card.dataset.flipped = 'true';

          if (unflippedContent) {
            unflippedContent.style.display = 'none';
            hFlippedItems.forEach(item => item.style.display = 'block');
            pFlippedItems.forEach(item => item.style.display = 'block');
            aFlippedItems.forEach(item => item.style.display = 'block');
          }

        } else {
          // Unflip: restore image, show content, reset layout
          card.style.backgroundColor = 'transparent';
          card.style.backgroundImage = `url('${card.dataset.currentImage}')`;
          card.style.display = 'flex';
          card.dataset.flipped = 'false';

          if (unflippedContent) {
            unflippedContent.style.display = '';
            hFlippedItems.forEach(item => item.style.display = 'none');
            pFlippedItems.forEach(item => item.style.display = 'none');
            aFlippedItems.forEach(item => item.style.display = 'none');
          }
        }
      });
    }); // closes cards.forEach

  }); // closes sections.forEach




/* ==========================================
CONTENT FOR HOMEPAGE MOBILE PAGINATION
========================================== */

const homepageContentData = [
  {
    image: 'images/hp_pag01.jpg',
    title: 'Wine glasses clinking over a dinner table at a restaurant',
    heading: 'Wine Selection',
    text: 'This is where a brief intro to the resorts wine selection would go.',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  }, 
  {
    image: 'images/hp_pag02.jpg',
    title: 'A moist chocolate brownie topped with chocolate sauce and fresh mint',
    heading: 'Dining',
    text: 'This will give a brief overview of the dining experience that can be expected at Couples Resort.',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  },
  {
    image: 'images/hp_pag03.jpg',
    title: 'Man and Woman getting a relaxing massage',
    heading: 'Haliburton Spa at Couples Resort',
    text: 'Escape and rejuvenate yourself and your loved one with a spa vacation. Restore your balance and find energy with one of our Spa Packages for two. <br><br> Visit the packages page for details on Spa Specials.  Begin your journey to soothe by taking a spa vacation today. <br><br> Get the ultimate special treatment you deserve and have been waiting for in our eco friendly organic luxury Algonquin Spa or with private in-suite spa treatments.',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  },
  {
    image: 'images/hp_pag04.jpg',
    title: 'Close up of logs piled together and on fire',
    heading: 'Amenities',
    text: 'This will give a brief overview of the kind of amentities that can be expected while at Couples Resort',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  },
  {
    image: 'images/hp_pag05.jpg',
    title: 'Man and woman holding hands while horseback riding',
    heading: 'Activities',
    text: 'This is where the text will go that explains more about the activities that can be done, albeit briefly.',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  },
  {
    image: 'images/hp_pag06.jpg',
    title: 'A quiet lake surrounded by the autumn trees of Algonquin Park',
    heading: 'Packages',
    text: 'This will provide a brief overview of what kind of packages Couples Resort offers before leading to the Packages page.',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  }
];


/* =================================================
CONTENT FOR ACTIVITIES & SPA MOBILE PAGINATION
================================================== */

const activitiesContentData = [
  {
    image: 'images/act_mob_card01.jpg',
    title: 'The sun rising on a beautiful day in Algonquin park',
    heading: 'Seasons At a Glance',
    text: 'Click below to learn more about Couple’s Resort and what makes each of the seasons a wonderful time to visit.',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  },
  {
    image: 'images/act_mob_card02.jpg',
    title: 'Man and Woman receiving a couples massage',
    heading: 'Policies',
    text: 'Click below to view spa policies and procedures.',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  },
  {
    image: 'images/act_mob_card03.jpg',
    title: 'Woman in a yellow kayak about to put the oar in the water',
    heading: 'Image Gallery',
    text: 'Click below to view images from our spa and the various activities available to guests at Couples Resort.',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  }
];

/* =================================================
CONTENT FOR ROOMS MOBILE PAGINATION
================================================== */

const roomsContentData = [
  {
    image: 'images/rm_mob_card01.jpg',
    title: 'Fresh towels, soap, and shampoos',
    heading: 'Room Amenities',
    text: 'Please click below to see a list of amenities that all rooms are provided with.',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  },
  {
    image: 'images/rm_mob_card02.jpg',
    title: 'The inside of an empty sauna',
    heading: 'Room Service',
    text: 'Room Service is delivered between 6:00 pm and 7:00 pm — no specific time slots available. Place order between 11 am - 5 pm at the bar or call 866-202-1179 ext 108',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  },
  {
    image: 'images/rm_mob_card02.jpg',
    title: 'Hillside Cabin at Sunset ',
    heading: 'Coming Soon',
    text: 'This new duplex building offers two accommodations nestled on a hill near the resort’s main entrance. Each features a private deck with an outdoor hot tub, a wood-burning fireplace, 70" TV, and Wi-Fi. Please note: no lake view.',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  }
];

/* =================================================
CONTENT FOR PACKAGES MOBILE PAGINATION
================================================== */

const packagesContentData = [
  {
    image: 'images/pack_mob_card01.jpg',
    title: 'A white gift box topped with a white ribbon',
    heading: 'Wedding Packages',
    text: 'Say “I do” in paradise. Our wedding and honeymoon packages make your special dates—you effortless and unforgettable.',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  },
  {
    image: 'images/pack_mob_card02.jpg',
    title: 'Purple and light brown building blocks with symbols representing loyalty reward programs',
    heading: 'Loyalty Rewards',
    text: 'Every visit deserves to be celebrated. Instantly enroll in our Loyalty Rewards starting from your second stay to enjoy exclusive perks.',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  },
  {
    image: 'images/pack_mob_card03.jpg',
    title: 'a black grand piano inside a european style restaurant',
    heading: 'Entertainment Packages',
    text: 'Are you a musician or entertainer? Share your talent at the resort and enjoy exclusive accommodation discounts with our special Entertainment Packages.',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  }
];

/* =================================================
CONTENT FOR DINING MOBILE PAGINATION
================================================== */

const diningContentData = [
  {
    image: 'images/din_mob_card01.jpg',
    title: 'Birds eye view of various bowls holding different types of grain',
    heading: 'Dietary Requirements',
    text: 'Vegan and Vegetarian dishes are available. We offer a large array of choices from Heart Smart, Gluten Free, and Celiac Disease on your request.<br><br>Vegans & Vegetarians ask to talk to the Chef when you check into the resort for Delicious Options',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  },
  {
    image: 'images/din_mob_card02.jpg',
    title: 'Two covered silver platters on a serving tray in a resort bedroom',
    heading: 'Room Service and Reservations',
    text: 'Reservations can be made at the bar or call 866-202-1179 ext 108.<br><br>Room Service is delivered between 6:00 pm and 7:00 pm — no specific time slots available. Place order between 11 am - 5 pm at the bar or call 866-202-1179 ext 108',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  },
  {
    image: 'images/din_mob_card03.jpg',
    title: 'Stemmed wine glasses lined up in a row holding white and red wine',
    heading: 'Wine Selection',
    text: 'Wine Spectators Award of Excellence Since 2010.<br><br>Couples Resort presents a wide-ranging selection of exceptional regional and international wines to enhance your experience at our resort.',
    linkText: 'CLICK TO LEARN MORE',
    linkUrl: '#'
  }
];

/* ==========================
GLOBAL PAGINATION FUNCTION
========================== */

const pageSections = ['dining', 'activities', 'packages', 'homepage', 'rooms']

const pageSets = {
    dining: diningContentData,
    activities: activitiesContentData,
    packages: packagesContentData,
    homepage: homepageContentData,
    rooms: roomsContentData,
};

pageSections.forEach(section => {

    const contentElement = document.querySelector(`#pagination-${section}-content`);
    const paginationElement = document.querySelector(`#pagination-${section}`);

    if (!contentElement || !paginationElement) return;

    const data = pageSets[section];

    function loadPage(pageNumber) {
      const item = data[pageNumber - 1];

      contentElement.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.heading}</h3>
        <p>${item.text}</p>
        <a href="${item.linkUrl}">${item.linkText}</a>
      `;

    };

    function createPagination() {

      for (let i=1; i<= data.length; i++) {
        const a = document.createElement('a');
        const li = document.createElement('li');
        a.textContent = i;
        a.href = "#";
        a.id = `page-btn-${i}`;
        a.className = `page-btn`;
        a.addEventListener('click', (event)=> {
          event.preventDefault();
          loadPage(i);
        });
          
        li.appendChild(a);
        paginationElement.appendChild(li);
      }
    };

    createPagination();
    loadPage(1);

});


/* =======================================
FUNCTIONALITY FOR ROOMS PAGE TESTIMONIALS
======================================== */

const testimonials = [
  {
    text: '“More in love then ever. Exactly what we needed”',
    author: '-- Blogger Tiffany'
  },
  {
    text: '“Our first nights dinner was amazing - actually they all were! We had Derek as a waiter each night and he was fabulous.”',
    author: '-- Chantal Schweitzer'
  },
  {
    text: '“We enjoyed beautiful views of the lake and pool each day and couldn’t get over how quite and peaceful the grounds are”',
    author: '-- Kiki Khosla'
  },

];

if(document.querySelector('#individualTestimonial')) {

  document.querySelector('#next').addEventListener('click', () => plusSlides(1));
  document.querySelector('#prev').addEventListener('click', () => plusSlides(-1));

  let testimonialIndex = 1;
  loadTestimonial(testimonialIndex);

  function plusSlides(n) {
    loadTestimonial(testimonialIndex += n);
  }

  function loadTestimonial(n) {
    if (n >= testimonials.length) testimonialIndex = 0;
    if (n < 0) testimonialIndex = testimonials.length - 1;

    const data = testimonials[testimonialIndex];

    document.querySelector('#individualTestimonial').innerHTML = `
      <p class="paragraph-normal individual-testimonial">${data.text}<br>${data.author}</p>
    `;
  };

}

/* ========================================================================================
Functionality for ::after pseudo selector - adds a checkmark to input boxes once filled out
======================================================================================== */

if (document.querySelector('.input-wrapper')) {
  document.querySelectorAll('.input-wrapper input, .input-wrapper textarea').forEach((field) => {
    field.addEventListener('input', function () {
      if (this.value.trim() !== '') {
        this.parentElement.classList.add('filled');
      } else {
        this.parentElement.classList.remove('filled');
      }
    });
  });
}


/*=======================================================================
FUNCTIONALITY FOR ANIMATION EFFECT ON BUTTON CLICK. 
TRIGGERS AN EFFECT IF THE CREDIT CARD INPUTS HAVE BEEN LEFT BLANK
======================================================================= */

if (document.querySelector('#reservation-button')) {
  const button = document.querySelector('#reservation-button');
  const creditInputs = document.querySelectorAll('.credit-card input');

  button.addEventListener('click', () => {
    creditInputs.forEach(input => {
      if (input.value.trim() === '') {
        input.classList.add('blink');
        // Remove the class after animation ends to allow re-blinking
        input.addEventListener('animationend', () => input.classList.remove('blink'), {once: true});
      }
    });
  });
}

