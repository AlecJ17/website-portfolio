/* Dark/Light theme code */
const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Set initial state
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  const isDark = toggle.checked;
  body.classList.toggle("dark-theme", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Web Developer",
  ],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});

// Download CV
const downloadBtn = document.querySelector(".btn");
downloadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const link = document.createElement("a");
  link.href = "cv/Alec-Josef-Serrano-CV.pdf";
  link.download = "Alec-Josef-Serrano-CV.pdf";
  link.click();
});

// Add event listener to the "Read More" button
document.getElementById("read-more").addEventListener("click", function () {
  const moreText = document.getElementById("more-text");
  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    this.innerText = "Read Less"; // Change button text to "Read Less"
  } else {
    moreText.style.display = "none";
    this.innerText = "Read More"; // Change button text back to "Read More"
  }
});
// Handle form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_7rui99m", "template_2k9dvpq", this).then(
      () => {
        alert("Message sent successfully!");
        form.reset(); // Reset the form after successful submission
      },
      (error) => {
        alert("Failed to send message. Please try again later.");
        console.error("EmailJS Error:", error);
      }
    );
  });
});
