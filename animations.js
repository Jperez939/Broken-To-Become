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





const bgb = document.getElementById('dynamic-bgb');

document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30; // movement range X
    const y = (e.clientY / innerHeight - 0.5) * 30; // movement range Y
    bgb.style.transform = `translate(${x}px, ${y}px)`;
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const bgb = document.getElementById('dynamic-bgb');
    bgb.style.transform = `translateY(${scrollY * 0.1}px)`; // subtle parallax scroll
});





const bgs = document.getElementById('dynamic-bgs');

document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30; // movement range X
    const y = (e.clientY / innerHeight - 0.5) * 30; // movement range Y
    bgs.style.transform = `translate(${x}px, ${y}px)`;
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const bgs = document.getElementById('dynamic-bgs');
    bgs.style.transform = `translateY(${scrollY * 0.1}px)`; // subtle parallax scroll
});





const bgp = document.getElementById('dynamic-bgp');

document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30; // movement range X
    const y = (e.clientY / innerHeight - 0.5) * 30; // movement range Y
    bgp.style.transform = `translate(${x}px, ${y}px)`;
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const bgp = document.getElementById('dynamic-bgp');
    bgp.style.transform = `translateY(${scrollY * 0.1}px)`; // subtle parallax scroll
});





const bga = document.getElementById('dynamic-bga');

document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30; // movement range X
    const y = (e.clientY / innerHeight - 0.5) * 30; // movement range Y
    bga.style.transform = `translate(${x}px, ${y}px)`;
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const bga = document.getElementById('dynamic-bga');
    bga.style.transform = `translateY(${scrollY * 0.1}px)`; // subtle parallax scroll
});




const bgbd = document.getElementById('dynamic-bgbd');

document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30; // movement range X
    const y = (e.clientY / innerHeight - 0.5) * 30; // movement range Y
    bgbd.style.transform = `translate(${x}px, ${y}px)`;
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const bgbd = document.getElementById('dynamic-bgbd');
    bgbd.style.transform = `translateY(${scrollY * 0.1}px)`; // subtle parallax scroll
});





const bgbe = document.getElementById('dynamic-bgbe');

document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30; // movement range X
    const y = (e.clientY / innerHeight - 0.5) * 30; // movement range Y
    bgbe.style.transform = `translate(${x}px, ${y}px)`;
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const bgbe = document.getElementById('dynamic-bgbe');
    bgbe.style.transform = `translateY(${scrollY * 0.1}px)`; // subtle parallax scroll
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