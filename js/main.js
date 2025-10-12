// Highlight the active nav link based on current page
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage ||
            (link.getAttribute("href") === "index.html" && currentPage === "")) {
            link.classList.add("active");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    // Initialize Typed.js animation
    if (document.querySelector("#typed-text")) {
        new Typed("#typed-text", {
            strings: ["Frontend Developer", "UI/UX Designer", "Full Stack Developer"],
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 1500,
            loop: true
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-opacity-100", "shadow-md");
        } else {
            navbar.classList.remove("bg-opacity-100", "shadow-md");
        }
    });

    console.log("✅ Shubham Patil website initialized successfully");
});
