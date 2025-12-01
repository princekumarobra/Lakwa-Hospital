// WhatsApp / phone number (country code ke saath, + ke bina)
const WHATSAPP_NUMBER = "919771737437"; // 91 + 9771737437

// call button
function callNow() {
  window.location.href = "tel:+919771737437";
}

// scroll to appointment/contact section
function scrollToAppointment() {
  const el = document.getElementById("contact-us");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// footer se WhatsApp open karna
function openWhatsAppFromFooter() {
  const msg = encodeURIComponent(
    "नमस्ते डॉक्टर साहब, मैं Lakwa Hospital Obra की वेबसाइट से आपसे अपॉइंटमेंट लेना चाहता/चाहती हूँ।"
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
    const date = document.getElementById("date").value;
    const problem = document.getElementById("problem").value.trim();

    if (!name || !phone) {
      alert("कृपया नाम और मोबाइल नंबर अनिवार्य रूप से भरें।");
      return;
    }

    let msg = "नमस्ते डॉक्टर साहब,%0A%0A";
    msg += "मैं ऑनलाइन अपॉइंटमेंट लेना चाहता/चाहती हूँ:%0A";
    msg += "नाम: " + name + "%0A";
    msg += "मोबाइल: " + phone + "%0A";
    if (date) msg += "पसंदीदा तिथि: " + date + "%0A";
    if (problem) msg += "समस्या: " + problem + "%0A";
    msg += "%0Aकृपया सुविधानुसार समय बताने की कृपा करें।";

    const waUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg;
    window.open(waUrl, "_blank");
  });
});
