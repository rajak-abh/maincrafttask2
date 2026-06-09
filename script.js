const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const messageField = document.querySelector('#message');

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in your Name, Email, and Message before sending.');
      return;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Thank you! Your message has been submitted.');
    contactForm.reset();
  });
}
