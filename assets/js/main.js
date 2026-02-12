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
