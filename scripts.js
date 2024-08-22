
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Thank you for your interest!');
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#555';
    } else {
        header.style.backgroundColor = '#333';
    }
});
