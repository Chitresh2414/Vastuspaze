const toggleBtn = document.querySelector('.navbar-toggle i');
const mobileMenu = document.querySelector('.navbar-phone');

toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
    toggleBtn.classList.toggle('ri-menu-3-line');
    toggleBtn.classList.toggle('ri-close-line');
});

 const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 2000, // 2 seconds
      disableOnInteraction: false, // keeps autoplay after swipe
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    effect: "slide", // You can change to "fade" for smooth effect
    speed: 800
  });
