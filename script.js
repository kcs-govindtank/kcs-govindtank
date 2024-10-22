
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Switch to Light Theme';
        } else {
            themeToggle.textContent = 'Switch to Dark Theme';
        }
    });
    
});
function scrollProjects(direction) {
    const container = document.getElementById('projectContainer');
    const scrollAmount = 300; // Adjust the scroll amount based on your preference

    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}
