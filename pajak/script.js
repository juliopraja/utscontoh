function hitungTotal() {
    var hargaBarang = document.getElementById("harga-barang").value;
    if (hargaBarang === "") {
        alert("Mohon masukkan harga barang.");
        return;
    }
    var hargaAngka = parseFloat(hargaBarang);
    var total = hargaAngka + (hargaAngka * 0.11);
    var elemenHasil = document.getElementById("total-harga");
    var containerHasil = document.getElementById("hasil-container");
    elemenHasil.innerHTML = "Rp " + total.toFixed(2);
    containerHasil.style.display = "block";
}