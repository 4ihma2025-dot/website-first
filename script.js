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