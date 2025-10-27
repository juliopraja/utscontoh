function kirimPesan() {
    var nama = document.getElementById("nama").value;
    var feedback = document.getElementById("pesan-feedback");
    
    if (nama === "") {
        feedback.innerHTML = "Mohon isi nama Anda.";
        feedback.style.color = "red";
    } else {
        feedback.innerHTML = "Terima kasih, " + nama + "! Pesan Anda akan segera kami proses.";
        feedback.style.color = "green";
    }
}