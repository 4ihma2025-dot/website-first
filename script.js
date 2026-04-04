// =====================================
 //  CY BOTAX & PARTNERS — Main Script (Enhanced)
 // =====================================
 
 // EmailJS Configuration (User: Register at emailjs.com, add keys below)
 const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';  // e.g. 'user_abc123'
 const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';  // e.g. 'service_def456'
 const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // e.g. 'template_ghi789'
 
 // EmailJS Init (free, sends to 4IHMA2025@gmail.com via your EmailJS dashboard)
 emailjs.init(EMAILJS_PUBLIC_KEY);

// LOAD NAVBAR
fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
        initNavbarScroll();
    });

// LOAD PAGE
function loadPage(page, section = null, push = true) {
    const app = document.getElementById("app");

    app.style.opacity = 0;
    app.style.transform = "translateY(16px)";

    setTimeout(() => {
        fetch(page)
            .then(res => res.text())
            .then(data => {
                // Load footer
                fetch('footer.html').then(res => res.text()).then(footerData => {
                    app.innerHTML = data + footerData;
                }).catch(() => {
                    app.innerHTML = data; // Fallback
                });

                setTimeout(() => {
                    app.style.opacity = 1;
                    app.style.transform = "translateY(0)";
                    initReveal();
                    initNavbarScroll(); // Re-init navbar
                    initSFX(); // Init sounds if needed
                }, 60);

                if (section) {
                    setTimeout(() => {
                        const target = document.getElementById(section);
                        if (target) target.scrollIntoView({ behavior: "smooth" });
                    }, 350);
                } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }

                if (push) {
                    history.pushState({ page, section }, "", "#" + page.replace(".html", ""));
                }
            })
            .catch(err => {
                console.error("Page load error:", err);
                app.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;height:60vh;flex-direction:column;gap:20px;">
                        <h1 style="font-family:'Cormorant Garamond',serif;font-size:3rem;color:#b49354;">404</h1>
                        <p style="color:#8890a4;">Page not found</p>
                        <button onclick="loadPage('home.html')" style="padding:12px 28px;background:#b49354;color:white;border:none;cursor:pointer;letter-spacing:1px;font-size:0.8rem;text-transform:uppercase;">Return Home</button>
                    </div>`;
                app.style.opacity = 1;
                app.style.transform = "translateY(0)";
            });
    }, 280);
}

// NAVBAR SCROLL EFFECT
function initNavbarScroll() {
    const nav = document.getElementById("mainNav");
    if (!nav) return;
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
}

// MOBILE MENU TOGGLE
function toggleMobile() {
    const menu = document.getElementById("mobileMenu");
    const hamburger = document.getElementById("hamburger");
    if (!menu) return;
    menu.classList.toggle("open");
    const spans = hamburger.querySelectorAll("span");
    if (menu.classList.contains("open")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
        spans[0].style.transform = "";
        spans[1].style.opacity = "";
        spans[2].style.transform = "";
    }
}

// REVEAL ON SCROLL
function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// BACK/FORWARD BUTTON
window.onpopstate = function(event) {
    if (event.state) {
        loadPage(event.state.page, event.state.section, false);
    } else {
        loadPage("home.html", null, false);
    }
};

// Toast Notification System
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// SFX System (Subtle professional chimes)
const sfx = {
    cash: new Audio('cash.mp3'),
    coin: new Audio('coin.mp3')
};
function playSFX(name, volume = 0.3) {
    const audio = sfx[name];
    if (audio) {
        audio.volume = volume;
        audio.currentTime = 0;
        audio.play().catch(() => {}); // Ignore autoplay policy
    }
}
function initSFX() {
    // Add to buttons/CTAs
    document.querySelectorAll('.btn-primary, .nav-cta, .pa-card, .cta-phone').forEach(el => {
        el.addEventListener('mouseenter', () => playSFX('coin'));
        el.addEventListener('click', () => playSFX('cash'));
    });
}

// Global Contact Form Handler
function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    
    // Form data
    const formData = {
        user_name: form.querySelector('[name="user_name"]').value || 'N/A',
        user_email: form.querySelector('[name="user_email"]').value || 'N/A',
        user_phone: form.querySelector('[name="user_phone"]').value || 'N/A',
        practice_area: form.querySelector('[name="practice_area"]').value || 'N/A',
        message: form.querySelector('[name="user_message"]').value || 'No message'
    };
    
    // TODO: Replace with your EmailJS keys after registration
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        showToast('Please configure EmailJS keys in script.js first!', 'error');
        btn.textContent = originalText;
        btn.disabled = false;
        return;
    }
    
    // Send via EmailJS (to 4IHMA2025@gmail.com)
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
        .then(() => {
            showToast('Message sent successfully! We\'ll reply within 1 business day.', 'success');
            form.reset();
        }, (error) => {
            console.error('EmailJS error:', error);
            showToast('Send failed. Please try again or email info@cybotax.com.vn', 'error');
        })
        .finally(() => {
            btn.textContent = originalText;
            btn.disabled = false;
        });
}

// DEFAULT LOAD
window.onload = function() {
    const hash = window.location.hash.replace("#", "");
    const initialPage = hash ? hash + ".html" : "home.html";
    loadPage(initialPage, null, false);

    // Theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Loader
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) loader.classList.add("hide");
    }, 1200);
    
    initSFX(); // Initial SFX setup
};

// DARK MODE
function toggleDark() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}

// CURSOR
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

if (cursor && follower) {
    document.addEventListener("mousemove", e => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        
        setTimeout(() => {
            follower.style.left = e.clientX + "px";
            follower.style.top = e.clientY + "px";
        }, 80);
    });

    document.addEventListener("mousedown", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(0.7)";
    });

    document.addEventListener("mouseup", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
}