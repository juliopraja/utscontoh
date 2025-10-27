// Fungsi yang dipanggil saat tombol 'Daftar Sekarang' diklik
function daftarBuletin() {
    
    // Mengambil elemen input email dengan ID 'email-input'
    var inputEmail = document.getElementById("email-input");
    
    // Mengambil nilai (alamat email) yang diketikkan pengguna
    var email = inputEmail.value;
    
    // Mengambil elemen paragraf untuk menampilkan pesan konfirmasi
    var elemenPesan = document.getElementById("pesan-konfirmasi");
    
    // Validasi sederhana: Cek apakah input email tidak kosong dan mengandung '@'
    if (email !== "" && email.includes("@")) {
        // Jika valid, ubah konten HTML untuk menampilkan pesan berhasil
        elemenPesan.innerHTML = "Terima kasih! " + email + " telah terdaftar.";
    } else {
        // Jika tidak valid, tampilkan pesan error
        elemenPesan.innerHTML = "Mohon masukkan alamat email yang valid.";
        elemenPesan.style.color = "red"; // Ubah warna teks menjadi merah
    }
}