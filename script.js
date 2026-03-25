// 🔥 TOMBOL → munculin GIF
function tombolKlik() {
    var tempat = document.getElementById("tempatGambar");

    tempat.innerHTML += 
    '<img src="https://i.pinimg.com/originals/0e/1d/ce/0e1dce10fab9b554efeb15e832290675.gif">';
}

// 🔥 GAMBAR → sama fungsi
function klikGambar() {
    tombolKlik();
}

// 💸 ANIMASI DUIT
function keluarUang() {
    var container = document.getElementById("uangContainer");

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {

            let uang = document.createElement("div");
            uang.classList.add("uang");

            // random emoji
            uang.innerHTML = ["💸","💵","🪙"][Math.floor(Math.random()*3)];

            // posisi random
            uang.style.left = Math.random() * 100 + "%";

            // ukuran random 🔥
            uang.style.fontSize = (20 + Math.random() * 30) + "px";

            container.appendChild(uang);

            setTimeout(() => {
                uang.remove();
            }, 3000);

        }, i * 80);
    }
}