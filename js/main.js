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
            navbar.classList.add("bg-black/95", "shadow-lg");
            navbar.classList.remove("bg-black/80");
        } else {
            navbar.classList.add("bg-black/80");
            navbar.classList.remove("bg-black/95", "shadow-lg");
        }
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");

    if (mobileMenuButton && mobileMenu && menuIcon) {
        mobileMenuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            if (mobileMenu.classList.contains("hidden")) {
                menuIcon.classList.remove("fa-times");
                menuIcon.classList.add("fa-bars");
            } else {
                menuIcon.classList.remove("fa-bars");
                menuIcon.classList.add("fa-times");
            }
        });

        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll("a");
        mobileMenuLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
                menuIcon.classList.remove("fa-times");
                menuIcon.classList.add("fa-bars");
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener("click", (e) => {
            if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add("hidden");
                menuIcon.classList.remove("fa-times");
                menuIcon.classList.add("fa-bars");
            }
        });
    }

});
