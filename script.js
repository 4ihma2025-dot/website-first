function tombolKlik() {
    var tempat = document.getElementById("tempatGambar");
    tempat.innerHTML += '<img src="https://i.pinimg.com/originals/0e/1d/ce/0e1dce10fab9b554efeb15e832290675.gif">';
}

function keluarUang() {
    var container = document.getElementById("uangContainer");

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            let uang = document.createElement("div");
            uang.classList.add("uang");

            uang.innerHTML = ["💸","💵","🪙"][Math.floor(Math.random()*3)];

            uang.style.left = Math.random() * 100 + "%";

            container.appendChild(uang);

            setTimeout(() => {
                uang.remove();
            }, 3000);

        }, i * 100);
    }
}