const bg = document.getElementById('dynamic-bg');

document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30; // movement range X
    const y = (e.clientY / innerHeight - 0.5) * 30; // movement range Y
    bg.style.transform = `translate(${x}px, ${y}px)`;
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const bg = document.getElementById('dynamic-bg');
    bg.style.transform = `translateY(${scrollY * 0.1}px)`; // subtle parallax scroll
});



window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("popup").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("popup").style.display = "none";
    }, 2000);
  }, 3000);
});


document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("cursor-glow");
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});