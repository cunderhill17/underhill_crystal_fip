# Quattro Rebrand: Final Integrated Project

This repo is for Semester 2's Final Integrated Project in Fanshawe's Interactive Media Design (IDP3) Program

This project involves taking a defunct beverage brand from a list provided by the course instructors and rebranding the product with our own logo, colours, typography, etc. 

The project includes creating a 3D model of the product as well as building a responsive website consisting of 3 or more pages across mobile (412px), tablet (768px), and desktop (1200px). All pages are designed and wireframed in Figma, then developed using CSS Grid layouts with validated HTML.

The design of the web pages follows a completed design system, focusing on consistency, alignment, contrast, typography, colour, UX/UI, and visual balance. Each page demonstrates principles of responsive design and accessibility while maintaining a cohesive brand experience.

## Features & Requirements:

✅ Responsive layouts for mobile, tablet, and desktop
✅ A stylized contact form
✅ Product Cards using JavaScript arrays
✅ Show/hide functionality (hamburger menu, product cards)
✅ Proper Git workflow (branches, pull requests, merges)
✅ Includes wireframes and supporting assets

---

## Installation: 

1. Download or clone the project from GitHub to your local machine.
2. Open the project folder in your code editor (recommended: VS Code).
3. This project uses Sass (SCSS) for styling. You must have Sass installed in order to compile the styles.

    - Install Sass globally using:
        - npm install -g sass
    - Alternatively, if you are using VS Code, you can install the Live Sass Compiler extension to compile SCSS files directly within the editor.

4. Before running the project, compile the SCSS files into CSS.

    - To automatically watch for changes, run:
        - sass --watch css:css
    - This will compile all SCSS files into the CSS folder whenever changes are made.

5. ⚠️ Important: The map API used in this project will NOT function correctly if you open the HTML files directly in your browser (e.g., using file://). You must run the project on a local server.

    - Option A (Recommended – VS Code Users): Install the Live Server extension in VS Code and click “Go Live”.
    - Option B (Alternative): Use any local development server (such as npx serve, XAMPP, WAMP, etc.).

6. Once the server is running, open the provided local URL (e.g., http://127.0.0.1:5500) in your browser.
7. Ensure the CSS files are being generated and confirm that the map loads properly in the browser.

---

## Usage

1. Start the local server (see installation section)
2. Once the server is running, open the provided local URL (e.g., http://127.0.0.1:5500) in your browser.
3. Navigate Through the Project
4. Explore the different pages and layouts to review the design and functionality.
5. Test Interactive Features
    - Map functionality (loads correctly and displays markers/locations)
    - Navigation links
    - Any interactive UI components (buttons, forms (not currently functional), etc.)
    - Responsive behavior (resize the browser window or use DevTools device mode)
6. Edit the HTML, SCSS, or JavaScript files as needed.
    - If you modify SCSS files, you must recompile them into CSS:
        - sass --watch css:css
    - Confirm that updated styles are reflected in the browser.
7. Follow standard Git workflow practices:
    - Create a new branch
    - Make your changes
    - Commit with clear messages
    - Push your branch
    - Open a pull request and merge into main

---

## Contributing

1. Fork it!
2. Create your feature branch:git checkout -b my-new-feature
3. Commit your changes: git commit -am "Add some feature"
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request 

---

## Credits

- Crystal Underhill 

---

## Licence 

This project is licensed under the MIT License. See the LICENSE file for details. 