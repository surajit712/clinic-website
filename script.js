// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===============================
// APPOINTMENT FORM
// ===============================

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

    // Prevent selecting past dates
    const dateInput = document.getElementById("date");

    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.min = today;
    }

    appointmentForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;

        // Basic phone validation
        const phoneDigits = phone.replace(/\D/g, "");

        if (phoneDigits.length < 10) {
            alert("Please enter a valid phone number.");
            return;
        }

        // Demo clinic WhatsApp number
        const whatsappNumber = "919999999999";

        const message =
            `Hello SmileCare,%0A%0A` +
            `I would like to book an appointment.%0A%0A` +
            `Name: ${encodeURIComponent(name)}%0A` +
            `Phone: ${encodeURIComponent(phone)}%0A` +
            `Service: ${encodeURIComponent(service)}%0A` +
            `Preferred Date: ${encodeURIComponent(date)}`;

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${message}`;

        window.open(whatsappURL, "_blank");
    });
}


// ===============================
// MOBILE HAMBURGER MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuToggle.textContent = "✕";
            menuToggle.setAttribute("aria-label", "Close menu");
        } else {
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-label", "Open menu");
        }

    });


    // Close menu after clicking a link
    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-label", "Open menu");

        });

    });
}