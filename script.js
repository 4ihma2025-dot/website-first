// LOAD NAVBAR
fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });

// LOAD PAGE
function loadPage(page, section = null, push = true) {
    const app = document.getElementById("app");

    // FADE OUT
    app.style.opacity = 0;
    app.style.transform = "translateY(20px)";

    setTimeout(() => {
        fetch(page)
            .then(res => res.text())
            .then(data => {
                app.innerHTML = data;
                
                // FADE IN
                setTimeout(() => {
                    app.style.opacity = 1;
                    app.style.transform = "translateY(0)";
                }, 50);

                if (section) {
                    setTimeout(() => {
                        const target = document.getElementById(section);
                        if (target) {
                            target.scrollIntoView({ behavior: "smooth" });
                        }
                    }, 300);
                } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }

                // UPDATE HISTORY
                if (push) {
                    history.pushState({ page, section }, "", "#" + page.replace(".html", ""));
                }
            })
            .catch(err => {
                console.error("Page load error:", err);
                app.innerHTML = "<h1>Error 404</h1><p>Halaman tidak ditemukan.</p>";
                app.style.opacity = 1;
            });
    }, 300);
}

// HANDLE BACK/FORWARD BUTTON
window.onpopstate = function(event) {
    if (event.state) {
        loadPage(event.state.page, event.state.section, false);
    } else {
        loadPage("home.html", null, false);
    }
};

// DEFAULT LOAD
window.onload = function() {
    const hash = window.location.hash.replace("#", "");
    const initialPage = hash ? hash + ".html" : "home.html";
    loadPage(initialPage, null, false);
    
    // Check Dark Mode
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};

// DARK MODE
function toggleDark() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// ALERT
function tombolKlik() {
    alert("TUGAS AKHIR DIKERJAIN BOIIII 🔥");
}

// LOADER
window.addEventListener("load", function() {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
    }, 1000);
});

// CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// REVEAL
window.addEventListener("scroll", function() {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});