
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.nav-overlay');
const body = document.body;

// باز و بسته کردن منو با همبرگر
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  overlay.classList.toggle('active');
  body.classList.toggle('no-scroll');
  hamburger.classList.toggle('open'); // اگه انیمیشن آیکن هم میخوای
});

// بستن منو با کلیک روی overlay
overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('no-scroll');
  hamburger.classList.remove('open');
});

// بستن منو با کلیک روی هر لینک
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
    hamburger.classList.remove('open');
  });
});
const slider = document.querySelector(".product-slider");
const next = document.querySelector(".prev-btn")
const prev = document.querySelector(".next-btn")

next.addEventListener("click", () => {
  slider.scrollLeft += 300;
})

prev.addEventListener("click", () => {
  slider.scrollLeft -= 300;
})




