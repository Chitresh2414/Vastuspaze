const groups = document.querySelectorAll("#testimonial-groups .group");
let current = 0;

function showGroup(index) {
  groups.forEach((g, i) => {
    const leftCard = g.children[0];
    const rightCard = g.children[1];
    if (i === index) {
      leftCard.classList.add("active");
      rightCard.classList.add("active");
    } else {
      leftCard.classList.remove("active");
      rightCard.classList.remove("active");
    }
  });
}

showGroup(current);

setInterval(() => {
  current = (current + 1) % groups.length;
  showGroup(current);
}, 6000); // 6 seconds per slide

//write review in dialog box
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const reviewDialog = document.getElementById('reviewDialog');
const reviewForm = document.getElementById('reviewForm');

openBtn.addEventListener('click', () => {
  reviewDialog.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  reviewDialog.classList.add('hidden');
});

// Close dialog when clicking outside form
reviewDialog.addEventListener('click', (e) => {
  if(e.target === reviewDialog) reviewDialog.classList.add('hidden');
});

// Submit form without redirect, reset fields, and close dialog
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default form submission redirect
  reviewForm.submit(); // submit to hidden iframe
  reviewForm.reset();  // clear form fields
  reviewDialog.classList.add('hidden'); // close dialog
});