window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const effectElements = document.querySelectorAll('.scroll-effect .content-box');

    effectElements.forEach(el => {
        const speed = el.classList.contains('slow') ? 10 : el.classList.contains('medium') ? 20 : 30;
        el.style.transform = `translateY(${scrollPosition / speed}px)`;
    });
});
