// Select all FAQ questions
const faqItems = document.querySelectorAll('.faq .question');

faqItems.forEach(item => {
    const icon = document.createElement('span');
    icon.textContent = '+';
    icon.style.float = 'right';
    item.appendChild(icon);

    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;

        // Toggle current answer
        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
            icon.textContent = '+';
        } else {
            // Close all other answers
            faqItems.forEach(other => {
                if(other !== item){
                    other.nextElementSibling.style.maxHeight = null;
                    other.querySelector('span').textContent = '+';
                }
            });

            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = '−';
        }
    });
});

// Form submit alert
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Page reload rokne ke liye

    // Form data agar chahiye to yaha access kar sakte ho
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Alert message
    alert(`Thank you, ${name}! Your message has been sent successfully.`);

    // Form reset
    contactForm.reset();
});
