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
