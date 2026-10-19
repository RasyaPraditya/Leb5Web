# Leb5Web

## Laporan Praktikum 5: JavaScript

## 1. Latihan 1: Output pada Halaman dan Console

Menampilkan pesan teks secara langsung pada elemen HTML melalui manipulasi DOM menggunakan `textContent`, serta mencetak pesan log pada browser console.

**Hasil Pengujian:**
- Teks pada elemen `<p id="pesan">` berubah menjadi `Hello World`.
- Pesan `Hello World` tampil pada tab Console di Developer Tools browser.

## 2. Latihan 2: Alert dan Prompt

Mengambil input nama pengguna menggunakan dialog interaktif `prompt()` dan menampilkan sapaan melalui `alert()`.

**Hasil Pengujian:**
- Jika nama diisi, misalnya `Rasya`, dialog alert menyapa pengguna.
- Paragraf pesan pada halaman HTML diperbarui.
- Jika input kosong atau pengguna menekan tombol Cancel, alert menampilkan peringatan bahwa nama belum diisi.

## 3. Latihan 3: Function dan Operasi Aritmetika

Membuat fungsi yang menerima dua parameter bilangan untuk melakukan pemrosesan dan menampilkan hasil operasi aritmetika dasar.

**Hasil Pengujian di Console:**

| Operasi | Hasil |
|---|---:|
| Penjumlahan | 13 |
| Pengurangan | 5 |
| Perkalian | 36 |
| Pembagian | 2.25 |
| Modulus | 1 |

## 4. Latihan 4: Seleksi Kondisi `if-else`

Memvalidasi input nilai numerik dalam rentang 0–100 yang diperoleh dari dialog `prompt()` untuk menentukan status kelulusan.

## 5. Latihan 5: Seleksi Kondisi `switch-case`

Menerjemahkan masukan angka 1–5 dari `prompt()` menjadi nama teks bilangan menggunakan struktur percabangan `switch`.

## 6. Latihan 6: Cek Bilangan Genap atau Ganjil pada Form

Mengambil nilai dari input form, memeriksa keabsahan bilangan bulat, dan menampilkan keterangan apakah bilangan tersebut genap atau ganjil pada elemen HTML.

## 7. Latihan 7: Mengubah Warna Latar Halaman

Memanipulasi gaya tampilan halaman secara dinamis menggunakan properti `document.body.style.backgroundColor` dengan parameter warna.

## 8. Latihan 8: DOM dan Checkbox Total Harga Menu

Menghubungkan event listener `change` pada daftar checkbox menu makanan untuk menghitung total akumulasi harga secara real-time.

## 9. Implementasi Mini Project: Kalkulator Nilai Mahasiswa

Program ini menerima masukan nilai Tugas (30%), UTS (30%), dan UAS (40%). Program melakukan validasi nilai dalam rentang 0–100, menghitung nilai akhir, menentukan predikat huruf, dan menampilkan status kelulusan secara langsung pada elemen DOM.

### Pengujian Skenario Mini Project

| No. | Skenario | Tugas | UTS | UAS | Nilai Akhir | Predikat | Status |
|---|---|---:|---:|---:|---:|:---:|---|
| 1 | Lulus Baik | 85 | 80 | 90 | 85.50 | A | Lulus |
| 2 | Lulus Cukup | 65 | 60 | 60 | 61.50 | C | Lulus |
| 3 | Belum Lulus | 50 | 40 | 45 | 45.00 | E | Belum Lulus |
| 4 | Validasi Error | - | - | - | - | - | Pesan error berwarna merah |

**Hasil Pengujian:**

1. Skenario 1 menghasilkan nilai akhir 85.50, predikat A, dan status Lulus.
2. Skenario 2 menghasilkan nilai akhir 61.50, predikat C, dan status Lulus.
3. Skenario 3 menghasilkan nilai akhir 45.00, predikat E, dan status Belum Lulus.
4. Skenario 4 menguji validasi dengan memasukkan angka di luar rentang, seperti 105, atau membiarkan kolom kosong. Program menampilkan pesan error berwarna merah.

---

## 10. Jawaban Pertanyaan

### 1. Perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`

- **`console.log()`**: Menampilkan output pesan pada tab Developer Console browser untuk kebutuhan analisis dan debugging tanpa mengganggu antarmuka pengguna.
- **`alert()`**: Menampilkan kotak dialog pop-up informasi yang memblokir interaksi hingga pengguna mengklik tombol OK.
- **`prompt()`**: Menampilkan kotak dialog pop-up yang meminta masukan berupa teks dari pengguna.
- **`textContent`**: Properti DOM yang digunakan untuk mengubah isi teks di dalam elemen HTML.
- **`innerHTML`**: Properti DOM yang digunakan untuk mengubah isi elemen sekaligus merender tag HTML di dalamnya.

### 2. Perbedaan `let` dan `const` beserta Contohnya

- **`const`**: Digunakan untuk mendeklarasikan variabel yang tidak dapat diberi nilai baru melalui reassignment.

  Contoh:

  ```javascript
  const phi = 3.14;
  ```

- **`let`**: Digunakan untuk mendeklarasikan variabel yang nilainya dapat diubah selama program berjalan.

  Contoh:

  ```javascript
  let skor = 0;
  skor = 10;
  ```

### 3. Perbedaan Operator `==` dan `===`

- **`==` (Loose Equality)**: Membandingkan dua nilai setelah melakukan konversi tipe data secara otomatis (*type coercion*).

  Contoh:

  ```javascript
  console.log('5' == 5); // true
  ```

- **`===` (Strict Equality)**: Membandingkan nilai beserta tipe datanya tanpa melakukan konversi otomatis.

  Contoh:

  ```javascript
  console.log('5' === 5); // false
  ```

### 4. Fungsi `if-else` dan `switch` serta Penggunaannya

- **`if-else`**: Digunakan untuk menangani percabangan berdasarkan kondisi logika, pengujian rentang nilai, atau ekspresi boolean.

  Contoh:

  ```javascript
  let nilai = 75;

  if (nilai >= 60) {
      console.log("Lulus");
  } else {
      console.log("Tidak Lulus");
  }
  ```

- **`switch`**: Digunakan untuk memilih satu tindakan dari beberapa pilihan nilai yang pasti (*case*).

  Contoh:

  ```javascript
  let angka = 2;

  switch (angka) {
      case 1:
          console.log("Satu");
          break;
      case 2:
          console.log("Dua");
          break;
      default:
          console.log("Angka tidak dikenal");
  }
  ```

### 5. Fungsi Parameter dan `return` dalam Function

- **Parameter**: Variabel penampung nilai yang dikirimkan ke dalam fungsi saat fungsi tersebut dipanggil.
- **`return`**: Pernyataan yang menghentikan eksekusi fungsi dan mengembalikan suatu nilai hasil pemrosesan kepada kode yang memanggilnya.

Contoh:

```javascript
function tambah(a, b) {
    return a + b;
}

console.log(tambah(5, 3)); // 8
```

### 6. Cara JavaScript Memilih Elemen HTML Menggunakan `document.getElementById()`

`document.getElementById("nama_id")` bekerja dengan mengambil satu elemen dalam struktur dokumen DOM yang memiliki atribut `id` sesuai dengan string yang diberikan sebagai argumen.

Contoh:

```html
<p id="pesan">Teks awal</p>

<script>
    document.getElementById("pesan").textContent = "Hello World";
</script>
```

Pada contoh tersebut, JavaScript mencari elemen dengan ID `pesan`, kemudian mengubah teks di dalamnya menjadi `Hello World`.

---

## Kesimpulan

Berdasarkan Praktikum 5 JavaScript, dapat dipahami penggunaan dasar JavaScript untuk menampilkan output, menerima input pengguna, melakukan operasi aritmetika, menggunakan fungsi, menerapkan percabangan kondisi, dan memanipulasi elemen HTML melalui DOM.

Praktikum ini juga menerapkan event listener, validasi input, manipulasi tampilan halaman, serta pembuatan mini project kalkulator nilai mahasiswa. Dengan demikian, JavaScript dapat digunakan untuk membuat halaman web yang interaktif dan mampu memproses data dari pengguna.
