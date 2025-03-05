

// Animasi Scroll
const sections = document.querySelectorAll('.section');

const options = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".fade-in");
    images.forEach(img => {
        img.classList.add("visible");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".fade-in");
    const texts = document.querySelectorAll(".slide-in");

    images.forEach(img => {
        img.classList.add("visible");
    });

    texts.forEach(text => {
        text.classList.add("visible");
    });
});

