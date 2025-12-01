// WhatsApp / phone number (country code सहित, + के बिना)
const WHATSAPP_NUMBER = "919771737437"; // 91 + 9771737437

// Call button
function callNow() {
    window.location.href = "tel:+919771737437";
}

// Scroll to appointment/contact section
function scrollToAppointment() {
    const el = document.getElementById("contact-us");
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Footer से WhatsApp open करना (अगर कहीं इस्तेमाल करना चाहें)
function openWhatsAppFromFooter() {
    const msg = encodeURIComponent(
        "नमस्ते सर, मैं Lakwa Hospital Obra की वेबसाइट से अपॉइंटमेंट लेना चाहता/चाहती हूँ।"
    );
    const waUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg;
    window.open(waUrl, "_blank");
}

// WhatsApp appointment form handling
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("appointmentForm");
    if (!form) return;

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
});

// NAV: mobile hamburger toggle + smooth scroll
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");

    if (navToggle && header && nav) {
        navToggle.addEventListener("click", () => {
            header.classList.toggle("nav-open");
        });

        // nav links पर क्लिक करने पर menu बंद + smooth scroll
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
