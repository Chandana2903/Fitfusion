// Smooth scroll for navbar links
// navbar.js

document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
      <div class="navbar">
        <a href="index.html">Home</a>
        <a href="calorie-counter.html">Calorie Counter</a>
        <a href="about.html">About</a>
      </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
  });
  
document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight active nav item on scroll
const sections = document.querySelectorAll('section, .wo, .cc, .wp, .pro, .instructors, .ch');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Animate elements when entering viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.wo div, .items, .wc, .instructor-card, .pit div, .chcon').forEach(el => {
    observer.observe(el);
});

// Typewriter animation reset on visibility
const typewriter = document.querySelector('.typewriter-animation');
window.addEventListener('focus', () => {
    if (typewriter) {
        typewriter.classList.remove('typewriter-animation');
        void typewriter.offsetWidth; // trigger reflow
        typewriter.classList.add('typewriter-animation');
    }
});

// Button scroll to bottom (for “Dive In”, “Check Now”, “Plan Now”, “Contact Us”)
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    });
});
