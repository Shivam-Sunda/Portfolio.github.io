document.getElementById('contact-button').addEventListener('click', function() {
    var contactForm = document.getElementById('contact-form');
    if (contactForm.style.display === 'none') {
        contactForm.style.display = 'block';
    } else {
        contactForm.style.display = 'none';
    }
});

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));