function updateDateTime() {
  const now = new Date();

  // Format tanggal: DD/MM/YYYY
  const tanggal = now.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // Format waktu: HH:MM:SS
  const waktu = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  document.getElementById("tanggal").textContent = tanggal;
  document.getElementById("waktu").textContent = waktu;
}

// Update setiap 1 detik
updateDateTime();
setInterval(updateDateTime, 1000);
