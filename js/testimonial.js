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