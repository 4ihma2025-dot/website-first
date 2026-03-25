function tombolKlik() {
    alert("TUGAS AKHIR DIKERJAIN BOIII 🙊");
}

// POPUP
function bukaKontak() {
    document.getElementById("popupKontak").style.display = "flex";
}

function tutupKontak() {
    document.getElementById("popupKontak").style.display = "none";
}

// DARK MODE
function toggleDark() {
    document.body.classList.toggle("dark");
}

function kirimEmail() {

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    emailjs.send("service_kiwb7s5", "template_ahgmi1p", {
        nama: nama,
        email: email,
        pesan: pesan
    }).then(function(response) {
        alert("Email berhasil dikirim 🚀");
    }, function(error) {
        alert("Gagal mengirim ❌");
    });
}