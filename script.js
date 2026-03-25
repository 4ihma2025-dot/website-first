
// 🔥 TOMBOL → HANYA ALERT
function tombolKlik() {
    alert("TUGAS AKHIR DIKERJAIN BOIII 🙊 coba klik gambar cy");
}


// 🔥 GAMBAR → GIF + DUIT
function klikGambar() {
    tampilkanGif();
    keluarUang();
}


// 🔥 GIF
function tampilkanGif() {
    var tempat = document.getElementById("tempatGambar");

    tempat.innerHTML += 
    '<img src="https://i.pinimg.com/originals/0e/1d/ce/0e1dce10fab9b554efeb15e832290675.gif">';
}


// 💸 ANIMASI DUIT
function keluarUang() {
    var container = document.getElementById("uangContainer");

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {

            let uang = document.createElement("div");
            uang.classList.add("uang");

            uang.innerHTML = ["💸","💵","🪙"][Math.floor(Math.random()*3)];

            uang.style.left = Math.random() * 100 + "%";

            uang.style.fontSize = (20 + Math.random() * 30) + "px";

            container.appendChild(uang);

            setTimeout(() => {
                uang.remove();
            }, 3000);

        }, i * 70);
    }
}

function klikGambar() {
    tampilkanGif();
    keluarUang();
    mainkanSuara();
}

function mainkanSuara() {
    var audio = document.getElementById("suaraUang");
    audio.currentTime = 0; // biar bisa diputar ulang
    audio.volume = 0.5;
audio.play();
}