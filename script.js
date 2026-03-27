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

/* CONTAINER */
.container {
    max-width: 1100px;
    margin: auto;
}

/* HERO PREMIUM */
.hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(120deg, #0d47a1, #1976d2);
    color: white;
    text-align: center;
}

.hero-inner {
    max-width: 700px;
}

/* TYPOGRAPHY */
.title {
    font-size: 56px;
    font-weight: 700;
}

.subtitle {
    margin-top: 15px;
    font-size: 18px;
    opacity: 0.9;
}

/* SECTION */
.section-title {
    font-size: 32px;
    margin-bottom: 15px;
}

.section-desc {
    color: #6e6e73;
}

/* GRID PRACTICE */
.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-top: 40px;
}

/* CARD BOX */
.card-box {
    padding: 40px;
    border-radius: 20px;

    background: white;
    text-decoration: none;
    color: black;

    box-shadow: 0 10px 30px rgba(0,0,0,0.08);

    transition: all 0.3s ease;
}

.card-box:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
}

/* TEAM */
.team-grid {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.team-card {
    text-align: center;
}

.team-card img {
    width: 220px;
    border-radius: 12px;
}

/* ANIMATION REVEAL */
.reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: 0.8s ease;
}

.reveal.show {
    opacity: 1;
    transform: translateY(0);
}