document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project img');
    projects.forEach(img => {
        img.addEventListener('touchstart', function () {
            img.style.transform = 'scale(1.05)';
        });
        img.addEventListener('touchend', function () {
            img.style.transform = 'scale(1)';
        });
    });
});
