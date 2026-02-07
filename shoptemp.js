// ==================== Navbar & Menu ====================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.nav-overlay');
const body = document.body;

if (hamburger && navLinks && overlay) {
    // باز و بسته کردن منو با همبرگر
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
        hamburger.classList.toggle('open');
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
}

// ==================== Product Slider ====================
const slider = document.querySelector(".product-slider");
const nextBtn = document.querySelector(".prev-btn");
const prevBtn = document.querySelector(".next-btn");

if (slider && nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
        slider.scrollLeft += 300;
    });
    
    prevBtn.addEventListener("click", () => {
        slider.scrollLeft -= 300;
    });
}

// ==================== Bag Animation ====================
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("animation-container");
    
    if (!container) {
        console.warn("animation-container پیدا نشد - آیکون bag نمایش داده نمیشه");
        return;
    }

    // لود انیمیشن bag
    const bagAnimation = lottie.loadAnimation({
        container: container,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "./icons/bag.json"
    });

    // نمایش فریم اول وقتی لود شد
    bagAnimation.addEventListener('DOMLoaded', () => {
        bagAnimation.goToAndStop(0, true);
    });

    // اگه فایل پیدا نشد، ارور نده
    bagAnimation.addEventListener('data_failed', () => {
        console.error("فایل bag.json پیدا نشد! مسیر رو چک کن: ./icons/bag.json");
    });

    // کلیک روی خود آیکون bag
    container.addEventListener("click", (e) => {
        e.preventDefault();
        bagAnimation.goToAndPlay(0, true);
    });

    // کلیک روی دکمه‌های محصول
    const buttons = document.querySelectorAll(".btn-accent");
    buttons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            bagAnimation.goToAndPlay(0, true);
        });
    });
});

// ==================== Loading Animation ====================
const loaderElement = document.getElementById("loader-animation");

if (loaderElement) {
    const loaderAnim = lottie.loadAnimation({
        container: loaderElement,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "./icons/loading.json"
    });

    // مخفی شدن لودینگ بعد از لود کامل صفحه
    window.addEventListener("load", () => {
        const loader = document.getElementById("site-loader");
        if (loader) {
            setTimeout(() => {
                loader.classList.add("hide");
            }, 300);
        }
    });
} else {
    console.warn("loader-animation پیدا نشد - صفحه بدون loading نمایش داده میشه");
}


// ==================== Logo Animation ====================
window.addEventListener('load', () => {
    const logo = document.querySelector('.logo');
    if (logo) {
        setTimeout(() => {
            logo.style.opacity = '1';
        }, 500);
    }
});
