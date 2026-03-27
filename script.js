// LOAD NAVBAR
fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });

// LOAD PAGE
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
                }
            });
    }, 200);
}

// DEFAULT LOAD
window.onload = function() {
    loadPage("home.html");
};

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