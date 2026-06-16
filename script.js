const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.textContent = "Added ✓";
    button.style.background = "#ffffff";

    setTimeout(() => {
      button.textContent = "Add to Cart";
      button.style.background = "#d4af37";
    }, 1500);
  });
});

const newsletterForm = document.getElementById("newsletterForm");
const message = document.getElementById("message");

newsletterForm.addEventListener("submit", function(e) {
  e.preventDefault();
  message.textContent = "Thank you for subscribing to Empress Luxury.";
  newsletterForm.reset();
});
