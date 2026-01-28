// Thailaw3 main JavaScript

// Mobile menu toggle
const tl3MenuToggle = document.getElementById('tl3MenuToggle');
const tl3NavLinks = document.getElementById('tl3NavLinks');

if (tl3MenuToggle && tl3NavLinks) {
    tl3MenuToggle.addEventListener('click', () => {
        tl3NavLinks.classList.toggle('tl3-nav-open');
        tl3MenuToggle.classList.toggle('tl3-open');
    });

    document.addEventListener('click', (e) => {
        if (!tl3MenuToggle.contains(e.target) && !tl3NavLinks.contains(e.target)) {
            tl3NavLinks.classList.remove('tl3-nav-open');
            tl3MenuToggle.classList.remove('tl3-open');
        }
    });
}

// Counter animation
const tl3Counters = document.querySelectorAll('.tl3-stat-number');

const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target') || '0', 10);
    if (!target) return;

    let current = 0;
    const duration = 2000;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            el.textContent = target + '+';
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current) + '+';
        }
    }, 16);
};

const counterObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                animateCounter(el);
                counterObserver.unobserve(el);
            }
        });
    },
    { threshold: 0.5 }
);

tl3Counters.forEach((counter) => {
    counterObserver.observe(counter);
});

// Fade-in animation on scroll
const tl3FadeItems = document.querySelectorAll('.tl3-fade');

const fadeObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('tl3-fade-in');
                fadeObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

tl3FadeItems.forEach((item) => {
    fadeObserver.observe(item);
});

// Simple form handler for hero form
const tl3HeroForm = document.getElementById('tl3HeroForm');

if (tl3HeroForm) {
    tl3HeroForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(tl3HeroForm);
        const name = formData.get('name')?.toString().trim();
        const email = formData.get('email')?.toString().trim();
        const topic = formData.get('topic')?.toString().trim();

        if (!name || !email || !topic) {
            alert('กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('กรุณากรอกอีเมลให้ถูกต้อง');
            return;
        }

        alert('ขอบคุณสำหรับข้อมูล เราจะติดต่อกลับโดยเร็วที่สุด');
        tl3HeroForm.reset();
    });
}

