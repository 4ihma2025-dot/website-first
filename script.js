function tombolKlik() {
        alert("TUGAS AKHIR DIKERJAIN BOIII 🙊 UNTUK SEKARANG, RANGKUL YANG MAU SEJALAN, SELEBIHNYA HATI-HATI DIJALAN #PRINSIP #IZIIIN");
}

function klikGambar() {
    mainkanSuara(); //
    tampilkanGif();
    keluarUang();
}

function tampilkanGif() {
    var tempat = document.getElementById("tempatGambar");

    tempat.innerHTML += 
    '<img src="https://i.pinimg.com/originals/0e/1d/ce/0e1dce10fab9b554efeb15e832290675.gif">';
}

function keluarUang() {
    var container = document.getElementById("uangContainer");

    for (let i = 0; i < 80; i++) {
        setTimeout(() => {

            let uang = document.createElement("div");
            uang.className = "uang";

            uang.innerHTML = ["💸","💵","🪙"][Math.floor(Math.random()*3)];

            uang.style.left = Math.random() * 100 + "%";
            uang.style.fontSize = (20 + Math.random() * 30) + "px";

            container.appendChild(uang);

            mainkanKoin(); // 🔥 suara tiap uang keluar

            setTimeout(() => {
                uang.remove();
            }, 3000);

        }, i * 50);
    }
}

function mainkanSuara() {
    var audio = document.getElementById("suaraUang");

    audio.pause(); // reset dulu
    audio.currentTime = 0;

    audio.play().then(() => {
        console.log("Audio berhasil 🔊");
    }).catch((error) => {
        console.log("Audio error:", error);
    });
}

function mainkanKoin() {
    var audio = document.getElementById("suaraKoin");

    audio.currentTime = 0;
    audio.play().catch(() => {});
}

window.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".fade");

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 100) {
            el.classList.add("show");
        }
    });
});
