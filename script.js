
function showToast(message, type) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.className = `show ${type}`;

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}
function sendMsg() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        showToast("Please fill all fields");
    } else {
        showToast("Message sent successfully!");
    }
}
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const icon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    await fetch("https://script.google.com/macros/s/AKfycbyaa125rDGxGKI0jFJzAwpb-c4HjZD22j5BK_iY0i3AC8viJsxyJF78IxrJEBjD1lCHWQ/exec", {
      method: "POST",
      body: JSON.stringify(data)
    });

    showToast("Message sent successfully!");

    form.reset();

  } catch (error) {
    showToast("Failed to send message!");
  }
});
function showToast(msg){
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}