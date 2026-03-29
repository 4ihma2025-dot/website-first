
```javascript
// =====================================
//  CY BOTAX & PARTNERS — Main Script (FIXED SAFE)
// =====================================

// DETECT BASE PATH (LEBIH AMAN)
function getBasePath() {
    if (window.location.hostname.includes("github.io")) {
        const parts = window.location.pathname.split("/").filter(Boolean);
        return parts.length > 0 ? "/" + parts[0] : "";
    }
    return "";
}

const basePath = getBasePath();

// BUILD PATH (ANTI DOUBLE SLASH)
function getPath(file) {
    return basePath ? basePath + "/" + file : file;
}


// LOAD NAVBAR (AMAN)
window.addEventListener("DOMContentLoaded", () => {
    fetch(getPath("navbar.html"))
        .then(res => {
            if (!res.ok) throw new Error("Navbar not found");
            return res.text();
        })
        .then(data => {
            const nav = document.getElementById("navbar");
            if (nav) {
                nav.innerHTML = data;
                initNavbarScroll();
            }
        })
        .catch(err => console.error("Navbar error:", err));
});


// LOAD PAGE
function loadPage(page, section = null, push = true) {
    const app = document.getElementById("app");

    if (!app) return;

    app.style.opacity = 0;
    app.style.transform = "translateY(16px)";

    setTimeout(() => {
        fetch(getPath(page))
            .then(res => {
                if (!res.ok) throw new Error("Page not found: " + page);
                return res.text();
            })
            .then(data => {
                app.innerHTML = data;

                setTimeout(() => {
                    app.style.opacity = 1;
                    app.style.transform = "translateY(0)";
                    initReveal();
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
                ```
            app.innerHTML = `
                <div style="display:flex;align-items:center;justify-content:center;height:60vh;flex-direction:column;gap:20px;">
                    <h1 style="font-family: Cormorant Garamond, serif; font-size:3rem; color:#b49354;">404</h1>
                    <p style="color:#8890a4;">Page not found</p>
                    <button onclick="loadPage(&quot;home.html&quot;)" style="padding:12px 28px;background:#b49354;color:white;border:none;cursor:pointer;letter-spacing:1px;font-size:0.8rem;text-transform:uppercase;">
                        Return Home
                    </button>
                </div>`;
```

                app.style.opacity = 1;
                app.style.transform = "translateY(0)";
            });
    }, 280);
}


// NAVBAR SCROLL
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


// MOBILE MENU
function toggleMobile() {
    const menu = document.getElementById("mobileMenu");
    const hamburger = document.getElementById("hamburger");
    if (!menu || !hamburger) return;

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


// REVEAL
function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
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


// HISTORY
window.onpopstate = function(event) {
    if (event.state) {
        loadPage(event.state.page, event.state.section, false);
    } else {
        loadPage("home.html", null, false);
    }
};


// INITIAL LOAD
window.onload = function() {
    const hash = window.location.hash.replace("#", "");
    const initialPage = hash ? hash + ".html" : "home.html";

    loadPage(initialPage, null, false);

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) loader.classList.add("hide");
    }, 1200);
};


// DARK MODE
function toggleDark() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}
```
