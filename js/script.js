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
if (menuBtn) {
  console.log("Menu button is present");
  menuBtn.addEventListener("click", () => {
    console.log("Menu button clicked");
    mobileNav.classList.toggle("hidden");
  });
} else {
  console.log("Menu button is missing");
}

// theme toggle
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
}
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    localStorage.setItem("theme", theme);
  });
}

// simple form demo
function sendForm(form) {
  const status = document.getElementById("formStatus");
  status.textContent = "تم الاستلام! سنتواصل معك قريبًا.";
  form.reset();
}

// year
document.getElementById("year").textContent = new Date().getFullYear();
