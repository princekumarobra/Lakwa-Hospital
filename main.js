// WhatsApp नंबर (country code सहित, बिना + के)
const WHATSAPP_NUMBER = "919771737437"; // 91 + 9771737437

// Call button (global so HTML से call हो सके)
function callNow() {
    window.location.href = "tel:+919771737437";
}

// Scroll to appointment/contact section
function scrollToAppointment() {
    const el = document.getElementById("contact-us");
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
    // ---------- Appointment form → WhatsApp ----------
    const form = document.getElementById("appointmentForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const date = document.getElementById("date").value.trim();
            const problem = document.getElementById("problem").value.trim();

            if (!name || !phone) {
                alert("कृपया रोगी का नाम और मोबाइल नंबर सही तरीके से भरें।");
                return;
            }

            let msg = "नमस्ते सर,";
            msg += "%0Aमैं ऑनलाइन अपॉइंटमेंट बुक करना चाहता/चाहती हूँ।";
            msg += "%0A%0Aरोगी का नाम: " + name;
            msg += "%0Aमोबाइल नंबर: " + phone;
            if (date) msg += "%0Aपसंदीदा तिथि: " + date;
            if (problem) msg += "%0Aसमस्या: " + problem;

            const waUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg;
            window.open(waUrl, "_blank");
        });
    }

    // ---------- Mobile nav toggle ----------
    const header = document.querySelector(".site-header");
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");

    if (header && navToggle && nav) {
        navToggle.addEventListener("click", () => {
            header.classList.toggle("nav-open");
        });

        // Nav links पर क्लिक → smooth scroll + menu बंद
        nav.querySelectorAll("a[href^='#']").forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const id = link.getAttribute("href").slice(1);
                const target = document.getElementById(id);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
                header.classList.remove("nav-open");
            });
        });
    }
});
