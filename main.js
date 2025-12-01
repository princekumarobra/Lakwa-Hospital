// WhatsApp / phone number (country code ke saath, + ke bina)
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

// Footer WhatsApp open (agar future me use karna ho)
function openWhatsAppFromFooter() {
  const msg = encodeURIComponent(
    "नमस्ते डॉक्टर, मैं Lakwa Hospital Obra की वेबसाइट से आपसे अपॉइंटमेंट लेना चाहता/चाहती हूँ।"
  );
  const waUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg;
  window.open(waUrl, "_blank");
}

// NAV hamburger toggle
function toggleMenu() {
  const links = document.getElementById("navLinks");
  if (!links) return;
  links.classList.toggle("open");
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
      alert("कृपया नाम और मोबाइल नंबर ज़रूरी रूप से भरें।");
      return;
    }

    let msg = "नमस्ते डॉक्टर,\n";
    msg += "मैं आपका मरीज " + name + " हूँ।\n";
    msg += "मोबाइल नंबर: " + phone + "\n";
    if (date) msg += "अपॉइंटमेंट की तिथि: " + date + "\n";
    if (problem) msg += "समस्या: " + problem + "\n";
    msg += "\nकृपया समय की पुष्टि करें।";

    const encoded = encodeURIComponent(msg);
    const waUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encoded;
    window.open(waUrl, "_blank");
  });
});
