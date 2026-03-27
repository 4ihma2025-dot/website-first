// LOAD NAVBAR
fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });


// SPA LOAD PAGE
function loadPage(page, section = null) {
    const app = document.getElementById("app");

    app.style.opacity = 0;

    setTimeout(() => {
        fetch(page)
            .then(res => res.text())
            .then(data => {
                app.innerHTML = data;
                app.style.opacity = 1;

                if (section) {
                    setTimeout(() => {
                        document.getElementById(section).scrollIntoView({
                            behavior: "smooth"
                        });
                    }, 300);
                } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
            });
    }, 200);
}


// LOAD DEFAULT PAGE
window.onload = function() {
    loadPage("home.html");
};


// DARK MODE
function toggleDark() {
    document.body.classList.toggle("dark");
}

function tombolKlik() {
    alert("TUGAS AKHIR DIKERJAIN BOIIII 🔥");
}

// SCROLL EFFECT
window.addEventListener("scroll", function () {

    // NAVBAR EFFECT
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // FADE IN SECTION
    const elements = document.querySelectorAll(".fade");

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 100) {
            el.classList.add("show");
        }
    });

});

const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

document.querySelectorAll(".fade").forEach(el => {
    el.classList.add("show");
});

// REVEAL ANIMATION
window.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 100) {
            el.classList.add("show");
        }
    });
});