```javascript
// =====================================
// FINAL SCRIPT (NO ERROR VERSION)
// =====================================

// BASE PATH (GitHub fix)
function getBasePath() {
    if (window.location.hostname.includes("github.io")) {
        return "/website-first/";
    }
    return "";
}
```

const basePath = getBasePath();

function getPath(file) {
    return basePath + file;
}
```

// ======================
// LOAD NAVBAR
// ======================
window.addEventListener("DOMContentLoaded", function () {
    fetch(getPath("navbar.html"))
        .then(function (res) {
            if (!res.ok) throw new Error("Navbar error");
            return res.text();
        })
        .then(function (data) {
            var nav = document.getElementById("navbar");
            if (nav) {
                nav.innerHTML = data;
                initNavbarScroll();
            }
        })
        .catch(function (err) {
            console.error(err);
        });
});

// ======================
// LOAD PAGE
// ======================
function loadPage(page, section, push) {
    if (section === undefined) section = null;
    if (push === undefined) push = true;

    var app = document.getElementById("app");
    if (!app) return;

    app.style.opacity = 0;

    setTimeout(function () {
        fetch(getPath(page))
            .then(function (res) {
                if (!res.ok) throw new Error("Page not found");
                return res.text();
            })
            .then(function (data) {
                app.innerHTML = data;

                app.style.opacity = 1;

                if (section) {
                    var target = document.getElementById(section);
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                } else {
                    window.scrollTo(0, 0);
                }

                if (push) {
                    history.pushState({}, "", "#" + page.replace(".html", ""));
                }

                initReveal();
            })
            .catch(function () {
                app.innerHTML =
                    "<div style='text-align:center;padding:80px'>" +
                    "<h1 style='color:#b49354'>404</h1>" +
                    "<p>Page not found</p>" +
                    "<button onclick=\"loadPage('home.html')\">Back Home</button>" +
                    "</div>";

                app.style.opacity = 1;
            });
    }, 200);
}

// ======================
// PRACTICE AUTO GENERATE
// ======================
function renderPracticePage(key) {
    var data = PRACTICES[key];
    if (!data) return;

    var app = document.getElementById("app");

    var contentHTML = "";
    for (var i = 0; i < data.content.length; i++) {
        contentHTML += "<p>" + data.content[i] + "</p>";
    }

    var servicesHTML = "";
    for (var j = 0; j < data.services.length; j++) {
        servicesHTML += "<div class='service-item'><span>⬡</span><p>" + data.services[j] + "</p></div>";
    }

    app.innerHTML =
        "<section class='page-hero'>" +
        "<div class='page-hero-inner'>" +
        "<h1>" + data.title + "</h1>" +
        "<p>" + data.desc + "</p>" +
        "</div></section>" +

        "<div class='page-content'>" +
        contentHTML +
        "<div class='gold-line'></div>" +
        "<h3>Our Services</h3>" +
        "<div class='services-list'>" +
        servicesHTML +
        "</div>" +
        "<button onclick=\"loadPage('contact.html')\">Contact Us</button>" +
        "</div>";

    window.scrollTo(0, 0);

    history.pushState({}, "", "#practice-" + key);
}

// ======================
// NAVBAR SCROLL
// ======================
function initNavbarScroll() {
    var nav = document.getElementById("mainNav");
    if (!nav) return;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
}

// ======================
// MOBILE MENU
// ======================
function toggleMobile() {
    var menu = document.getElementById("mobileMenu");
    if (!menu) return;

    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
    } else {
        menu.classList.add("open");
    }
}

// ======================
// REVEAL ANIMATION
// ======================
function initReveal() {
    var items = document.querySelectorAll(".reveal");

    for (var i = 0; i < items.length; i++) {
        items[i].classList.add("show");
    }
}

// ======================
// BACK BUTTON
// ======================
window.onpopstate = function () {
    var hash = window.location.hash;

    if (hash.indexOf("#practice-") === 0) {
        var key = hash.replace("#practice-", "");
        renderPracticePage(key);
    } else {
        loadPage("home.html", null, false);
    }
};

// ======================
// INITIAL LOAD
// ======================
window.onload = function () {
    var hash = window.location.hash;

    if (hash.indexOf("#practice-") === 0) {
        var key = hash.replace("#practice-", "");
        renderPracticePage(key);
    } else {
        var page = hash ? hash.replace("#", "") + ".html" : "home.html";
        loadPage(page, null, false);
    }

    setTimeout(function () {
        var loader = document.getElementById("loader");
        if (loader) loader.classList.add("hide");
    }, 800);
};

// ======================
// DARK MODE
// ======================
function toggleDark() {
    document.body.classList.toggle("dark-mode");
}
`