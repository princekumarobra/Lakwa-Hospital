// व्हाट्सऐप / फोन नंबर (country code के साथ, + के बिना)
const WHATSAPP_NUMBER = "919771737437"; // 91 + 9771737437

// सीधे कॉल बटन
function callNow() {
  window.location.href = "tel:+919771737437";
}

// अपॉइंटमेंट फॉर्म तक smooth scroll
function scrollToAppointment() {
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// footer / contact से व्हाट्सऐप खोलने के लिए (अगर बाद में चाहिए)
function openWhatsAppFromFooter() {
  const msg = encodeURIComponent(
    "नमस्ते डॉक्टर, मैं Lakwa Hospital Obra की वेबसाइट से अपॉइंटमेंट लेना चाहता/चाहती हूँ।"
  );
  const waUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg;
  window.open(waUrl, "_blank");
}

// अपॉइंटमेंट फॉर्म सबमिट → WhatsApp पर डिटेल भेजो
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
      alert("कृपया नाम और मोबाइल नंबर सही तरीके से भरें।");
      return;
    }

    let msg = "नया अपॉइंटमेंट अनुरोध%0A%0A";
    msg += "👤 नाम: " + name + "%0A";
    msg += "📱 मोबाइल नंबर: " + phone + "%0A";
    msg += "📅 पसंदीदा तिथि: " + (date || "N/A") + "%0A";
    msg += "📝 समस्या: " + (problem || "N/A") + "%0A";

    const waUrl = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + msg;
    window.open(waUrl, "_blank");
  });
});

// मोबाइल / टेबलेट के लिए NAV MENU toggle
function toggleMenu() {
  const menu = document.getElementById("navLinks");
  if (!menu) return;
  menu.classList.toggle("open");
}
