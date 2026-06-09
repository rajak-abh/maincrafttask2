# MainCrafts Website

MainCrafts is a responsive multi-page business website built with HTML, CSS, and JavaScript. It includes a modern homepage, an about page, and a contact page with basic form validation.

## Pages

- `index.html` - Homepage with hero section, service highlights, and call-to-action.
- `about.html` - Company overview, mission, and feature cards.
- `contact.html` - Contact page with a validated message form.

## Features

- Responsive layout for desktop, tablet, and mobile screens.
- Shared navigation bar and footer across all pages.
- Mobile navigation toggle using JavaScript.
- Contact form validation for name, email, and message fields.
- Modern visual styling with gradients, cards, spacing, and hover states.
- Clean project structure using separate HTML, CSS, and JavaScript files.

## Project Structure

```text
.
|-- index.html
|-- about.html
|-- contact.html
|-- styles.css
|-- script.js
`-- README.md
```

## Technologies Used

- HTML5
- CSS3
- JavaScript

## How to Run

This is a static website, so no installation or build step is required.

1. Open the project folder.
2. Double-click `index.html` to open it in a browser.
3. Use the navigation links to visit the About and Contact pages.

You can also run it with a local development server if you prefer:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Contact Form Behavior

The contact form is handled in `script.js`. When the form is submitted:

- Empty fields show an alert message.
- Invalid email input shows an alert message.
- Valid form submission shows a success message and resets the form.

This form does not send data to a backend server yet. To make it fully functional, connect it to an email service, API, or backend application.

## Customization

- Update website text directly in the HTML files.
- Change colors, spacing, layout, and responsive styles in `styles.css`.
- Modify navigation behavior or form validation in `script.js`.

## Author

MainCrafts Technology
