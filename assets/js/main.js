/* --- PARALLAX MOUSE EFFECT --- */
document.addEventListener("mousemove", (e) => {
  const shapes = document.querySelectorAll(".floating-obj");

  shapes.forEach((shape, index) => {
    const speed = (index + 1) / 20;

    const x = (window.innerWidth / 2 - e.clientX) * speed;
    const y = (window.innerHeight / 2 - e.clientY) * speed;

    shape.style.marginLeft = `${x}px`;
    shape.style.marginTop = `${y}px`;
  });
});

/* --- CLICK-TO-PLAY PROJECT PREVIEWS --- */
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const img = card.querySelector(".project-img");
    const overlay = card.querySelector(".overlay");
    const btn = card.querySelector(".preview-text");
    const imageContainer = card.querySelector(".card-image");

    if (!img || !btn || !imageContainer) return;
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const gifUrl = img.getAttribute("data-gif");

      img.src = gifUrl;

      imageContainer.classList.add("playing");
    });

    card.addEventListener("mouseleave", () => {
      if (imageContainer.classList.contains("playing")) {
        const staticUrl = img.getAttribute("data-static");

        img.src = staticUrl;

        imageContainer.classList.remove("playing");
      }
    });
  });
});
/* --- MOBILE MENU TOGGLE --- */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Toggle menu on click
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const icon = menuBtn.querySelector("i");
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// Close menu when a link is clicked (UX Improvement)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    // Reset icon
    menuBtn.querySelector("i").classList.remove("fa-xmark");
    menuBtn.querySelector("i").classList.add("fa-bars");
  });
});
