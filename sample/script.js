// ── Mobile Menu Toggle ──
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Email Form Validation ──
const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const msg = document.getElementById('form-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!email) {
    showMsg('Please enter your email address.', 'error');
  } else if (!valid) {
    showMsg('That doesn\'t look like a valid email.', 'error');
  } else {
    showMsg('You\'re in! We\'ll be in touch soon.', 'success');
    emailInput.value = '';
  }
});

function showMsg(text, type) {
  msg.textContent = text;
  msg.className = 'form-msg ' + type;
}

// ── Sticky Header Shadow ──
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10
    ? '0 2px 12px rgba(30,42,58,.08)'
    : 'none';
});
