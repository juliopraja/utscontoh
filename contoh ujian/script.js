// Konsep dari 'Javascript.pptx'

// Mendefinisikan sebuah fungsi untuk menyapa pengguna
function sapaPengguna() {
    // Mengambil elemen input menggunakan ID-nya ('namaPengguna')
    var inputNama = document.getElementById("namaPengguna");
    
    // Mengambil nilai (teks) dari dalam elemen input tersebut
    var nama = inputNama.value;
    
    // Mengambil elemen h3 untuk menampilkan hasil menggunakan ID-nya ('pesanSapaan')
    var elemenPesan = document.getElementById("pesanSapaan");
    
    // Validasi sederhana, jika nama kosong berikan pesan default
    if (nama === "") {
        nama = "Pengguna";
    }
    
    // Mengubah konten HTML dari elemen h3 untuk menampilkan pesan
    elemenPesan.innerHTML = "Halo, " + nama + "! Selamat belajar.";
}