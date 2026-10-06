# Rancangan UI/UX & Security - TaniPlan

Berdasarkan Dokumen Perencanaan Aplikasi (PRD) dan roadmap proyek, berikut adalah rancangan rinci untuk tahap **UI/UX dan Security (Pertemuan 2-3)** dari aplikasi mobile TaniPlan.

## 1. Rancangan UI/UX (Desain & Pengalaman Pengguna)

Mengingat target pengguna utama adalah petani skala kecil hingga menengah yang mungkin berusia lanjut dan beraktivitas di bawah terik matahari, prinsip utama desain adalah **Aksesibilitas (Kemudahan Penggunaan)**.

### A. Panduan Visual (Visual Guidelines)
*   **Palet Warna:** 
    *   **Warna Primer:** Hijau daun segar (melambangkan pertanian dan pertumbuhan). Digunakan untuk tombol utama, header, dan elemen aktif.
    *   **Warna Sekunder/Background:** Putih bersih atau abu-abu sangat muda.
    *   **Kontras Tinggi:** Teks selalu berwarna gelap (hitam/abu-abu tua) di atas latar terang, atau teks putih di atas latar hijau gelap untuk memastikan keterbacaan di bawah sinar matahari.
*   **Tipografi (Typography):**
    *   **Ukuran Besar (Large Typography):** Ukuran font minimal 16sp untuk teks biasa, dan lebih besar untuk judul.
    *   **Jenis Font:** Sans-serif modern dan bersih (seperti Inter atau Roboto) yang mudah dibaca tanpa hiasan berlebih.
*   **Ikonografi & Elemen Interaktif:**
    *   **Ikon Berukuran Besar:** Ikon yang deskriptif dan mudah dipahami (misal: ikon matahari untuk cuaca, ikon daun untuk tanaman, ikon uang untuk jurnal).
    *   **Target Sentuhan (Touch Target):** Area tombol minimal berukuran 48x48 dp untuk menghindari salah tekan oleh pengguna yang menggunakan sarung tangan atau memiliki jari yang kasar.
    *   **Minimalisir Teks Rumit:** Gunakan panduan visual lebih dari pada paragraf teks panjang.

### B. Struktur Layar Utama (Wireframe Concept)
1.  **Dashboard (Beranda):**
    *   **Header:** Salam sapaan dan info cuaca mini.
    *   **Kartu Cuaca Utama:** Prakiraan cuaca hari ini secara visual (cerah/hujan) yang besar.
    *   **Pengingat Hari Ini:** Kartu berisi jadwal terdekat (contoh: "Waktunya memupuk Padi - Sore ini").
    *   **Harga Pasar Singkat:** Ticker harga komoditas utama pengguna hari ini.
2.  **Agri-Ledger (Jurnal Keuangan):**
    *   Ringkasan Saldo/Keuntungan bersih di bagian atas dengan warna hijau (untung) / merah (rugi).
    *   Daftar pengeluaran dan pemasukan dengan font besar.
    *   Tombol "Tambah Catatan" (Floating Action Button) yang sangat mencolok.
3.  **Smart Calendar (Jadwal):**
    *   Tampilan kalender bulanan yang disederhanakan dengan indikator titik hijau pada tanggal yang memiliki kegiatan.
    *   Daftar agenda berurutan ke bawah.

---

## 2. Rancangan Keamanan (Security)

Untuk aplikasi Expo/React Native, implementasi keamanan berfokus pada melindungi data pengguna di perangkat dan memastikan proses login yang aman tanpa membebani pengguna.

### A. Autentikasi Dasar (Basic Authentication)
*   **Login Mudah:** Menyediakan login berbasis Nomor Telepon (OTP via WhatsApp/SMS) karena lebih familiar bagi petani dibandingkan email/password.
*   **Sesi Tetap (Persistent Session):** Setelah login pertama kali, pengguna tidak perlu login berulang-ulang kecuali mereka logout atau token kedaluwarsa dalam waktu yang sangat lama.
*   **State Management:** Menggunakan Context API atau state management ringan (Zustand) untuk menyimpan status autentikasi di memori selama aplikasi berjalan.

### B. Penyimpanan Aman (Secure Storage)
*   **Token Autentikasi:** Menyimpan access token atau session ID menggunakan `expo-secure-store`. Ini mengenkripsi data di perangkat (menggunakan Keystore di Android dan Keychain di iOS), sehingga aman dari peretasan lokal.
*   **Data Sensitif Lokal:** Jika ada data keuangan (jurnal) yang perlu disinkronkan secara asinkron, simpan versi sementaranya dengan aman atau pastikan tidak ada data kartu kredit/identitas rahasia yang disimpan dalam plain text menggunakan `AsyncStorage` biasa.
*   **Contoh Implementasi Teknis:**
    ```javascript
    import * as SecureStore from 'expo-secure-store';

    async function saveToken(key, value) {
      await SecureStore.setItemAsync(key, value);
    }

    async function getToken(key) {
      return await SecureStore.getItemAsync(key);
    }
    ```

### C. Keamanan API (Network Security) - Persiapan
*   Semua komunikasi ke backend (untuk mengambil harga pasar, cuaca, atau sinkronisasi jurnal) wajib menggunakan **HTTPS**.
*   Validasi input sederhana di sisi klien (Client-side validation) sebelum mengirim data catatan keuangan untuk mencegah injeksi atau kesalahan format.

---
## Kesimpulan Tahap Ini
Pada pertemuan 2-3 ini, fokus teknis di React Native/Expo adalah membangun komponen UI dasar (Button, Card, Text) yang dapat digunakan ulang (reusable) sesuai desain aksesibel, mengatur navigasi tab utama (Expo Router), dan menyiapkan alur Login palsu (mock login) yang menyimpan status masuk ke dalam `expo-secure-store`.
