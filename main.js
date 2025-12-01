// Mobile hamburger menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".nav-toggle");

    // Safety check – agar elements nahi mile to kuch mat karo
    if (!header || !toggle) return;

    // 3-line button par click → nav open / close
    toggle.addEventListener("click", () => {
        header.classList.toggle("nav-open");
    });

    // Menu ke kisi bhi link par click → menu band ho जाए
    document.querySelectorAll(".main-nav a").forEach((link) => {
        link.addEventListener("click", () => {
            header.classList.remove("nav-open");
        });
    });
});
