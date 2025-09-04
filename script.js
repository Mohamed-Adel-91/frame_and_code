// reveal on scroll
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.14 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// mobile nav toggle
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const navLinks = document.getElementById("navLinks");
menuBtn?.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

// simple form demo
function sendForm(form) {
  const status = document.getElementById("formStatus");
  status.textContent = "تم الاستلام! سنتواصل معك قريبًا.";
  form.reset();
}

// year
document.getElementById("year").textContent = new Date().getFullYear();
