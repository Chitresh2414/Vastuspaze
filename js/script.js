const toggleBtn = document.querySelector('.navbar-toggle i');
const mobileMenu = document.querySelector('.navbar-phone');

toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');

    // Change icon when menu is open/closed
    if (mobileMenu.classList.contains('show')) {
        toggleBtn.classList.remove('ri-menu-3-line');
        toggleBtn.classList.add('ri-close-line');
    } else {
        toggleBtn.classList.remove('ri-close-line');
        toggleBtn.classList.add('ri-menu-3-line');
    }
});
