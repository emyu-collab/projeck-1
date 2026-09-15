let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let nama = document.querySelector("#nama").value;
    let email = document.querySelector("#email").value;
    let kelas = document.querySelector("#kelas").value;
    let jurusan = document.querySelector("#jurusan").value;
    let kegiatan = document.querySelector("#kegiatan").value;
    let setuju = document.querySelector("#setuju").checked;

    if (nama === "" || email === "" || kelas === "" || jurusan === "" || kegiatan === "") {
        alert("Mohon lengkapi semua data!");
    } 
    else if (!setuju) {
        alert("Kamu harus menyetujui Syarat & Ketentuan!");
    } 
    else {
        alert("Pendaftaran berhasil!");
    }
});