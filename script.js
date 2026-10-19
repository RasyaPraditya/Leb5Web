// script.js

// 1. Pesan Awal & Prompt Nama
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

let namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}

// 2. Operasi Dasar Matematika
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}
operasiDasar(9, 4);

// 3. Validasi Nilai Mahasiswa (Awal)
let inputNilai = prompt("Masukkan nilai (0–100):");
let nilaiMahasiswa = Number(inputNilai);

if (inputNilai === null || inputNilai.trim() === "" ||
    Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
} else {
    alert("Belum lulus");
}

// 4. Switch Case Pilihan Angka
let inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
}

// 5. Cek Bilangan Genap/Ganjil
function cekBilangan() {
    let input = document.getElementById("bilangan").value;
    let angka = Number(input);
    let hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}

// 6. Ubah Warna Latar Belakang
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

// 7. Hitung Total Harga Menu Makanan (Checkbox)
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// 8. Mini Project — Kalkulator Nilai Mahasiswa
function hitungNilaiAkhir(tugas, uts, uas) {
    return (tugas * 0.30) + (uts * 0.30) + (uas * 0.40);
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function prosesHitungNilai() {
    let inputTugas = document.getElementById("inputTugas").value;
    let inputUts = document.getElementById("inputUts").value;
    let inputUas = document.getElementById("inputUas").value;
    let divHasil = document.getElementById("hasilKalkulator");

    let tugas = Number(inputTugas);
    let uts = Number(inputUts);
    let uas = Number(inputUas);

    if (inputTugas.trim() === "" || inputUts.trim() === "" || inputUas.trim() === "") {
        alert("Semua input nilai harus diisi!");
        return;
    }

    if (
        isNaN(tugas) || tugas < 0 || tugas > 100 ||
        isNaN(uts) || uts < 0 || uts > 100 ||
        isNaN(uas) || uas < 0 || uas > 100
    ) {
        alert("Nilai harus berupa angka antara 0 sampai 100!");
        return;
    }

    let nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
    let predikat = tentukanPredikat(nilaiAkhir);
    let status = nilaiAkhir >= 60 ? "Lulus" : "Belum lulus";

    divHasil.innerHTML = `
        <p><strong>Nilai Akhir:</strong> ${nilaiAkhir.toFixed(2)}</p>
        <p><strong>Predikat:</strong> ${predikat}</p>
        <p><strong>Status:</strong> ${status}</p>
    `;

    console.log("Nilai akhir:", nilaiAkhir.toFixed(2));
    console.log("Predikat:", predikat);
    console.log("Status:", status);
}