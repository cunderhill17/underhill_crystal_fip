# Quattro Rebrand: Final Integrated Project

This repo is for Semester 2's Final Integrated Project in Fanshawe's Interactive Media Design (IDP3) Program

This project involves taking a defunct beverage brand from a list provided by the course instructors and rebranding the product with our own logo, colours, typography, etc. 

The project includes creating a 3D model of the product as well as building a responsive website consisting of 3 or more pages across mobile (412px), tablet (768px), and desktop (1200px). All pages are designed and wireframed in Figma, then developed using CSS Grid layouts with validated HTML.

The design of the web pages follows a completed design system, focusing on consistency, alignment, contrast, typography, colour, UX/UI, and visual balance. Each page demonstrates principles of responsive design and accessibility while maintaining a cohesive brand experience.

## Features & Requirements:

- ✅ Responsive layouts for mobile, tablet, and desktop
- ✅ A stylized contact form
- ✅ Product Cards using a JavaScript Object
- ✅ Show/hide functionality (hamburger menu, product cards)
- ✅ Proper Git workflow (branches, pull requests, merges)
- ✅ Includes wireframes and supporting assets

---

## Installation: 

1. Download or clone the project from GitHub to your local machine.
2. Open the project folder in your code editor (recommended: VS Code).
3. Ensure you have a local server environment installed: XAMPP, WAMP, or MAMP.
4. Move the project folder into your server’s root directory:
    - XAMPP: C:\xampp\htdocs\
    - WAMP: C:\wamp64\www\
    - MAMP (Mac): /Applications/MAMP/htdocs/
5. Start your server and make sure Apache and MySQL are running.
6. Configure the database connection file if needed:
    - Open /includes/db.php and /setup/setup.php
    - Update credentials as required:
        - Host: `localhost`
        - Database: `quattro_db`
        - Username: `root`
        - Password: (empty for XAMPP/WAMP, root for MAMP)
7. Set up the database using the provided PHP scripts:
    - Run the setup script in your browser:
        - `http://localhost/your-project-folder/path-to/setup.php`
        - This will create the database and required tables (contact_info, product_info, product_images)
    - Insert initial data by navigating to:
        - `http://localhost/your-project-folder/path-to/initialData.php`
        - This will populate default product entries, product images, and company contact info
        - ⚠️ Important: Run this step only once to avoid duplicate data
8. If your project uses Sass (SCSS) for styling, compile it into CSS:
    - Compile manually:
        - sass style.scss style.css
    - Or run a watcher to automatically compile on changes:
        - sass --watch css:css
9. Once your server is running, open the project in your browser:
    - `http://localhost/your-project-folder-path/index.html`

---

## Usage

1. Start your local server (see installation section).
2. Open the project in your browser using the local URL (e.g., `http://localhost/your-project-folder-path/index.html`).
3. Navigate through the project to explore pages, layouts, and design.
4. Test interactive features:
    - Map functionality (loads correctly and displays markers/locations)
    - Navigation links
    - Any interactive UI components (buttons, forms – note: forms may not be functional)
    - Responsive behavior (resize the browser window or use DevTools device mode)
5. Edit HTML, SCSS, or JavaScript files as needed:
    - If you modify SCSS files, recompile them into CSS:
        - `sass --watch css:css`
    - Confirm that updated styles appear in the browser
6. Follow standard Git workflow practices when making changes:
    - Create a new branch
    - Make your changes
    - Commit with clear messages
    - Push your branch
    - Open a pull request and merge into main

---

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am "Add some feature"`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request 

---

## Credits

- Crystal Underhill 

---

## License 

This project is licensed under the MIT License. See the LICENSE file for details. 